/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
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
import CelebrationIcon from '@mui/icons-material/Celebration';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import { Button, Container,Grid , Avatar,Box} from '@mui/material';
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
const UserDetails = (props) => {
  const id = props.props.id;
  // console.log(props);
  const [details,setDetails] = useState([]);
  const [blogs,setBlogs] = useState([]);
  // console.log(blogs);
  useEffect(() =>{
      fetch("https://polar-hamlet-38117.herokuapp.com/users")
      .then(res => res.json())
      .then(data => setDetails(data))
  },[])
  const info = details.filter(td => td._id === id);

  //------- here filter blogs by email ---------//
  const email = info[0]?.email;
  // console.log(email);
  useEffect(() =>{
    fetch("https://polar-hamlet-38117.herokuapp.com/blogs")
    .then(res => res.json())
    .then(data => setBlogs(data))
},[])
  
const blogData = blogs.filter(dt => dt.blogger.email === email);

    return (

// here start user details
    <div className='md:px-8 md:py-8 dark:bg-Docy-AlmostBlack'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid className='m-2' container spacing={2}>
            <Grid item xs={12} md={4}>
                      <div className='mt-10 shadow p-4 bg-slate-100 dark:bg-darkBlue dark:text-white text-black'>
                        <h6 className='font-bold'>About {info[0]?.displayName}</h6>
               <ul>
                           <hr className='mb-4'/>
                   <li className='mb-4'><BusinessCenterIcon sx={{color:'#2563EC',mr:1}}/> {info[0]?.profession} At Docy</li>
                       <li className='mb-4'><LibraryBooksIcon sx={{color:'#2563EC',mr:1}}/> Education:  </li>
                       <li className='mb-2' ><FavoriteIcon sx={{color:'#2563EC',mr:1}}/> Relation: </li>
                       <li className='mb-2'><LocationOnIcon sx={{color:'#2563EC',mr:1}}/> Lived In {info[0]?.address}</li>
                       <li className='mb-2'><BloodtypeIcon sx={{color:'#2563EC',mr:1}}/> (A+)</li>
                       <li className='mb-2'><CelebrationIcon sx={{color:'#2563EC'}}/> Birthday : {info[0]?.birthDate}</li>
                       <li className='mb-2'><ShareIcon sx={{color:'#2563EC'}}/> Website : {info[0]?.website}</li>
                           
               </ul>
                          
                         </div>
                         {/* here follower options */}
                        <div className='my-8 bg-slate-100 dark:bg-darkBlue dark:text-white text-black'>
                            <Accordion className='dark:bg-darkBlue dark:text-white text-black' >
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>{info[0]?.displayName} Followers</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <hr className='mb-4'/>
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                      {info[0]?.followers?.map((person) => (
                                        <Grid item xs={2} sm={12} md={12} key={person?._id}>
                                               <ul className='text-center '>
                                        <li className=''>
                                           <div className="info flex items-center hover:bg-slate-100 p-2">
                                           <img className='w-12 h-12 rounded-full' src={person?.image} alt="" />
                                             <p className='font-bold ml-3'>{person?.name}</p></div>    
                                        </li>
                                      </ul>
                                        </Grid>
                                      ))}
                                    </Grid>
                                  </Box>
                                  
                                </AccordionDetails>
                            </Accordion>
                        </div>
                      {/* here following option */}
                      <div className='my-8 '>
                            <Accordion  className='dark:bg-darkBlue dark:text-white text-black'>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <h6 className='font-bold'>{info[0]?.displayName} Following</h6>
                                </AccordionSummary>
                                <AccordionDetails>
                                <hr className='mb-4'/>
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                      {info[0]?.following?.map((person) => (
                                        <Grid item xs={2} sm={12} md={12} key={person?._id}>
                                               <ul className='text-center '>
                                        <li className=''>
                                           <div className="info flex items-center hover:bg-slate-100 p-2">
                                           <img className='w-12 h-12 rounded-full' src={person?.image} alt="" />
                                             <p className='font-bold ml-3'>{person?.name}</p></div>    
                                        </li>
                                      </ul>
                                        </Grid>
                                      ))}
                                    </Grid>
                                  </Box>
                                  
                                </AccordionDetails>
                            </Accordion>
                        </div>
                     
            </Grid>
            <Grid item xs={12} md={8}>
               <Container>
               <h3 className='font-bold text-sm md:text-2xl w-96 mx-auto my-8  title  dark:text-white text-black'>
                 <span className='text-blue-600'>{info[0]?.displayName}</span> Posts</h3>
               <hr />
            {blogData?.length == 0 ? <div>
              <h2 className='text-center mt-8 mb-10 text-red-500'>He did not upload any blog</h2>
              <img className='w-full mx-auto' src="https://e7.pngegg.com/pngimages/910/744/png-clipart-illustration-coque-apple-iphone-4s-oops-fond-speech-bubble-comics-text.png" alt="" />
            </div> : 
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {blogData?.map((blog) => (
                <Grid item xs={2} sm={4} md={12} key={blog?._id}>
                    <Grid  className="mb-8" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={6} md={4}>
                          <img className='h-full' src={blog?.image} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                        <Link onClick={() => dispatch(ADD_TO_BLOG(blog))}
                  href={`/blog/${blog?._id}`}>
                          <a>
                          <div className='dark:bg-darkBlue dark:text-white border hover:shadow  md:rounded  px-6 py-5 md:h-64 h-72'>
                            {/* <p className='text-red-600'>{blog?.title}</p> */}
                            <h3 className='font-bold pt-4 pb-10 hover:underline cursor-pointer '>{blog?.title} </h3>
                            <div className="md:flex  items-center justify-between">
                            <div className="flex items-center mb-4">
                            <Avatar
                                  alt="Bloggers image"
                                  src={info[0]?.image}
                                  sx={{ width: 40, height: 40,mr:2 }}
                                />
                              <p>{blog?.blogger?.displayName} <br />
                                <small className='hidden md:flex'> {blog?.uploadDate} - {blog?.uploadTime}</small></p>
                            </div>
                            <div>
                              <p> <ForumOutlinedIcon sx={{ width: 18, height: 18 }} />{blog?.comment?.length}</p>
                              </div>
                            </div>
                          </div>
                          </a>
                          </Link>
                        </Grid>
                    </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>}
               
               </Container>
            </Grid>
        </Grid>
  </Box>
        </div>
    );
};

export default UserDetails;