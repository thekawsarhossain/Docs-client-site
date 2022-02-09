import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
const Testimonial = () => {
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
    <div className="slider">
      <div className=" container mx-auto my-12">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="container mx-auto flex flex-wrap px-5 py-24 lg:w-8/12">
            <div className="-m-4 mx-auto flex  flex-wrap justify-between">
              <div className=" p-4 md:w-full lg:w-2/5 ">
                <div className="flex  flex-col p-4 sm:flex-row">
                  <div className="flex-grow ">
                    <h2 className="mb-3 pr-16  text-4xl leading-normal text-white">
                      Hendrerit laoreet incidunt molestie eum placeat, neque
                      ridiculus? Maecenas incididunt aperiam tempora cumque
                      quos?
                    </h2>
                    <h4 className="mt-6 font-bold text-white">Rasedul Alam</h4>
                    <p className="text-indigo-600">software developer</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-full  lg:w-2/5">
                <div className="flex  flex-col rounded-lg sm:flex-row">
                  <Image
                    src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/02/feedback_img-1.jpg"
                    alt="img"
                    width="370"
                    height="500"
                  ></Image>
                  <div className="rounded-one  hidden  md:block "></div>
                  <div className="rounded-tow  hidden  md:block "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-wrap px-5 py-24 lg:w-8/12">
            <div className="-m-4 mx-auto flex  flex-wrap justify-between">
              <div className=" p-4 md:w-full lg:w-2/5 ">
                <div className="flex  flex-col p-4 sm:flex-row">
                  <div className="flex-grow ">
                    <h2 className="mb-3 pr-16  text-4xl leading-normal   text-white">
                      Tinkety tonk old fruit victoria sponge squiffy bleeder
                      twit the bee's knees loo David, buggered haggle pear
                      shaped bubble and squeak.”
                    </h2>
                    <h4 className="mt-6 font-bold text-white">
                      Shajibul Alam Shihab
                    </h4>
                    <p className="text-indigo-600">software developer</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-full  lg:w-2/5">
                <div className="flex  flex-col rounded-lg sm:flex-row">
                  <Image
                    src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/02/feedback_img_02-1.jpg"
                    alt="img"
                    width="370"
                    height="500"
                  ></Image>
                  <div className="rounded-one  hidden  md:block "></div>
                  <div className="rounded-tow  hidden  md:block "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-wrap px-5 py-24 lg:w-8/12">
            <div className="-m-4 mx-auto flex  flex-wrap justify-between">
              <div className=" p-4 md:w-full lg:w-2/5 ">
                <div className="flex  flex-col p-4 sm:flex-row">
                  <div className="flex-grow ">
                    <h2 className="mb-3 pr-16  text-4xl leading-normal   text-white">
                      Curabitur vitae dignissimos pulvinar eligendi ullamcorper,
                      laoreet, accusantium numquam habitant quaerat minim
                      consequatur”
                    </h2>
                    <h4 className="mt-6 font-bold text-white">Monirul Fahad</h4>
                    <p className="text-indigo-600">software developer</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-full  lg:w-2/5">
                <div className="flex  flex-col sm:flex-row ">
                  <Image
                    src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/02/feedback_img_04-1.jpg"
                    alt="img"
                    width="370"
                    height="500"
                  ></Image>
                  <div className="rounded-one  hidden  md:block "></div>
                  <div className="rounded-tow  hidden  md:block "></div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
