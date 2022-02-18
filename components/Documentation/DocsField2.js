import React, { useState, useEffect } from 'react';
import { Box, Grid } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image'
import Link from 'next/link'
const DocsField2 = () => {

  const[docs,setDocs]=useState([])
  useEffect(()=>{
    fetch('./docs.json')
    .then(res=>res.json())
    .then(data=>setDocs(data))
  })
  return (
    <Box sx={{ml:5}}>
    <h2 className="mt-16">Docy Documentation</h2>
    <div className="flex my-6 items-center">
   <AccessTimeIcon sx={{fontSize:'16px'}}/> <p className="ml-1 mr-2">Estimated reading: 1 minute </p>
   <RemoveRedEyeIcon sx={{fontSize:'16px'}} /> <p className="ml-1"> 110 views</p>
   </div>
   <p>Docy is a powerful, responsive, and high-performance online documentation WordPress theme that can assist you quickly develop your next product’s documentation. It can be used for documenting API, frameworks, plugins, templates, software, manual etc. It includes a lot of elements to make your interactive documentation efficiently.</p>
    
          
   <div className="mt-16">
   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {docs.map(doc=>
       <Grid item sx={{mb:3}} xs={12} sm={6} md={6} >
       <Box sx={{display:'flex',  alignItems: 'center'}}>
             <Box sx={{background:"#424345", p:'15px', borderRadius:'10px'}}>
               <Image src={doc.docsImg} width='36' height='36'  alt='img'></Image></Box>
             <Box sx={{ml:3}}>
             <Link href="/">
             <h4 className='docs-btn my-1'>{doc.docsTitle}</h4>
            </Link>
            <p>{doc.description}</p>
             </Box>
           </Box>
       </Grid>
      )}
    </Grid>
   </div>
    
    
    </Box>
  );
}

export default DocsField2;