/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import useFirebase from '../../Firebase/useFirebase'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Register = () => {
  // getting user slce status  data
  const status = useSelector((state) => state?.reducers?.user.status)

  // router nextjs hook for routing
  const router = useRouter()

  // getting register function from use firebase here
  const { createUser ,signInWithGoogle} = useFirebase()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()
  const submitHandler = (data) => {
    createUser(data.email, data.password, data.name, router)
    reset()
  }

   const handleGoogleAuth=()=>{
    signInWithGoogle()
    .then((result) => {
      console.log(result.user);
      router.replace("/");
    })
     
     
   }


  return (
    <div className='dark:bg-lightDark bg-slate-100'>
    
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
                <p >Full name</p>
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
                  disabled={status ? true : false}
                >
                  Register
                </button>
              </div> 
            </form>
            <button className="bg-white shadow  mb-6 text-black mx-auto flex  justify-center text-center px-10 py-3   cursor-pointer " onClick={handleGoogleAuth}>
              Continue With 
              <img src="https://i.ibb.co/x7hBCcs/Google-G-Logo-svg-removebg-preview.png" alt="" className='w-6 ml-2'/> 
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
