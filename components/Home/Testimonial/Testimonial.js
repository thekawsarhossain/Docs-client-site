/* eslint-disable @next/next/no-img-element */
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Container, Typography } from '@mui/material'

const Testimonial = () => {
  const [sliders, setSliders] = useState([])

  useEffect(() => {
    fetch(`./slider.json`)
      .then((res) => res.json())
      .then((data) => setSliders(data))
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  return (
    <div className="slider pb-24">
      <Container>
        <Slider {...settings}>
          {sliders.map((slider) => (
            <div
              key={slider.title}
              className="container mx-auto flex flex-wrap px-5 py-24 lg:w-8/12"
            >
              <div className="-m-4 mx-auto flex  flex-wrap justify-between">
                <div className=" p-4 md:w-full lg:w-3/5 ">
                  <div className="flex flex-col p-4 sm:flex-row">
                    <div className="flex-grow text-Docy-Dark dark:text-white">
                      <Typography variant="h4">{slider.title}</Typography>
                      <h4 className="mt-6 font-bold text-Docy-Dark dark:text-white">
                        {slider.name}
                      </h4>
                      <p className="text-indigo-600">{slider.designation}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-full  lg:w-2/5">
                  <div className="flex  flex-col rounded-lg sm:flex-row">
                    <img
                      src={slider.img}
                      alt="img"
                      width="370"
                      height="500"
                      className='object-cover'
                    ></img>
                    <div className="rounded-one  hidden  md:block "></div>
                    <div className="rounded-tow  hidden  md:block "></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default Testimonial
