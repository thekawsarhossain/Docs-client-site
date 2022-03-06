import DocsBanner from './DocsBanner'
import DocsSubBanner from './DocsSubBanner'
import { Box, Container, Grid } from '@mui/material'
import DocsFooter from './DocsFooter'
import AllDocs from './AllDocs'
const DocsField = () => {
  return (
    <div className='dark:bg-Docy-AlmostBlack dark:text-white bg-slate-50 text-black'>
      <DocsBanner/>
      <DocsSubBanner/>
      <Container>
      <AllDocs/>
      </Container>
     <DocsFooter/>
    </div>
  )
}

export default DocsField