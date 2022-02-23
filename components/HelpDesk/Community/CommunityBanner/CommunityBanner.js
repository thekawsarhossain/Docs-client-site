/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const CommunityBanner = () => {
  return (
    <div className="hd-banner-support">
      <div className="text-center banner-content">
        <div className="banner-content-wrapper">
          <h1
            className="banner-title wow fadeInUp"
          >
            Docy Support Communities
          </h1>
          <p
            className="banner-description wow fadeInUp"
          >
            Find answers, ask questions, and connect with our community.
          </p>
          <div
            className="banner-search-form-wrapper wow fadeInUp"
             >
            <form action="" className="banner-search-form">
              <input className="focus:outline-none w-full bg-transparent border-0 py-4 px-8 h-14" type="text" placeholder="Search or ask a question.." />
              <button className="bg-transparent border-0 pr-5 text-blue-600 text-lg" type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ul
        className="people-image wow fadeIn"
      >
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn1.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn3.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn4.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn5.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn6.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn7.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn8.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn9.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn10.jpg"
            alt="people"
          />
        </li>
        <li>
          <img
            className="wow zoomIn"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn1.jpg"
            alt="people"
          />
        </li>
      </ul>
      <ul
        className="partical-animation"
      >
        <li className="partical">
          <img
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bnp1.png"
            alt="partical"
          />
        </li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical"></li>
        <li className="partical">
          <img
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bnp2.png"
            alt="partical"
          />
        </li>
      </ul>

    </div>
  )
}

export default CommunityBanner
