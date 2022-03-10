/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
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
import { Button, Container,Grid , Avatar,Box} from '@mui/material';
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
const UserDetails = () => {
    return (
        <div className='md:px-8 md:py-8'>
              <Box sx={{ flexGrow: 1 }}>
        <Grid className='m-2' container spacing={2}>
            <Grid item xs={12} md={4}>
                      <div className='mt-10 shadow p-4 bg-slate-100'>
                        <h6 className='font-bold'>About Rakib</h6>
                        <ul>
                           <hr className='mb-4'/>
                            <li className='mb-4'><BusinessCenterIcon/> UX Designer At Docy</li>
                                <li className='mb-4'><LibraryBooksIcon/> BBA </li>
                                <li className='mb-2' ><FavoriteIcon/> Single</li>
                                <li className='mb-2'><LocationOnIcon/> Lived In Sonargoan</li>
                                <li className='mb-2'><BloodtypeIcon/> (A+)</li>
                                    
                                    </ul>
                          
                         </div>
                         {/* here follower options */}
                        <div className='my-8 '>
                            <Accordion >
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>Rakibs  Followers</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <hr />
                                    <ul className='text-center mt-4'>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6>
                                          </div>
                                           
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6>
                                          </div>
                                           
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6>
                                          </div>
                                           
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6>
                                          </div>
                                           
                                        </li>
                                       
                                     </ul>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                      {/* here following option */}
                      <div className='my-8 '>
                            <Accordion >
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>Rakibs Following</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <hr />
                                    <ul className='text-center mt-4'>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6></div>    
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6></div>    
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6></div>    
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6></div>    
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6></div>    
                                        </li>
                                        <li className=' px-4 mb-6'>
                                           <div className="info flex items-center">
                                           <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-Y0BFICoasm2f78WUpEWY7l60FZx-BPaf4jmA=s96-c" 
                                            className="w-16 h-16  rounded-full border-4 border-indigo-600" alt="" />
                                             <h6 className='font-bold ml-3'>Rakibul Hasan</h6></div>    
                                        </li>
                                      </ul>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                     
            </Grid>
            <Grid item xs={12} md={8}>
               <Container>
               <div className=''>
                     <h2 className='md:ml-96 ml-28 mt-6 mb-10 title'>My Posts</h2>
                      <div>
                      <Grid  className="mb-8" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Grid item xs={12} sm={6} md={4}>
           <img src='https://images.unsplash.com/photo-1604700403855-dc64a1320324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' className='-mb-4 h-80 md:h-64 w-full md:rounded object-cover' alt="" />
         </Grid>
         <Grid item xs={12} sm={6} md={8}>
         <Link href='/'>
           <a>
           <div className=' border hover:shadow  md:rounded  px-6 py-5 md:h-64 h-72'>
             <p className='text-red-600'>news</p>
             <h3 className='font-bold pt-4 pb-10 hover:underline cursor-pointer '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <div className="md:flex  items-center justify-between">
             <div className="flex items-center mb-4">
             <Avatar
                  alt="Bloggers image"
                  src='/'
                  sx={{ width: 40, height: 40,mr:2 }}
                />
               <p> RH santo <br />
                 <small className='hidden md:flex'> 02/03/2022 - 7:30 pm</small></p>
             </div>
             <div>
               <p> <ForumOutlinedIcon sx={{ width: 18, height: 18 }} />2</p>
               </div>
             </div>
           </div>
           </a>
          </Link>
         </Grid>
         </Grid>
      </div>
      {/* here all post */}
                      <div>
                      <Grid  className="mb-8" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Grid item xs={12} sm={6} md={4}>
           <img src='https://images.unsplash.com/photo-1604700403855-dc64a1320324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' className='-mb-4 h-80 md:h-64 w-full md:rounded object-cover' alt="" />
         </Grid>
         <Grid item xs={12} sm={6} md={8}>
         <Link href='/'>
           <a>
           <div className=' border hover:shadow  md:rounded  px-6 py-5 md:h-64 h-72'>
             <p className='text-red-600'>news</p>
             <h3 className='font-bold pt-4 pb-10 hover:underline cursor-pointer '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <div className="md:flex  items-center justify-between">
             <div className="flex items-center mb-4">
             <Avatar
                  alt="Bloggers image"
                  src='/'
                  sx={{ width: 40, height: 40,mr:2 }}
                />
               <p> RH santo <br />
                 <small className='hidden md:flex'> 02/03/2022 - 7:30 pm</small></p>
             </div>
             <div>
               <p> <ForumOutlinedIcon sx={{ width: 18, height: 18 }} />2</p>
               </div>
             </div>
           </div>
           </a>
          </Link>
         </Grid>
         </Grid>
                      </div>
               </div>
               </Container>
            </Grid>
        </Grid>
  </Box>
        </div>
    );
};

export default UserDetails;