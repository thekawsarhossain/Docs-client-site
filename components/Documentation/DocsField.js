import DocsBanner from './DocsBanner'
import DocsSubBanner from './DocsSubBanner'
import { Box, Container, Grid } from '@mui/material'
import DocsFooter from './DocsFooter'
import AllDocs from './AllDocs'
const DocsField = () => {
  return (
    <Box sx={{background:"#131417",color:"white"}}>
      <DocsBanner/>
      <DocsSubBanner/>
    <Container>
   <AllDocs/>
    </Container>
   <DocsFooter/>
    </Box>
  )
}

export default DocsField
