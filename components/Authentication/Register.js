import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = data =>{
    console.log(data);
  }

  return (
    <Box sx={{background:"#131417",color:'white'}}>
     <Link href="/">
            <a className="flex justify-center absolute mx-auto m-6 ml-2 z-50">
              <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
            </a>
   </Link>
   <div className='grid grid-cols-12 gap-4'>
    <div className='md:col-span-4 col-span-12 h-96 md:min-h-screen bg-blue-700 relative'>
    <img src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/top_ornamate.png" className="absolute" alt="top ornament" />
<img src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/bottom_ornamate.png" className="absolute bottom-0 right-0" alt="bottom ornament" />
<div className='flex justify-center '>
<img src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/man_image.png" className="absolute md:bottom-1/3" alt="man image with lock" />
</div>
    </div>
    <div className='md:col-span-8 col-span-12 flex items-center'>
      <div className='max-w-lg mx-auto'>
        <div className='text-center pb-8'>
        <h2>Create An Account</h2>
        <h5 className='mt-3'><span className='text-gray-400 mr-2 '>Already have an Account?</span> 
        <Link href='/login'>
         Already Login
          </Link>
          </h5>
          </div>
    <form
          className="register-form p-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label>
            <span className="font-semibold">User Name</span>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "You most enter name",
                },
              })}
              className={`${errors.name ? "ring-2 ring-red-500" : null} "block w-full px-5 py-4  rounded-md border text-black mb-6 mt-2 "`}
              placeholder="Full name"
            />
            <span className="py-2 text-sm text-red-500">
              {errors?.name?.message}
            </span>
          </label>
          <label>
            <span className="register__form__title">Your Email</span>
            <input
              type="email"
              name="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "You most enter email address",
                },
                minLength: {
                  value: 8,
                  message: "This is not long enough to be an email",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "invalid email address",
                },
              })}
              className={`${errors.email ? "ring-2 ring-red-500" : null} "block w-full px-5 py-4  rounded-md border text-black mb-6 mt-2 "`}
              placeholder="Email"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.email?.message}
            </span>
          </label>
          <label>
            <span className="register__form__title">Password</span>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "You most enter password",
                },
                minLength: {
                  value: 6,
                  message: "Password lenth is more then 5",
                },
              })}
              className={`${errors.password ? "ring-2 ring-red-500" : null} "block w-full px-5 py-4  rounded-md border text-black mb-6 mt-2 "`}
              placeholder="Password"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.password?.message}
            </span>
          </label>
          <label>
            <span className="register__form__title">Conform Password</span>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "You most enter confirm Password",
                },
                minLength: {
                  value: 6,
                  message: "confirm Password lenth is more then 5",
                },
              })}
              className={` ${
                errors.confirmPassword ? "ring-2 ring-red-500" : null
              } "block w-full px-5 py-4  rounded-md border text-black mb-6 mt-2 "`}
              placeholder="Confirm Password"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.confirmPassword?.message}
            </span>
          </label>
 
          <div className="flex justify-center">
            <input
              type="submit"
              className="mb-6 cursor-pointer w-48 py-3 px-7 text-white rounded bg-indigo-600"
              value="Create an Account"
            />
          </div>
        </form>
        </div>
    </div>
    </div>
    </Box>
   
  );

}

export default Register;