/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import aboutImage from '../../Images/about.png'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'

const AboutContent = () => {
  return (
    <>
      <div className="pt-12 minimal-header">
        <Container>
          <div className="minimal-header-text ">
            <h1>About Us</h1>
            <div className="flex justify-center gap-3 mt-3">
            <p >
        <Link href='/'>
        <a>Home</a>
        </Link> 
       <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/> Contact</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="mb-16">
        <Container>
          <div className="grid items-center grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-8 md:mb-0">
                {/* <Image
                  width=""
                  height=""
                  src={aboutImage}
                  className="w-full"
                  alt=""
                /> */}
                <img
                  src="https://docbanao.bdtask.com/assets/img/about.png"
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="text-block">
                <h6 className="heading-sm">About</h6>
                <h3>A united world, connected by technology</h3>
                <ul className="list-disc">
                  <li>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking.
                  </li>
                  <li>
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters.
                  </li>
                  <li>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum.
                  </li>
                </ul>
                <hr />
                <blockquote className="blockquote quote-text">
                  <p className="mb-0">
                    “Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.”
                  </p>
                  <cite className="quote-attribution">
                    Jhankar Mahabub, Owner & CEO, Programming Hero.
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AboutContent
