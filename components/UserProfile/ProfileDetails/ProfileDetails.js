/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import { Button, Container } from '@mui/material';

const ProfileDetails = () => {
    return (
        <div className='md:px-8 md:py-8'>
              <Box sx={{ flexGrow: 1 }}>
        <Grid className='m-2' container spacing={2}>
            <Grid item xs={12} md={4}>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>About Me</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li><BusinessCenterIcon/> UX Desginer At Pixelstrap</li>
                                        <li><LibraryBooksIcon/> Studied Computer Science</li>
                                        <li><FavoriteIcon/> Relationship Status</li>
                                        <li><LocationOnIcon/> Lived In London</li>
                                        <li><BloodtypeIcon/> Blood Group</li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div className='my-8'>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>Followers</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='text-center'>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6  rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Rakibul Hasan</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/11.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Monirul Fahad</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/3.jpg" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Shihab</h6>
                                                <button className='bg-indigo-500 text-white  p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Kawsar Hossain</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between  my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Abu Bakker</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Rashedul Islam</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>Following</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                <ul className='text-center align-center'>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6  rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Rakibul Hasan</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/11.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Monirul Fahad</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/3.jpg" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Shihab Hossain</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Kawsar Hossain</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between  my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Abu Bakker</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-2/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div className='w-5/6 m-auto'>
                                                <h6 className='font-bold'>Rashedul Islam</h6>
                                                <button className='bg-indigo-500 text-white p-2 rounded hover:bg-cyan-300 hover:text-black'>Add Friend</button>
                                            </div>
                                        </li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div className='my-8'>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>Latest Photos</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='flex justify-evenly'>
                                       <img src="https://admin.pixelstrap.com/viho/assets/images/social-app/post-1.png" className='w-20 h-16' alt="" />
                                       <img src="https://admin.pixelstrap.com/viho/assets/images/social-app/post-6.png" className='w-20 h-16' alt="" />
                                       <img src="https://admin.pixelstrap.com/viho/assets/images/social-app/post-7.png" className='w-20 h-16' alt="" />
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>Friends</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='flex flex-wrap justify-evenly'>
                                        <img src="https://admin.pixelstrap.com/viho/assets/images/user/6.jpg" className="w-12 h-12   rounded-full border-4 border-indigo-600" alt="" />
                                        <img src="https://admin.pixelstrap.com/viho/assets/images/user/6.jpg" className="w-12 h-12   rounded-full border-4 border-indigo-600" alt="" />
                                        <img src="https://admin.pixelstrap.com/viho/assets/images/user/6.jpg" className="w-12 h-12   rounded-full border-4 border-indigo-600" alt="" />
                                        <img src="https://admin.pixelstrap.com/viho/assets/images/user/6.jpg" className="w-12 h-12   rounded-full border-4 border-indigo-600" alt="" />
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
            </Grid>
            <Grid item xs={12} md={8}>
                 <div className='shadow-lg p-4 rounded'>
                     <Container>
                     <div className='flex justify-between mx-4'>
                          <div className='flex mb-4'>
                              <img src="https://admin.pixelstrap.com/viho/assets/images/user/7.jpg" className="w-12 h-12   rounded-full border-4 border-indigo-600" alt="" />
                              <div className='ml-4'>
                                  <h2 className='font-bold text-2xl'>Elon Mask</h2>
                                  <p>22 Hours Ago</p>
                              </div>
                          </div>
                          <div>
                               <MoreHorizIcon/>
                          </div>
                      </div>
                      <div>
                          <img className='mx-4' src="https://admin.pixelstrap.com/viho/assets/images/user-profile/post1.jpg" alt="" />
                          <p className='my-3 mx-4 font-bold'>+5 people react this post</p>
                          <p className='font-bold mx-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <div>
                              <ul className='flex mx-4'>
                                  <li><FavoriteIcon/> Like 20</li>
                                  <li className='mx-5'><MessageIcon/> comment 5</li>
                                  <li><ShareIcon/> Share 3</li>
                              </ul>
                          </div>
                      </div>
                     </Container>
                 </div>
            </Grid>
        </Grid>
  </Box>
        </div>
    );
};

export default ProfileDetails;