/* eslint-disable @next/next/no-img-element */
import React from 'react'
// import Image from 'next/image'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import { Container } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const fakeData = [
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_1.png',
    title: 'Find answers and ask new questions',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_2.png',
    title: 'Manage the people and discussions you follow',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_3.png',
    title: 'Award points, level up, and earn new privileges',
  },
]

const SearchCommunity = () => {
  return (
    // <div className="mt-5">
    //     <div className='my-5 text-center'>
    //         <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_sm.png" width="150px" height="150px" />
    //         <h2>New to Communities?</h2>
    //         <Button  className='mt-3 text-black bg-indigo-500 '>Join The Community < ArrowForwardIcon/></Button>
    //     </div>
    //     <div className='w-11/12 m-auto mt-8'>
    //         <Box sx={{ flexGrow: 1 }}>
    //             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    //                 {fakeData.map((item) => (
    //                 <Grid item xs={12} sm={6} md={4} key={item?.title}>
    //                     <div className='py-8 my-12 text-center bg-white border-indigo-500 drop-shadow-2xl rounded-3xl hover:border-t-4'>
    //                         <img src={item?.icon} width="50px" height="50px" />
    //                         <h3 className='w-3/4 m-auto'>{item?.title}</h3>
    //                         <Link href="/"><a className='font-bold'>How to search Community < ArrowForwardIcon/></a></Link>
    //                     </div>
    //                 </Grid>
    //                 ))}
    //             </Grid>
    //         </Box>
    //         </div>
    // </div>
    <div className="pb-24 pt-28">
      <Container>
        <div className="mb-16 text-center">
          <div className="flex justify-center">
          <img
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_sm.png"
            alt="community"
          />
          </div>
          <h2 className="mb-8 text-5xl font-normal">New to Communities?</h2>

          <a href="#" className="action_btn wow fadeInUp">
            Join the community <ArrowRightAltIcon />
          </a>
        </div>

        <div className="grid justify-center grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 md:col-span-6">
            <div className="community-box wow fadeInUp">
              <div className="flex justify-center mb-8">
                <img
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_1.png"
                  alt="community"
                />
              </div>
              <div className="community-content">
                <h3 className="com-title">
                  Find answers and ask new questions
                </h3>
                <a href="#" className="text-base font-medium text-gray-500 hover:mr-1 hover:text-theme-400">
                  How to Search Communities <ArrowRightAltIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 md:col-span-6">
            <div className="community-box wow fadeInUp">
              <div className="flex justify-center mb-8">
                <img
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_2.png"
                  alt="community"
                />
              </div>
              <div className="community-content">
                <h3 className="com-title">
                  Manage the people and discussions you follow
                </h3>
                <a href="#" className="text-base font-medium text-gray-500 hover:mr-1 hover:text-theme-400">
                  How to Search Communities <ArrowRightAltIcon  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 md:col-span-6">
            <div className="community-box wow fadeInUp">
              <div className="flex justify-center mb-8">
                <img
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_3.png"
                  alt="community"
                />
              </div>
              <div className="community-content">
                <h3 className="com-title">
                  Award points, level up, and earn new privileges
                </h3>
                <a href="#" className="text-base font-medium text-gray-500 hover:mr-1 hover:text-theme-400">
                  How to Search Communities <ArrowRightAltIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SearchCommunity
