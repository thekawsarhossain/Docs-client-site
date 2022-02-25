import { Avatar, Box, Container, Link } from '@mui/material'
import Navbar from '../../Shared/Navbar/Navbar'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import SearchIcon from '@mui/icons-material/Search'

const BlogHeroSection = () => {
  return (
    <div>
      <Navbar></Navbar>
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
      {/* Sub-banner section  */}
      <div>
        <Box sx={{ background: '#1F3341' }}>
          <Container sx={{ color: 'white', py: 1 }}>
            <div className="flex justify-between ">
              <div className="flex items-center	text-sm	">
                <>
                  <Link href="/">
                    <a className="text-gray-400">Home</a>
                  </Link>
                  <ArrowForwardIosRoundedIcon sx={{ fontSize: '15px' }} />
                </>
                <>Blogs</>
              </div>
              <div className="">
                <p className="flex">
                  <input
                    style={{ minHeight: '30px' }}
                    placeholder="Search"
                    className="rounded-l-lg py-1 px-2 text-black"
                    type="text"
                  />
                  <button className="self-center rounded-r-lg bg-slate-400 px-3 py-1">
                    <SearchIcon />
                  </button>
                </p>
              </div>
            </div>
          </Container>
        </Box>
      </div>
    </div>
  )
}

export default BlogHeroSection
