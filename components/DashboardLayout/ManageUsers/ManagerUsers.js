/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
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
    fetch(`http://localhost:5000/manage-users`)
      .then((res) => res.json())
      .then((data) => setManageUsers(data))
  })
  return (
    <Box>
      <h2 className="mt-3 mb-16">User List</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {manageUsers.map((data) => (
            <Grid item xs={12} sm={4} md={3} key={data.name}>
              <div className=" h-full rounded bg-white shadow-md dark:bg-gray-900 dark:text-white">
                <div>
                  <img
                    src={data.coverImg}
                    className="h-full w-full"
                    alt={data.name}
                  />
                  <div className="-mt-10 flex justify-center">
                    <img
                      src={data.userImg}
                      className="h-20 w-20  rounded-full border-4 border-indigo-600 object-cover"
                      alt={data.name}
                    />
                  </div>
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
                  <h3 className="text-black-500 ">{data.name}</h3>
                  <p className="mt-1 mb-6 text-zinc-400">{data.designation}</p>

                  <div>
                    <ul className="flex justify-evenly border-t font-medium  ">
                      <li className="pt-3 ">
                        Follower <br />
                        <h3>{data.follower}</h3>
                      </li>
                      <li className="border-x border-slate-300 px-8 pt-3">
                        Following <br /> <h3>{data.following}K</h3>
                      </li>
                      <li className=" pt-3">
                        Total Post <br /> <h3>{data.totalPost}</h3>
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
