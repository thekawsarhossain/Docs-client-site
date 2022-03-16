/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Container } from '@mui/material'
import ScrollToTop from 'react-scroll-to-top'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
const Footer = () => {
  return (
    <footer className=" bg-slate-100 pt-10 text-white dark:bg-black dark:text-black  lg:pt-32">
      <ScrollToTop
        smooth
        top="500"
        color="#ffffff"
        viewBox="0 0 330 330"
        svgPath="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606
        C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0
        c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80
        C261.465,190.251,261.465,199.749,255.606,205.606z"
        style={{
          borderRadius: '20px',
          paddingLeft: '6px',
          backgroundColor: '#4f46e5',
        }}
      />
      {/* <FooterBanner /> */}
      <Container>
        <div className="grid grid-cols-1 gap-4 py-16 lg:grid-cols-4">
          {/* footer logo & short description */}
          <div>
            <Link href="/">
              <a>
                <img
                  className="hidden w-40 dark:block"
                  src="https://i.ibb.co/KspLSX3/docy-logo.png"
                  alt=""
                />
                <img
                  className="block w-40 dark:hidden"
                  src="https://i.ibb.co/Zx7g8yW/logo-2x-1.png"
                  alt=""
                />
              </a>
            </Link>
            <p className="my-6 text-lg text-secondary">
              I’m available for commissions and collaborations, and i’m excited
              to hear from you about new projects.!!
            </p>

            {/* social icons here  */}
            <div className="md:-ml-8 ">
            <div>
                <ul className="sidebar-icon flex text-gray-500">
                  <li>
                    <Link  href="https://www.facebook.com/Docy-107057608607026">
                      <a target="_blank">
                        <FacebookIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <TwitterIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <PinterestIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <LinkedInIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <InstagramIcon />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*footer quick navigation area  */}
          <div className="md:ml-16">
            <h2 className="footer-nav-title">Quick links</h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href='/about'>
                  <a className='footer-nav-item'>About us</a>
                </Link>
              </li>
              <li>
                <Link href='/ask'>
                  <a className='footer-nav-item'>Ask Question</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a className='footer-nav-item'>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href='/helpdesk'>
                  <a className='footer-nav-item'>Help Desk</a>
                </Link>
              </li>
            
            </nav>
          </div>
          {/*footer quick navigation area  */}
          <div className="">
            <h2 className="footer-nav-title">Quick links</h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href='/documentation'>
                  <a className='footer-nav-item'>Documentation</a>
                </Link>
              </li>
              <li>
                <Link href='/blogs'>
                  <a className='footer-nav-item'>Blogs</a>
                </Link>
              </li>
              <li>
                <Link href='/404'>
                  <a className='footer-nav-item'>404 Page</a>
                </Link>
              </li>
              <li>
                <Link href='/helpdesk'>
                  <a className='footer-nav-item'>Help Desk</a>
                </Link>
              </li>
            
            </nav>
          </div>
          {/*footer quick navigation area  */}
          <div className="md:-ml-6">
            <h2 className="footer-nav-title">Contact Us</h2>
            <p className='footer-nav-item'><LocationOnIcon /> Docy Centre, Gulshan, Dhaka</p>
            <p className='footer-nav-item'><EmailIcon /> Official: profolks@gmail.com</p>
            <p className='footer-nav-item'><CallIcon /> Helpline : 01887403752</p>
            
          </div>
        
         
        </div>
      </Container>
      {/* copyright text here  */}
      <p className="border-t border-secondary text-center">
        <span className="block py-6 text-secondary">
          &copy; 2022 All Rights Reserved by Programming folks
        </span>
      </p>
    </footer>
  )
}

export default Footer
