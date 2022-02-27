import { Box, Container} from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import Link from 'next/link';

const ForumSubBanner = () => {
  return (
    <div>
     <Box sx={{background:'#1F3341'}}>
     <Container sx={{color:'white',py:1.8}}>
      <div className="flex justify-between ">
      <div className="flex text-sm	items-center	">
        <>
       <Link href='/'> 
       <a className='text-gray-400'>
       Home
       </a>
       </Link>
        <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></> 
       <> <Link href='/'> 
       <a className='text-gray-400'>
       Forum
       </a>
       </Link> <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></>
       <>Forums Communities</>
      </div>
      <div className="time text-sm	hidden md:block">
        <p> <AccessTimeRoundedIcon  sx={{fontSize:'17px'}}/> Updated on Jan 10, 2022</p>
      </div>
      </div>
     </Container>
    </Box>
    </div>
  )
}

export default ForumSubBanner
