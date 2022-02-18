import { Box} from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
const DocsSubBanner = () => {
  return (
    <Box sx={{background:'#1F3341'}}>
     <div class="container mx-auto text-white py-3">
      <div className="flex justify-between mx-4">
      <div className="flex text-sm	items-center	">
       <>Home <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></> 
       <>Docs <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></>
       <>Docy Documentation</>
      </div>
      <div className="time text-sm	">
        <p> <AccessTimeRoundedIcon  sx={{fontSize:'17px'}}/> Updated on Jan 10, 2022</p>
      </div>
      </div>
     </div>
    </Box>
  );
}

export default DocsSubBanner;