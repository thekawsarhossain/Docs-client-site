import DocsBanner from "./DocsBanner";
import DocsSubBanner from './DocsSubBanner'
import { Box, Grid} from '@mui/material'
import DocsField1 from "./DocsField1";
import DocsField2 from "./DocsField2";
import DocsField3 from "./DocsField3";
const DocsField = () => {
  return (
    <Box sx={{background:"#131417",color:"white"}}>
      <DocsBanner/>
      <DocsSubBanner/>
    <div className="container ">
    <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid sx={{background:"#1E1F26",mt:3}} item xs={12} sm={4} md={4}>
      <DocsField1/>
       </Grid>
      <Grid item xs={12} sm={6} md={6}>
     <DocsField2/>
       </Grid>
      <Grid item xs={12} sm={4} md={2}>
    
       </Grid>
     </Grid>
    </div>
    </Box>
  );
}

export default DocsField;