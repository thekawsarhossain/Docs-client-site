import { Box } from '@mui/material'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const Login = () => {
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

      {/* images here  */}
      <div className="grid grid-cols-12 gap-4">
        <div className="relative col-span-12 min-h-screen bg-blue-700 md:col-span-4">
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
          <div className="flex justify-center">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/door.png"
              className="absolute top-24"
              alt="man image with lock"
            />
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-start md:col-span-8">
          <div className="mx-auto w-full lg:w-3/5 ">
            <div className="pb-8 text-center">
              <h2>Login your account</h2>
              <h5 className="mt-3">
                <span className="mr-2 text-gray-400">
                  Don`t have an account?
                </span>
                <Link href="/register">
                  <span className="cursor-pointer text-lightBlue underline">
                    Register
                  </span>
                </Link>
              </h5>
            </div>
            <form
              className="register-form p-6"
              onSubmit={handleSubmit(submitHandler)}
            >
              {/* email input here  */}
              <label>
                <p className="font-semibold">Email</p>
                {/* showing error  */}
                <small className="text-red-400">{errors?.email?.message}</small>
                <input
                  type="email"
                  name="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'You have to write your email !',
                    },
                  })}
                  className=" auth-input mb-4"
                  placeholder="Enter your email"
                />
              </label>

              {/* pass word input here  */}
              <label>
                <p className="font-semibold">Password</p>
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
                      message: 'You have to write your password !',
                    },
                  })}
                  className=" auth-input mb-8 text-black"
                  placeholder="Enter your password"
                />
              </label>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mb-6 w-full rounded bg-indigo-600 py-3 px-7 text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Login
