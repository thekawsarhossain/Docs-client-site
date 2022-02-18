import { Box, Container} from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
const ForumSubBanner = () => {
  return (
    <div>
     <Box sx={{background:'#1F3341'}}>
     <Container sx={{color:'white',py:1.8}}>
      <div className="flex justify-between ">
      <div className="flex text-sm	items-center	">
       <>Home <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></> 
       <>Forum <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></>
       <>Forums Communities</>
      </div>
      <div className="time text-sm	">
        <p> <AccessTimeRoundedIcon  sx={{fontSize:'17px'}}/> Updated on Jan 10, 2022</p>
      </div>
      </div>
     </Container>
    </Box>
    </div>
  )
}

export default ForumSubBanner
