import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import FooterBanner from './FooterBanner/FooterBanner'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <FooterBanner />
      <div class="footer-parent">
        {/* footer logo & short description */}
        <div>
          <Link href="/">
            <a>
              <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
            </a>
          </Link>
          <p className="mt-2 text-lg text-secondary">
            I’m available for commissions and collaborations, and i’m excited to
            hear from you about new projects.!!
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
          <h2 className="quick-nav-title">Doc Contents</h2>
          <nav className="mb-10 list-none">
            <li>
              <a className="quick-nav-item">First Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Second Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Third Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="mx-8">
          <h2 className="quick-nav-title">Doc Elements</h2>
          <nav className="mb-10 list-none">
            <li>
              <a className="quick-nav-item">First Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Second Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Third Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="mx-8">
          <h2 className="quick-nav-title">Footnotes</h2>
          <nav className="mb-10 list-none">
            <li>
              <a className="quick-nav-item">First Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Second Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Third Link</a>
            </li>
            <li>
              <a className="quick-nav-item">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>

      <p className="border-t border-secondary text-center">
        <span className="mt-4 block py-6 text-secondary">
          &copy; 2022 All Rights Reserved by Programming folks
        </span>
      </p>
    </footer>
  )
}

export default Footer
