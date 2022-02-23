import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import Link from 'next/link'

const Docs3 = () => {

  const[docs,setDocs]=useState([])
  useEffect(()=>{
    fetch('./docs.json')
    .then(res=>res.json())
    .then(data=>setDocs(data.slice(0,6)))
  })

  return (
    <div>
         <Box sx={{ flexGrow: 1,mt:10 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item   xs={12} sm={4} md={4} >
        <Image src='https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2017/12/Logo-1.png' width='80' height='80' alt='img' ></Image>
           <Typography variant='h5' sx={{mt:3,mb:2 }}>Rakibul Documentation</Typography>
           <Typography variant='p' sx={{ lineHeight: 2, }}>Spot of come to ever hand as lady meet on. Delicate contempt received two yet</Typography>
           <Button sx={{my:2}}>View All <ArrowForwardIcon sx={{ml:1}} /> </Button> 

      </Grid>
      <Grid item   xs={12} sm={8} md={8} >    
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {docs.map(doc=>
       <Grid key={doc.docsTitle} item sx={{mb:3}} xs={12} sm={6} md={6} >
       <Box sx={{display:'flex',  alignItems: 'center'}}>
             <Box sx={{background:"#424345", p:'15px', borderRadius:'10px'}}>
               <Image src={doc.docsImg} width='36' height='36'  alt='img'></Image></Box>
             <Box sx={{ml:3}}>
             <Box className='docs-btn'>
             <Link  href="/documentation">
            {doc.docsTitle}
            </Link>
             </Box>
            <p>{doc.description}</p>
             </Box>
           </Box>
       </Grid>
      )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default Docs3
;