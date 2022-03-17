/* eslint-disable @next/next/no-img-element */

import { Container } from '@mui/material'
import Link from 'next/link'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const ASKBanner = () => {
  return (
    <div>
      <div className="breadcrumb_area_three relative  bg-Docy-paleGeen text-Docy-Dark dark:bg-Docy-Dark dark:text-white">
        <div
          style={{
            background: 'linearGradient( 60deg , #10b3d6 0%, #1d2746 100%)',
            padding: '60px 0 0px',
            position: 'relative',
          }}
          className="breadcrumb_area overflow-hidden"
        >
          <Container>
            <div
              className="custom_container container"
              style={{
                width: '100%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <form action="#" className="">
                <div className="relative flex justify-center">
                  <div className=" py-8 px-2">
                    <div>
                      <div className="md:flex">
                        <div className=" py-3">
                          <div className="relative flex">
                            <div>
                              <div className="text-center font-bold text-white dark:text-white">
                                <h1 className="font-serif text-4xl">
                                  Hello! here is Docy
                                </h1>
                                <p className="pt-2 font-mono">
                                  Find the answer of your question
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ASKBanner
