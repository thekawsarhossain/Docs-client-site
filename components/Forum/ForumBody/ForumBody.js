/* eslint-disable @next/next/no-img-element */

import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";


const ForumBody = () => {

  const [forums,setForums]=useState([])
  useEffect(()=>{
    fetch('./forum.json')
    .then(res=>res.json())
    .then(data=>setForums(data))
  })
  return (
    <div className="md:mt-6 mt-4 text-white" style={{ background:"#131417" }}>
  <Container>
   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
   <Grid item xs={12} sm={6} md={8} >
    <Box>
    <Box sx={{background:"#2C303A",display:'flex' ,justifyContent:'space-between',alignItems:'center',my:3, py:'12px',px:'20px',borderRadius:'5px'}}>
      <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/answer.png"
        alt="answer action"/>
        <div className="ml-6 md:m-0">
          <h6 className="font-bold"> Can’t find an answer?</h6>
          <p>Make use of a qualified tutor to get the answer</p>
        </div>
        <div className="Qu-btn hidden md:block">
           <Link href='/' >
           Ask a Question
         </Link>
       </div>
      </Box>

      <Box sx={{boxShadow:'0px 3px 6px 0px rgb(4 73 89 / 20%)', mb:5}}>
      <Box sx={{border:'1px solid #424345',background:"#2C303A",display:'flex',justifyContent:'space-between',p:2.5, mt:10,borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}}>
        <div className="div-1 ">
          <p>Forum</p>
        </div>
       <div className="hidden md:block">
       <div className="div-2 flex ml-44 ">
          <p >Topics</p>
          <p className="ml-16 ">Post</p>
        </div>
       </div>
       <div className="div-3 hidden md:block">
          <p>Last Post</p>
        </div>
      </Box>
      {
        forums.map(forum=>
      <Box key={forum.topics} className="boxs" sx={{display:'flex',justifyContent:'space-between',p:3,border:'1px solid #424345'}}>
        <div className="div-1 flex items-center	">
          <div className="Fimg">
          <img 
           src={forum?.img}
                          alt="community"/>
          </div>
          <div className="F-info ml-5">
          <h5 className="font-bold cursor-pointer hover:text-sky-500">{forum?.title}</h5>
          <>{forum?.description.slice(0,29)}</>
          </div>
        </div>
       <div className="hidden md:block">
       <div className="div-2 flex  ">
          <p> <strong>{forum?.topics}</strong></p>
          <p className="ml-16"><strong>{forum?.post}</strong></p>
        </div>
       </div>
       <div className="div-3 hidden ml-5 md:block ">
          <p>{forum?.postDate}</p>
          <p className="flex justify-center	uImg">
            <img src={forum?.userImg} alt="img" />
          </p>
        </div>
      </Box>
          )
      }
      
      </Box>
    </Box>
    
    </Grid>
   <Grid item xs={12} sm={4} md={4} >
      <Box sx={{m:4}}>
        <h4 className="font-bold">Information</h4>  
        <div className="flex my-6">
          <p>Support is </p>
          <button className="ml-4 off-btn">offline</button>
        </div>
        <div >
          <h5 className="font-bold">Our office hours</h5>
          <p>Monday - Friday / 10am - 6pm (UTC +6) Dhaka</p>
        </div>
        <div className="mt-16">
          <h4 className="font-bold mb-5 uselink">Usefull Links</h4>
         <ul className="ul">
          <li > FAQs</li>
          <li > Popular</li>
          <li >Recent</li>
          <li >Unanswered</li>
         </ul>
        </div>
      </Box>
    </Grid>
  </Grid>
    </Container>
    </div>
  );
}

export default ForumBody;