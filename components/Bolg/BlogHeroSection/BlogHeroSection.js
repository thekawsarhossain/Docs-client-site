import { Avatar, Box, Container, Link } from '@mui/material'
import Navbar from '../../Shared/Navbar/Navbar'

const BlogHeroSection = () => {
  return (
    <div>
      <Navbar />
      {/* Banner section  */}
      <div style={{ backgroundColor: '#223044', minHeight: '310px' }}>
        <Container>
          <div
            style={{ minHeight: '310px' }}
            className="flex w-full text-white "
          >
            <div className="self-center">
              <h1 className="font-serif text-4xl">Docy Blog List</h1>
              <p className="pt-2 font-mono">
                Keep explore, keep taking knowledge, be happy
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default BlogHeroSection
