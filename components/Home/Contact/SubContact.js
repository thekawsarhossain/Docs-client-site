import { Box, Container } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import Link from 'next/link';

const SubContact = () => {
  return (
    <Box sx={{background:"#1F3341",color:"white",py:1.5}}>
      <Container>
      <div className="flex 	items-center	">
       <><p className='text-gray-300'><Link href='/'> 
       Home
       </Link></p> <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></> 
       <>Contact </>
      </div>
      </Container>
    </Box>
  );
}

export default SubContact;