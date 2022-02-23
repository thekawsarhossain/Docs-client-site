import { Avatar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'

const BlogList = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 text-white drop-shadow-[0_35px_35px_rgba(25,35,43,1)] ">
        <div className="rounded-lg " style={{ backgroundColor: '#2c303a' }}>
          <Link href="/">
            <a>
              <img
                className="rounded-t-lg"
                src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/9-1024x683.jpg"
                alt="How Can My Business Win Awards?"
              />
            </a>
          </Link>
          <div className="p-3">
            <h3 className="">
              <Link href="/">
                <a className="font-semibold">How Can My Business Win Awards?</a>
              </Link>
            </h3>
            <p className="py-3">
              Qui ex graviterque si et velit quamquam erudit. Amet quamquam eu
              consequat. Quo cupidatat volupta, appellat anim ab litteris
              domestic…
            </p>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between p-3">
            <div className="flex">
              <div className="self-center">
                {' '}
                <a href="https://wordpress-288344-1596643.cloudwaysapps.com/author/egemenerd/">
                  <div className="scisco-verified">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                      sx={{ width: 40, height: 40 }}
                    />
                  </div>
                </a>
              </div>
              <div className="self-center pl-2">
                <p>
                  <small className="text-sm">John Doe</small>
                </p>
                <p>
                  <small className="text-sm">March 12, 2019</small>
                </p>
              </div>
            </div>
            <div className="float-right self-center">
              <ForumOutlinedIcon sx={{ width: 18, height: 18 }} /> 3
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 text-white drop-shadow-[0_35px_35px_rgba(25,35,43,1)] ">
        <div className="rounded-lg " style={{ backgroundColor: '#2c303a' }}>
          <Link href="/">
            <a>
              <img
                className="rounded-t-lg"
                src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/9-1024x683.jpg"
                alt="How Can My Business Win Awards?"
              />
            </a>
          </Link>
          <div className="p-3">
            <h3 className="">
              <Link href="/">
                <a className="font-semibold">How Can My Business Win Awards?</a>
              </Link>
            </h3>
            <p className="py-3">
              Qui ex graviterque si et velit quamquam erudit. Amet quamquam eu
              consequat. Quo cupidatat volupta, appellat anim ab litteris
              domestic…
            </p>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between p-3">
            <div className="flex">
              <div className="self-center">
                {' '}
                <a href="https://wordpress-288344-1596643.cloudwaysapps.com/author/egemenerd/">
                  <div className="scisco-verified">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                      sx={{ width: 40, height: 40 }}
                    />
                  </div>
                </a>
              </div>
              <div className="self-center pl-2">
                <p>
                  <small className="text-sm">John Doe</small>
                </p>
                <p>
                  <small className="text-sm">March 12, 2019</small>
                </p>
              </div>
            </div>
            <div className="float-right self-center">
              <ForumOutlinedIcon sx={{ width: 18, height: 18 }} /> 3
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 text-white drop-shadow-[0_35px_35px_rgba(25,35,43,1)] ">
        <div className="rounded-lg " style={{ backgroundColor: '#2c303a' }}>
          <Link href="/">
            <a>
              <img
                className="rounded-t-lg"
                src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/9-1024x683.jpg"
                alt="How Can My Business Win Awards?"
              />
            </a>
          </Link>
          <div className="p-3">
            <h3 className="">
              <Link href="/">
                <a className="font-semibold">How Can My Business Win Awards?</a>
              </Link>
            </h3>
            <p className="py-3">
              Qui ex graviterque si et velit quamquam erudit. Amet quamquam eu
              consequat. Quo cupidatat volupta, appellat anim ab litteris
              domestic…
            </p>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between p-3">
            <div className="flex">
              <div className="self-center">
                {' '}
                <a href="https://wordpress-288344-1596643.cloudwaysapps.com/author/egemenerd/">
                  <div className="scisco-verified">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                      sx={{ width: 40, height: 40 }}
                    />
                  </div>
                </a>
              </div>
              <div className="self-center pl-2">
                <p>
                  <small className="text-sm">John Doe</small>
                </p>
                <p>
                  <small className="text-sm">March 12, 2019</small>
                </p>
              </div>
            </div>
            <div className="float-right self-center">
              <ForumOutlinedIcon sx={{ width: 18, height: 18 }} /> 3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList
