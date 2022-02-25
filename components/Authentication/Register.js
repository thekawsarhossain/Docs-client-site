/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'

const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()
  const submitHandler = (data) => {
    console.log(data)
    reset()
  }

  return (
    <Box sx={{ background: '#131417', color: 'white' }}>
      <Link href="/">
        <a className="absolute z-50 m-6 mx-auto ml-2 flex justify-center">
          <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
        </a>
      </Link>
      <div className="grid grid-cols-12 gap-4">
        <div className="relative col-span-12 h-96 bg-blue-700 md:col-span-4 md:min-h-screen">
          <img
            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/top_ornamate.png"
            className="absolute"
            alt="top ornament"
          />
          <img
            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/bottom_ornamate.png"
            className="absolute bottom-0 right-0"
            alt="bottom ornament"
          />
          <div className=" ">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/man_image.png"
              className="absolute bottom-0 md:bottom-1/3"
              alt="man image with lock"
            />
          </div>
        </div>
        <div className="col-span-12 flex items-center md:col-span-8">
          <div className="mx-auto w-full lg:w-3/5 ">
            <div className="pb-8 text-center">
              <h2>Create an account</h2>
              <h5 className="mt-3">
                <span className="mr-2 text-gray-400 ">
                  Already have an account?
                </span>
                <Link href="/login">
                  <a className="cursor-pointer text-lightBlue underline">
                    Login
                  </a>
                </Link>
              </h5>
            </div>
            <form
              className="register-form p-5"
              onSubmit={handleSubmit(submitHandler)}
            >
              <label>
                <p className="font-semibold">Full name</p>
                {/* showing error  */}
                <small className="text-red-400">{errors?.name?.message}</small>
                <input
                  type="text"
                  name="name"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'You have to write your full name !',
                    },
                  })}
                  className=" auth-input mb-4"
                  placeholder="Enter full name"
                />
              </label>
              <label>
                <p className="register__form__title">Email</p>
                {/* showing error  */}
                <small className="text-red-400">{errors?.email?.message}</small>
                <input
                  type="email"
                  name="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'You have to enter your email !',
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: 'invalid email address',
                    },
                  })}
                  className=" auth-input mb-4"
                  placeholder="Enter your email"
                />
              </label>
              <label>
                <p className="register__form__title">Password</p>
                {/* showing error  */}
                <small className="text-red-400">
                  {errors?.password?.message}
                </small>
                <input
                  type="password"
                  name="password"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'You have to enter your password  !',
                    },
                    minLength: {
                      value: 6,
                      message: 'Password length should be 6 character !',
                    },
                  })}
                  className=" auth-input mb-4"
                  placeholder="Enter your password"
                />
              </label>
              <label>
                <p className="register__form__title">Confirm Password</p>
                {/* showing error  */}
                <small className="text-red-400">
                  {errors?.confirmPassword?.message}
                </small>
                <input
                  type="password"
                  name="confirmPassword"
                  {...register('confirmPassword', {
                    required: {
                      value: true,
                      message: 'You have to confirm your password !',
                    },
                    minLength: {
                      value: 6,
                      message: 'Password length should be 6 character !',
                    },
                  })}
                  className=" auth-input mb-8"
                  placeholder="Confirm your password"
                />
              </label>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mb-6 w-full  rounded bg-indigo-600 py-3 px-7 text-white"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Register
