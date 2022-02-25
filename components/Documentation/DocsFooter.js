/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const DocsFooter = () => {
  return (
    <Box sx={{background:"#1D2746",overflow:"hidden"}}>
  <Container>
    <Grid sx={{display:"flex",alignItems:"center"}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid  item xs={12} sm={6} md={4}>
        <p className='mt-6 md:m-0 text-center text-white'>© 2021 All Rights Reserved by Programing Folks</p>  
     </Grid>
      <Grid  item xs={12} sm={6} md={4}>
      <div className=''>
        <ul className='flex  justify-center footers-icon'>
          <li>
            <Link href='/'>
            <a><FacebookIcon/></a>
            </Link>
          </li>
          <li>
            <Link href='/'>
            <a><TwitterIcon/></a>
            </Link>
          </li>
          <li>
            <Link href='/'>
            <a><YouTubeIcon/></a>
            </Link>
          </li>
          
        </ul>
      </div>  
       </Grid>
      <Grid sx={{display:"flex",justifyContent:"right"}} item xs={12} sm={6} md={4}>
      <img src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/footer/leaf_footter.png" alt="" />
       </Grid>
     </Grid>
    </Container>
    </Box>
  );
}

export default DocsFooter;