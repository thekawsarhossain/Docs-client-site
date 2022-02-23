import { Container } from '@mui/material'
import BlogList from './BlogList'
import SideBar from './SideBar'

const BlogMainBody = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#21242c' }}>
        <Container>
          <div className="grid grid-cols-12 gap-6 py-8">
            <div className="col-span-12 md:col-span-8 xl:col-span-9">
              <BlogList></BlogList>
            </div>
            <div className="col-span-12 text-white md:col-span-4 xl:col-span-3">
              <SideBar></SideBar>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default BlogMainBody
