/* eslint-disable @next/next/no-img-element */
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import Link from 'next/link'
import { Container } from '@mui/material'
import ScrollToTop from 'react-scroll-to-top'

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
        <div className="grid grid-cols-1 gap-6 py-16 lg:grid-cols-4">
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
            <p className="mt-2 text-lg text-secondary">
              I’m available for commissions and collaborations, and i’m excited
              to hear from you about new projects.!!
            </p>

            {/* social icons here  */}
            <div className="flex justify-start">
              <a className="footer-icon">
                <Facebook />
              </a>
              <a className="footer-icon">
                <Twitter />
              </a>
              <a className="footer-icon">
                <LinkedIn />
              </a>
            </div>
          </div>
          {/*footer quick navigation area  */}
          <div className="mx-8">
            <h2 className="footer-nav-title">Doc Contents</h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="footer-nav-item">First Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Second Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Third Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="mx-8">
            <h2 className="footer-nav-title">Doc Elements</h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="footer-nav-item">First Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Second Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Third Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="mx-8">
            <h2 className="footer-nav-title">Footnotes</h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="footer-nav-item">First Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Second Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Third Link</a>
              </li>
              <li>
                <a className="footer-nav-item">Fourth Link</a>
              </li>
            </nav>
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
