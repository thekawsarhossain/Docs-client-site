/* eslint-disable @next/next/no-img-element */
import { FormHelperText } from '@mui/material'
import Box from '@mui/material/Box'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DatePicker'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import {
  ADD_ERROR,
  ADD_USER,
  REMOVE_USER,
  SET_STATUS,
  REMOVE_DATA,
  fetchUserData,
} from '../../../Redux/Slices/userSlice'
import { useDispatch } from 'react-redux'
// } from '../Redux/Slices/userSlice'

const ProfileEdit = (props) => {
  const [imageLoading, setImageLoading] = useState(false)
  const [image, setImage] = useState(props?.userInfoFromDB?.image)
  const [value, setValue] = useState(new Date())
  const [newDate, setNewDate] = useState(new Date().toLocaleDateString())
  const [date, setDate] = useState(props.userInfoFromDB?.birthDate)
  // redux hooks here
  const dispatch = useDispatch()
  // if (!props?.userInfoFromDB?.birthDay) {
  //   setDate('')
  // }
  const addData = (e) => {
    setDate(e.value)
  }
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()

  const dragOver = (e) => {
    e.preventDefault()
  }

  const dragEnter = (e) => {
    e.preventDefault()
  }

  const dragLeave = (e) => {
    e.preventDefault()
  }

  const imageFileDrop = async (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setImageLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvszolotz/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()

    const field = 'thumbnail'
    const value = file.secure_url
    const newBlogData = { ...blogData }
    newBlogData[field] = value
    setBlogData(newBlogData)

    setImage(file.secure_url)
    // setImage(files[0])
    setImageLoading(false)
  }

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setImageLoading(true)
    console.log(e.target.files)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvszolotz/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    // console.log(file.public_id);
    const field = e.target.name
    const value = file.secure_url
    // const newBlogData = { ...blogData }
    // newBlogData[field] = value
    // setBlogData(newBlogData)
    setImage(file.secure_url)
    // setImage(files[0])
    setImageLoading(false)
  }

  // Save User Information
  const submitHandler = (data) => {
    const user = {
      email: props.userInfoFromDB?.email,
      ...data,
      birthDate: date,
      image: image,
    }
    console.log(date)
    SET_STATUS(true)
    if (
      (date && date !== props?.userInfoFromDB?.birthDate) ||
      image !== props?.userInfoFromDB?.image ||
      (data?.address && data?.address !== props?.userInfoFromDB?.address) ||
      (data?.biography &&
        data?.biography !== props?.userInfoFromDB?.biography) ||
      data?.displayName !== props?.userInfoFromDB?.displayName ||
      (data?.gender && data?.gender !== props?.userInfoFromDB?.gender) ||
      (data?.profession &&
        data?.profession !== props?.userInfoFromDB?.profession) ||
      (data?.website && data?.website !== props?.userInfoFromDB?.website)
    ) {
      fetch('https://polar-hamlet-38117.herokuapp.com/profile-update', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert('Profile updated successfully !')
            dispatch(fetchUserData(props.userInfoFromDB?.email))
          }
        })
        .catch((error) => dispatch(ADD_ERROR(error.message)))
        .finally(() => dispatch(SET_STATUS(false)))
    } else {
      alert("You didn't make any changes yet to update the profile !")
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
        }}
        className="my-5 rounded bg-slate-100 px-4 py-4 text-Docy-Dark dark:bg-Docy-DarkM dark:text-white"
      >
        <div className="grid grid-cols-12 gap-3">
          {/* Profile picture  */}
          <div className="col-span-12 flex justify-center md:col-span-6">
            <div
              className="mx-auto flex self-center overflow-hidden rounded-full border-2 border-white sm:mx-0"
              style={{ height: '150px', width: '150px' }}
            >
              <img
                style={{ height: '150px', width: '150px' }}
                className="mx-auto rounded-full border-2 border-white"
                src={image}
                alt=""
              />
            </div>
          </div>
          {/* Profile Photo Update Handling  */}
          <div className="col-span-12 flex flex-col md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>
              Profile Photo
            </FormHelperText>
            <div className="rounded-lg border-2 border-dotted border-gray-400 p-3 text-center">
              <label>
                <div
                  // className="mt-12 text-center"
                  onDragOver={dragOver}
                  onDragEnter={dragEnter}
                  onDragLeave={dragLeave}
                  onDrop={imageFileDrop}
                >
                  <div className="">
                    {imageLoading && (
                      <div>
                        <img
                          className="mx-auto animate-ping"
                          style={{ height: '50px', width: '50px' }}
                          src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                          alt=""
                        />
                        <p className="text-xl text-gray-400">Loading ...</p>
                      </div>
                    )}
                    {!imageLoading && (
                      <div>
                        <img
                          className="mx-auto animate-pulse"
                          style={{ height: '50px', width: '50px' }}
                          src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                          alt=""
                        />
                        <p className="text-md text-gray-400">
                          Drag & Drop your profile photo
                        </p>
                      </div>
                    )}
                    <p className="py-4">
                      <span className="rounded-lg bg-gray-400 px-2 py-2 font-semibold  text-Docy-Dark dark:text-white">
                        <AddAPhotoIcon className="animate-bounce" /> Browse File
                      </span>
                    </p>
                  </div>
                </div>
                <input
                  className="hidden"
                  type="file"
                  name="thumbnail"
                  placeholder="upload"
                  onChange={uploadImage}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 pb-2">
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Name</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="displayName"
              {...register('displayName')}
              defaultValue={props.userInfoFromDB?.displayName}
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>
              Date of Birth
            </FormHelperText>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Custom input"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue)
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <input
                      name="birthDate"
                      // {...register('birthDate')}
                      value={date}
                      className="w-full rounded-md border p-2 text-lg"
                      ref={inputRef}
                      // {...inputProps}
                      disabled
                    />
                    {newDate != value.toLocaleDateString() &&
                      addData({ ...inputProps })}
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Profession</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="profession"
              {...register('profession')}
              defaultValue={props.userInfoFromDB?.profession}
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Gender</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="gender"
              {...register('gender')}
              defaultValue={props.userInfoFromDB?.gender}
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Address</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="address"
              {...register('address')}
              defaultValue={props.userInfoFromDB?.address}
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Website</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="website"
              {...register('website')}
              defaultValue={props.userInfoFromDB?.website}
            />
          </div>
        </div>
        <div className="pt-3">
          <FormHelperText sx={{ color: 'gray' }}>Biography</FormHelperText>
          <textarea
            name="biography"
            {...register('biography')}
            id=""
            className="w-full rounded-md border p-2 text-lg"
            rows="5"
            defaultValue={props.userInfoFromDB?.biography}
          ></textarea>
        </div>
        <span className="">
          <input
            type="submit"
            className="c-btn btn-brand mt-5 cursor-pointer rounded px-6 py-3 font-bold text-white duration-200 hover:bg-black hover:text-white"
            value="Save changes"
          />
        </span>
      </form>
    </div>
  )
}

export default ProfileEdit
