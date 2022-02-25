/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const CompleteWork = () => {
  return (
    <div className="bg-theme-400 pt-28 pb-24 text-white">
      <Container>
        <div>
          <h2 className="mb-14 text-center text-3xl font-bold">
            Over 1200+ <br /> completed work & Still counting.
          </h2>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={2.4}>
              <div className="rounded-lg bg-white py-5 px-9 text-center text-gray-900">
                <div className="mb-5 flex justify-center">
                  <img
                    src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-1.png"
                    alt="funfact"
                  />
                </div>
                <div className="fun-fact1-counter mb-2 text-4xl font-medium">
                  842
                </div>
                <h3 className="text-base font-bold text-gray-500">Users</h3>
              </div>
            </Grid>
            <Grid item xs={2} sm={4} md={2.4}>
              <div className="rounded-lg bg-white py-5 px-9 text-center text-gray-900">
                <div className="mb-5 flex justify-center">
                  <img
                    src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-2.png"
                    alt="funfact"
                  />
                </div>
                <div className="fun-fact2-counter mb-2 text-4xl font-medium">
                  923
                </div>
                <h3 className="text-base font-bold text-gray-500">Topics</h3>
              </div>
            </Grid>
            <Grid item xs={2} sm={4} md={2.4}>
              <div className="rounded-lg bg-white py-5 px-9 text-center text-gray-900">
                <div className="mb-5 flex justify-center">
                  <img
                    src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-3.png"
                    alt="funfact"
                  />
                </div>
                <div className="fun-fact3-counter mb-2 text-4xl font-medium">
                  196
                </div>
                <h3 className="text-base font-bold text-gray-500">Forums</h3>
              </div>
            </Grid>
            <Grid item xs={2} sm={4} md={2.4}>
              <div className="rounded-lg bg-white py-5 px-9 text-center text-gray-900">
                <div className="mb-5 flex justify-center">
                  <img
                    src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-4.png"
                    alt="funfact"
                  />
                </div>
                <div className="fun-fact4-counter mb-2 text-4xl font-medium">
                  650
                </div>
                <h3 className="text-base font-bold text-gray-500">Replies</h3>
              </div>
            </Grid>
            <Grid item xs={2} sm={4} md={2.4}>
              <div className="rounded-lg bg-white py-5 px-9 text-center text-gray-900">
                <div className="mb-5 flex justify-center">
                  <img
                    src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-5.png"
                    alt="funfact"
                  />
                </div>
                <div className="fun-fact5-counter mb-2 text-4xl font-medium">
                  364
                </div>
                <h3 className="text-base font-bold text-gray-500">Tags</h3>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default CompleteWork
