/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography } from "@mui/material";
import React, {  useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Review =()=>{
  const [sliders, setSliders] = useState([])

  useEffect(() => {
    fetch(`./slider.json`)
      .then((res) => res.json())
      .then((data) => setSliders(data))
  }, [])
   {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
     <Container sx={{mt:5}}>
        <div>
        <Slider {...settings}>
        {sliders.map((slider) => (
          <Grid key={slider?.title} spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={6} md={12}>
              <p>{slider?.title}</p>
              <img src={slider?.img} alt="" />
            </Grid>
          </Grid>
          ))}
        </Slider>
      </div>
     </Container>
    );
  }
}

export default Review;

// //   <div
// key={slider.title}
// className="container mx-auto flex flex-wrap px-5 py-24 lg:w-8/12"
// >
// <div className="-m-4 mx-auto flex  flex-wrap justify-between">
//   <div className=" p-4 md:w-full lg:w-3/5 ">
//     <div className="flex flex-col p-4 sm:flex-row">
//       <div className="flex-grow text-Docy-Dark dark:text-white">
//         <Typography variant="h4">{slider.title}</Typography>
//         <h4 className="mt-6 font-bold text-Docy-Dark dark:text-white">
//           {slider.name}
//         </h4>
//         <p className="text-indigo-600">{slider.designation}</p>
//       </div>
//     </div>
//   </div>
//   <div className="p-4 md:w-full  lg:w-2/5">
//     <div className="flex  flex-col rounded-lg sm:flex-row">
//       <img
//         src={slider.img}
//         alt="img"
//         width="370"
//         height="500"
//         className='object-cover'
//       ></img>
//       <div className="rounded-one  hidden  md:block "></div>
//       <div className="rounded-tow  hidden  md:block "></div>
//     </div>
//   </div>
// </div>
// </div>