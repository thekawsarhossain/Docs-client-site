/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WifiIcon from '@mui/icons-material/Wifi';

const ProfileBanner = () => {
    return (
        <div>     
        <div className='mt-4'>
              <Box sx={{ }}>
                   <div >
                     <img  className="relative w-full lg:h-96" src="https://admin.pixelstrap.com/viho/assets/images/user-profile/bg-profile.jpg"  alt="banner" />
                        <div  className="bg-slate-200 top-16 left-94 border p-2 m-3 lg:w-1/5 lg:absolute">         
                                    
                                    <div className='flex justify-center '>
                                        <img src="https://admin.pixelstrap.com/viho/assets/images/user/7.jpg" className="w-1/4 h-1/4 rounded-full border-4 border-indigo-600 mt-8 mb-4" alt="image" />
                                    </div>
                            <div className="mt-4 text-center">
                                <div>
                                    <Container>
                                    <ul className='flex justify-evenly text-sm font-bold mt-3 mb-4'>
                                        <li className='bg-slate-300 p-1 hover:bg-slate-500 hover:text-white rounded '><FacebookIcon sx={{fontSize:'20px'}}/></li>
                                        <li className='bg-slate-300 p-1 hover:bg-slate-500 hover:text-white rounded'><GoogleIcon sx={{fontSize:'20px'}}/></li>
                                        <li className='bg-slate-300 p-1 hover:bg-slate-500 rounded'><InstagramIcon sx={{fontSize:'20px'}}/></li>
                                        <li className='bg-slate-300 p-1 hover:bg-slate-500 rounded'><TwitterIcon sx={{fontSize:'20px'}}/></li>
                                        <li className='bg-slate-300 p-1 hover:bg-slate-500 rounded'><WifiIcon sx={{fontSize:'20px'}}/></li>
                                    </ul>
                                    </Container>
                                </div>
                                <h3 className="text-black-500 font-bold">Elon Mask</h3>
                                <p className="mt-1 mb-3">Manager</p>
                                <hr />
                                <div>
                                    <ul className='flex justify-evenly font-bold mt-3 p-3'>
                                        <li>Follower <br />10M</li>
                                        <li>Following <br /> 3K</li>
                                        <li>Total Post <br /> 5M</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                   </div>
              </Box>
           
          </div>
</div>
    );
};

export default ProfileBanner;