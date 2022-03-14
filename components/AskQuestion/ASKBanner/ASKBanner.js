/* eslint-disable @next/next/no-img-element */

import { Container } from '@mui/material'
import Link from 'next/link'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const ASKBanner = () => {
  return (
    <div>
      <div className="breadcrumb_area_three relative  bg-Docy-paleGeen text-Docy-Dark dark:bg-Docy-Dark dark:text-white">
        {/* <img
          src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/leaf_left.png"
          className="one absolute"
          alt="leaf left"
          style={{ top: '0', left: '35px' }}
        />
        <img
          src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/leaf_right.png"
          className="four absolute"
          alt="leaf right"
          style={{ right: '0', bottom: '0' }}
        /> */}
        <div>
          <Container>
            <div
              style={{ minHeight: '200px' }}
              className=" w-full text-Docy-Dark dark:text-white "
            >
              <div className="pt-24 text-center">
                <h1 className="font-serif text-4xl">Hello! here is Docy</h1>
                <p className="pt-2 font-mono">
                  Find the answer of your question
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ASKBanner
