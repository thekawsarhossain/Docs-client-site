/* eslint-disable @next/next/no-img-element */

import { Container } from '@mui/material'
import Link from 'next/link'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const ASKBanner = () => {
  return (
    <div>
      <div
        style={{
          padding: '170px 0 30px',
        }}
        className="breadcrumb_area_three relative  bg-Docy-paleGeen text-Docy-Dark dark:bg-Docy-Dark dark:text-white"
      >
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
              style={{ maxWidth: '100%', width: '100%' }}
              className=" m-auto"
            >
              <div className="flex flex-col justify-center md:flex-row md:justify-between">
                <h1
                  style={{
                    lineHeight: '66px',
                  }}
                  className="mb-4 text-center text-4xl font-bold text-Docy-Dark dark:text-white"
                >
                  Top Questions
                </h1>
                <div className="mb-4 self-center">
                  <Link href="/askQuestion">
                    <a>
                      <span className="rounded-lg bg-gray-400 px-3 py-3 text-2xl  font-semibold text-Docy-Dark dark:text-white">
                        Ask Question{' '}
                        <span className="">
                          <HelpOutlineIcon className="animate-pulse" />
                        </span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ASKBanner
