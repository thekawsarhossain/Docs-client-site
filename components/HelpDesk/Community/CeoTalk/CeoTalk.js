/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container } from '@mui/material'

const CeoTalk = () => {
  return (
    <section className="about-journalism">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <div className="journalism-content-wrapper">
              <div className="quote wow fadeIn">
                <img
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/quote-top.png"
                  alt="quote"
                />
              </div>
              <h2 className="journalism-title wow fadeInUp">
                KbDoc cares deeply
                <br />
                about journalism.
              </h2>

              <p className="description wow fadeInUp">
                Cheeky why my good sir nancy boy off his nut at public school
                excuse my French well bog bugger porkies, eaton he legged it owt
                to do with me gutted.!
              </p>

              <div className="journalism-info wow fadeInUp">
                <h3 className="name">Chaplain Mondover</h3>
                <span className="designation">CEO, KbDoc</span>
              </div>

              <div className="quote dmt-4 wow fadeIn">
                <img
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/quote-bottom.png"
                  alt="quote"
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center justify-between journalism-feature-image">
              <img
                src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/journalism.png"
                alt="journalism"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="light-header">
        <h2 className="title-light ">OUR COMMITMENT</h2>
      </div>
    </section>
  )
}

export default CeoTalk
