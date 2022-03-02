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
    name: 'Rakibul Hasan Santo',
    designation: 'Team Leader',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/3.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/1.jpg',
    follower: 96,
    following: 10,
    totalPost: 5
  },
  {
    name: 'Rashedul Islam',
    designation: 'Manager',
    userImg: 'https://i.ibb.co/J2gcS4t/myPhoto2.png',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/3.jpg',
    follower: 96,
    following: 10,
    totalPost: 5
  },
  {
    name: 'Marko Jensen3',
    designation: 'Manager',
    userImg: 'https://admin.pixelstrap.com/viho/assets/images/avtar/11.jpg',
    coverImg: 'https://admin.pixelstrap.com/viho/assets/images/user-card/2.jpg',
    follower: 96,
    following: 10,
    totalPost: 5
  },

]

const ManageUsers = () => {
    return (
        <Box>
            <Container>
                  <div className='mt-4'>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                          {fakeData.map((data) => (
                            <Grid item xs={12} sm={12} md={4} key={data.name}>
                                  <div className="drop-shadow-2xl border">
                                      <div>
                                          <img src={data.coverImg} className="w-full h-full" alt={data.name} />
                                          <div className='flex justify-center -mt-10'>
                                              <img src={data.userImg} className="w-1/4 h-1/4 rounded-full border-4 border-indigo-600" alt={data.name} />
                                          </div>
                                      </div>
                                      <div className="mt-4 text-center">
                                          <div>
                                              <Container>
                                              <ul className='flex justify-evenly text-sm font-bold mt-3 mb-4'>
                                                  <li className='bg-slate-300 p-1 hover:bg-green-500 hover:text-white rounded '><FacebookIcon /></li>
                                                  <li className='bg-slate-300 p-1 hover:bg-slate-500 hover:text-white rounded'><GoogleIcon/></li>
                                                  <li className='bg-slate-300 p-1 hover:bg-slate-500 rounded'><InstagramIcon/></li>
                                                  <li className='bg-slate-300 p-1 hover:bg-slate-500 rounded'><TwitterIcon/></li>
                                                  <li className='bg-slate-300 p-1 hover:bg-slate-500 rounded'><WifiIcon/></li>
                                              </ul>
                                              </Container>
                                          </div>
                                          <h3 className="text-black-500 ">{data.name}</h3>
                                          <p className="mt-1 mb-3">{data.designation}</p>
                                          <hr />
                                        <div>
                                            <ul className='flex justify-evenly font-bold mt-3 p-3'>
                                                <li>Follower <br />{data.follower}</li>
                                                <li>Following <br /> {data.following}K</li>
                                                <li>Total Post <br /> {data.follower}M</li>
                                            </ul>
                                        </div>
                                      </div>
                                  </div>
                             </Grid>
                          ))}
                        </Grid>
                      </Box>
                  </div>
            </Container>
       </Box>
    );
};

export default ManageUsers;