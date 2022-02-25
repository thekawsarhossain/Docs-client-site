/* eslint-disable @next/next/no-img-element */
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import FooterBanner from './FooterBanner/FooterBanner'
import Link from 'next/link'
import { Container } from '@mui/material'

const Footer = () => {
  return (
    <footer className=" bg-lightDark pt-10 text-white  lg:pt-32">
      {/* <FooterBanner /> */}
      <Container>
        <div className="grid grid-cols-1 gap-6 py-16 lg:grid-cols-4">
          {/* footer logo & short description */}
          <div>
            <Link href="/">
              <a>
                <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
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
