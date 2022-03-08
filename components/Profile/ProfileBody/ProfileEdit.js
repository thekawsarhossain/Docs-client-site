import { FormHelperText } from '@mui/material'

const ProfileEdit = (props) => {
  return (
    <div>
      <div
        style={{
          boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
        }}
        className="my-5 rounded bg-slate-100 px-4 py-4 text-Docy-Dark dark:bg-Docy-DarkM dark:text-white"
      >
        <div className="grid grid-cols-12 gap-3 pb-2">
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Name</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="country"
              defaultValue="Norway"
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Profession</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="country"
              defaultValue="Norway"
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Gender</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="country"
              defaultValue="Norway"
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Address</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="country"
              defaultValue="Norway"
            />
          </div>
          <div className="col-span-12 flex flex-col  md:col-span-6">
            <FormHelperText sx={{ color: 'gray' }}>Website</FormHelperText>
            <input
              className="rounded-md border p-2 text-lg"
              type="text"
              name="country"
              defaultValue="Norway"
            />
          </div>
        </div>
        <div className="pt-3">
          <FormHelperText sx={{ color: 'gray' }}>Biography</FormHelperText>
          <textarea
            name="area"
            id=""
            className="w-full rounded-md border p-2 text-lg"
            rows="5"
            defaultValue="Textarea"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit
