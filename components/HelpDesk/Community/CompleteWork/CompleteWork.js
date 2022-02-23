/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container } from '@mui/material'

const CompleteWork = () => {
  return (
    <div className="bg-theme-400 pt-28 pb-24 text-white">
      <Container>
        <div>
          <h2 className="mb-14 text-center text-3xl font-bold">
            Over 1200+ <br /> completed work & Still counting.
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="rounded-lg bg-white text-center py-5 px-9 text-gray-900">
            <div className="mb-5 flex justify-center">
              <img
                src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-1.png"
                alt="funfact"
              />
            </div>
            <div className="mb-2 text-4xl fun-fact1-counter font-medium">842</div>
            <h3 className="text-base text-gray-500 font-bold">Users</h3>
          </div>
          <div className="rounded-lg bg-white text-center py-5 px-9 text-gray-900">
            <div className="mb-5 flex justify-center">
              <img
                src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-2.png"
                alt="funfact"
              />
            </div>
            <div className="mb-2 text-4xl fun-fact2-counter font-medium">1,023</div>
            <h3 className="text-base text-gray-500 font-bold">Topics</h3>
          </div>
          <div className="rounded-lg bg-white text-center py-5 px-9 text-gray-900">
            <div className="mb-5 flex justify-center">
              <img
                src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-3.png"
                alt="funfact"
              />
            </div>
            <div className="mb-2 text-4xl fun-fact3-counter font-medium">196</div>
            <h3 className="text-base text-gray-500 font-bold">Forums</h3>
          </div>
          <div className="rounded-lg bg-white text-center py-5 px-9 text-gray-900">
            <div className="mb-5 flex justify-center">
              <img
                src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-4.png"
                alt="funfact"
              />
            </div>
            <div className="mb-2 text-4xl fun-fact4-counter font-medium">650</div>
            <h3 className="text-base text-gray-500 font-bold">Replies</h3>
          </div>
          <div className="rounded-lg bg-white text-center py-5 px-9 text-gray-900">
            <div className="mb-5 flex justify-center">
              <img
                src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-5.png"
                alt="funfact"
              />
            </div>
            <div className="mb-2 text-4xl fun-fact5-counter font-medium">364</div>
            <h3 className="text-base text-gray-500 font-bold">Tags</h3>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CompleteWork
