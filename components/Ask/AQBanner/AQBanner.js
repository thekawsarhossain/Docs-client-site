/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Container, Link } from '@mui/material'
import Navbar from '../../Shared/Navbar/Navbar'

const AQBanner = () => {
  return (
    <div>
      <Navbar />
      {/* Banner section  */}
      <div
        className="relative bg-Docy-paleGeen dark:bg-Docy-Dark "
        style={{ minHeight: '200px' }}
      >
        {/* <div>
          <img
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/leaf_left.png"
            alt=""
          />
          <img
            className="absolute top-40 left-24 hidden md:block"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/man_01.png"
            alt=""
          />
          <img
            className="absolute right-40 top-32 hidden md:block"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/man_02.png"
            alt=""
          />
          <img
            className="absolute right-0 top-24"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/leaf_right.png"
            alt=""
          />
        </div> */}
        <Container>
          <div
            style={{ minHeight: '200px' }}
            className=" w-full text-Docy-Dark dark:text-white "
          >
            <div className="pt-24 text-center">
              <h1 className="font-serif text-4xl">Hello! here is Docy</h1>
              <p className="pt-2 font-mono">
                Shear your question with Docy and find the best answer
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default AQBanner
