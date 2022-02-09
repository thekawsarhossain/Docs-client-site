import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
const Testimonial = () => {

  const [sliders,setSliders]= useState([]);

  useEffect(()=>{
fetch(`./slider.json`)
.then(res=>res.json())
.then(data=>setSliders(data))
  })
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <div className="slider">
      <div className=" container mx-auto my-12">
        <h2> Single Item</h2>
        <Slider {...settings}>
          {
            sliders.map(slider=>
              <div className="container px-5 py-24 lg:w-8/12 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4  mx-auto justify-between">
      <div className=" p-4 lg:w-2/5 md:w-full ">
        <div className="flex  p-4 sm:flex-row flex-col">  
          <div className="flex-grow ">
            <h2 className="text-white pr-16  text-4xl leading-normal mb-3">{slider.title}</h2>
             <h4 className='text-white font-bold mt-6'>{slider.name}</h4>
             <p className="text-indigo-600">{slider.designation}</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-2/5  md:w-full">
        <div className="flex  sm:flex-row flex-col rounded-lg">
         <Image src={slider.img} alt='img' width='370' height='500' ></Image>
         <div className="rounded-one  hidden  md:block "></div>
         <div className="rounded-tow  hidden  md:block "></div>
        </div>
      </div>
    </div>
  </div>
      )
   }
</Slider>
    </div>
    </div>
  );
}

export default Testimonial;