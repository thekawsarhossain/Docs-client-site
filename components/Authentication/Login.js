/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import useFirebase from '../../Firebase/useFirebase'
import GoogleIcon from '@mui/icons-material/Google'
import { useSelector } from 'react-redux'
const Login = () => {
  // getting loading status data here
  const status = useSelector((state) => state?.reducers?.user?.status)

  // router nextjs hook for routing
  const router = useRouter()

  // getting register function from use firebase here
  const { signIn, signInWithGoogle } = useFirebase()

  // login with email and pass here
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()
  const submitHandler = (data) => {
    signIn(data?.email, data?.password, router)
    reset()
  }

  // Box sx={{ background: '#131417', color: 'white' }}
  return (
    <div className="bg-slate-100 dark:bg-lightDark">
      {/* <Link href="/" >
        <a className="absolute z-50 md:ml-96 ml-80  mt-4">
          <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
        </a>
      </Link> */}
      <h2 className="absolute  z-50 pt-28 pl-16 font-bold leading-relaxed tracking-wide text-white">
        We are design changers <br /> do what matters.
      </h2>

      {/* images here  */}
      <div className="grid grid-cols-12 gap-4">
        <div className="relative col-span-12 flex h-screen items-center justify-center bg-blue-700 md:col-span-4">
          <img
            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/top_ornamate.png"
            className="absolute top-0 left-0"
            alt="top ornament"
          />
          <img
            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/bottom_ornamate.png"
            className="absolute bottom-0 right-0"
            alt="bottom ornament"
          />
          <div>
            <img
              className="mt-36"
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/door.png"
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
                  disabled={status ? true : false}
                >
                  Login
                </button>
              </div>
            </form>
            <button
              className="mx-auto mb-6  flex cursor-pointer justify-center bg-white  px-10 py-3 text-center text-black   shadow "
              onClick={() => signInWithGoogle(router)}
              disabled={status ? true : false}
            >
              Continue With
              <img
                src="https://i.ibb.co/x7hBCcs/Google-G-Logo-svg-removebg-preview.png"
                alt="googleImage"
                className="ml-2 w-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
