import React, { useState } from "react";
import axios from 'axios';
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const AddReviews = () => {
  const { register, handleSubmit,reset } = useForm();
  // user info
  const user = useSelector((state) => state?.reducers?.user?.currentUser)

  const onSubmit = data =>{

// here user details
 data.name= user.displayName
 data.img= user.photoURL
 data.status ="pending";
   console.log(data)
    axios.post('https://polar-hamlet-38117.herokuapp.com/addReviews',data)
    .then(res =>{
      console.log(res);
      if(res.data.insertedId){
        alert('Reviews Successfully');
        reset();
      }
    })
   };

  return (
    <>
      <Container className="text-center dark:bg-Docy-DarkGray bg-slate-100 my-16 p-2">
      <h1 className=" mb-20 mt-6 text-center">Add Your Reviews</h1>
      <div className=" reviews">
      <form  onSubmit={handleSubmit(onSubmit)}>
        
      {/* register your input into the hook by invoking the "register" function */}
      {/* <Rating name="size-large" {...register("ratings")} onChange={(e =>(e.target.value))} size="large" /> */}
      <input className=" dark:bg-zinc-700" type='text' required  placeholder="Enter your profession" {...register("profession")} />
     
      <textarea  name="" required className=" dark:bg-zinc-700" cols="30" rows="10" placeholder="Write Your Feedback.." {...register("description")}></textarea>
    
     <button type="submit"  className=" text-white mt-8 mb-12 bg-indigo-600" >Submit</button>
     
    </form>
    </div>
    </Container>
      </>
 

  );
}

export default AddReviews;