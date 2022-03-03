/* eslint-disable @next/next/no-img-element */

import { Container } from '@mui/material'

const ASKBanner = () => {
  return (
    <div>
      <div
        style={{
          padding: '170px 0 70px',
        }}
        className="breadcrumb_area_three relative  bg-Docy-paleGeen text-Docy-Dark dark:bg-Docy-Dark dark:text-white"
      >
        <img
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
        />
        <div>
          <Container>
            <div
              style={{ maxWidth: '100%', width: '100%' }}
              className=" m-auto text-center"
            >
              <h1
                style={{
                  lineHeight: '66px',
                }}
                className="mb-4 text-center text-5xl font-bold text-Docy-Dark dark:text-white"
              >
                Ask Question
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ASKBanner
