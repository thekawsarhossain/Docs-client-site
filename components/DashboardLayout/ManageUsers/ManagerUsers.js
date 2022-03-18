/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import WifiIcon from '@mui/icons-material/Wifi'
import { useEffect, useState } from 'react'

const ManageUsers = () => {
  const [manageUsers, setManageUsers] = useState([])
  // here users
  useEffect(() => {

    fetch(`https://polar-hamlet-38117.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setManageUsers(data))
  })


  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {manageUsers.map((data) => (
            <Grid item xs={12} sm={4} md={3} key={data?._id}>
              <div className="cursor-pointer h-full rounded bg-white shadow-md dark:bg-gray-900 dark:text-white">
                <div>
                  <img
                    src={data?.image}
                    className="h-52 w-full"
                    alt={data?._id}
                  />
                 <Link href={`/adminDashboard/manageUser/${data?._id}`}>
                    <div className="-mt-10 flex justify-center">
                        <img
                          src={data?.image}
                          className="h-20 w-20  rounded-full border-4 border-indigo-600 object-cover"
                          alt={data?._id}
                        />
                      </div>
                  </Link>
                </div>
                <div className=" p-6 text-center">
                  <div>
                    <Container>
                      <ul className="user-icon my-4 flex  justify-center">
                        <li>
                          <FacebookIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <GoogleIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <InstagramIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <TwitterIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <WifiIcon sx={{ fontSize: '18px' }} />
                        </li>
                      </ul>
                    </Container>
                  </div>
                  {/* here user details  */}
                  <h3 className="text-black-500 ">{data?.displayName}</h3>
                  <p className="mt-1 mb-6 text-zinc-400">{data?.profession}</p>

                  <div>
                    <ul className="flex justify-evenly border-t font-medium  ">
                      <li className="pt-3 ">
                        Follower <br />
                        <h3>{data?.followers?.length}</h3>
                      </li>
                      <li className="border-x border-slate-300 px-8 pt-3">
                        Following <br /> <h3>{data?.following?.length}</h3>
                      </li>
                      <li className=" pt-3">
                        Total Post <br /> <h3>{data?.totalPost?.length}</h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default ManageUsers
