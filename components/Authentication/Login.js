import { Box } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Login = () => {
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
    <div className='md:col-span-4 col-span-12 min-h-screen bg-blue-700 relative'>
      
    <img src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/top_ornamate.png" className="absolute" alt="top ornament" />
<img src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/bottom_ornamate.png" className="absolute bottom-0 right-0" alt="bottom ornament" />
<div className='flex justify-center'>
<img src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/themes/docy/assets/img/sign-up/door.png" className="absolute top-1/4" alt="man image with lock" />
</div>
    </div>
    <div className='md:col-span-8 col-span-12 flex items-center'>
      <div className='max-w-lg mx-auto'>
        <div className='text-center pb-8'>
        <h2>Sign In Your Account</h2>
        <h5 className='mt-3'>
          <span className='text-gray-400 mr-2'>Don't have an Account?</span>
          <Link href='/register'>
          Sign Up Here
          </Link>
          </h5>
          </div>
    <form
          className="register-form p-6"
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
              className={`${errors.name ? "shadow-lg ring-red-500" : null} "block w-full px-5 py-4  rounded-md border text-black mb-8 mt-2 "`}
              placeholder="Full name"
            />
            <span className=" py-2 text-sm text-red-400">
              {errors?.name?.message}
            </span>
          </label>
         
          <label>
            <span className="font-semibold ">Password</span>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please Enter Your Password",
                }
              })}
              className={` ${
                errors.confirmPassword ? "ring-2 ring-red-500" : null
              } "block w-full px-5 py-4  rounded-md border text-black mb-8 mt-2"`}
              placeholder="Confirm Password"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.confirmPassword?.message}
            </span>
          </label>
 
          <div className="flex justify-center">
            <input
              type="submit"
              className="mb-6 w-48 py-3 px-7 text-white rounded bg-indigo-600 cursor-pointer"
              value="Sign In"
            />
          </div>
        </form>
        </div>
    </div>
    </div></Box>
   
  );

}

export default Login;