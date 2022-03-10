/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WifiIcon from '@mui/icons-material/Wifi';

const fakeData = [
  {
    name: 'Mariya khan',
    designation: 'Developer',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/3.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/1.jpg',
    follower: 6250,
    following: 10,
    totalPost: 152
  },
  {
    name: 'Kamarun joss',
    designation: 'Manager',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/16.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/3.jpg',
    follower: 9600,
    following: 25,
    totalPost: 500
  },
  {
    name: 'Soniya hoq',
    designation: 'Designer',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/11.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/2.jpg',
    follower: 2025,
    following: 2,
    totalPost: 50
  },
  {
    name: 'Soniya hoq',
    designation: 'Designer',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/11.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/2.jpg',
    follower: 2025,
    following: 2,
    totalPost: 50
  },
  {
    name: 'Mariya khan',
    designation: 'Developer',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/3.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/1.jpg',
    follower: 6250,
    following: 10,
    totalPost: 152
  },
  {
    name: 'Kamarun joss',
    designation: 'Manager',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/16.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/3.jpg',
    follower: 9600,
    following: 25,
    totalPost: 500
  },
  {
    name: 'Soniya hoq',
    designation: 'Designer',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/11.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/2.jpg',
    follower: 2025,
    following: 2,
    totalPost: 50
  },
  {
    name: 'Soniya hoq',
    designation: 'Designer',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/11.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/2.jpg',
    follower: 2025,
    following: 2,
    totalPost: 50
  }

]

const ManageUsers = () => {
    return (
        <Box >
    
          <h2 className='mt-3 mb-16'>User List</h2>
             <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                          {fakeData.map((data) => (
                            <Grid item xs={12} sm={4} md={3} key={data.name}>
                                  <div className=" h-full shadow-md bg-white dark:bg-gray-900 dark:text-white rounded">
                                      <div>
                                          <img src={data.coverImg} className="w-full h-full" alt={data.name} />
                                          <div className='flex justify-center -mt-10'>
                                              <img src={data.userImg} className="w-1/4 h-1/4 rounded-full border-4 border-slate-400" alt={data.name} />
                                          </div>
                                      </div>
                                      <div className=" p-6 text-center">
                                          <div>
                                              <Container>
                                              <ul className='user-icon flex justify-center  my-4'>
                                                  <li ><FacebookIcon sx={{fontSize:'18px'}}/></li>
                                                  <li ><GoogleIcon sx={{fontSize:'18px'}}/></li>
                                                  <li ><InstagramIcon sx={{fontSize:'18px'}}/></li>
                                                  <li><TwitterIcon sx={{fontSize:'18px'}}/></li>
                                                  <li ><WifiIcon sx={{fontSize:'18px'}}/></li>
                                              </ul>
                                              </Container>
                                          </div>
                                          <h3 className="text-black-500 ">{data.name}</h3>
                                          <p className="mt-1 mb-6 text-zinc-400">{data.designation}</p>
                                        
                                        <div>
                                            <ul className='flex justify-evenly font-medium border-t  '>
                                                <li className='pt-3 '>Follower <br /><h3>{data.follower}</h3></li>
                                                <li className='border-x border-slate-300 px-8 pt-3'>Following <br /> <h3>{data.following}K</h3></li>
                                                <li className=' pt-3'>Total Post <br /> <h3>{data.totalPost}</h3></li>
                                            </ul>
                                        </div>
                                      </div>
                                  </div>
                             </Grid>
                          ))}
                        </Grid>
             </Box>
       </Box>
    );
};

export default ManageUsers;