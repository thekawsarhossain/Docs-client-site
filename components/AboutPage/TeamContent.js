/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import avatar5 from '../../Images/avatar-5.png'
import avatar6 from '../../Images/avatar-6.png'
import avatar7 from '../../Images/avatar-7.png'
import avatar8 from '../../Images/avatar-8.png'
import avatar9 from '../../Images/avatar-9.png'
import avatar10 from '../../Images/avatar-10.png'

const TeamContent = () => {
  return (
    <div className="team-content">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-1 lg:col-span-3"></div>
          <div className="col-span-12 md:col-span-10 lg:col-span-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-medium">Meet our (awesome) team</h2>
              <p className="text-base">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-3"></div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="o-separator">
              <hr />
              <p className="o-separator-text">Team Member</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="grid justify-center grid-cols-12 gap-4">
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image width="" height="" src={avatar5} className="mb-4" alt="" />
              <div className="member-info">
                <h5 className="m-0 text-base member-name">Tanjil Ahmed</h5>
                <p className="text-sm text-gray-500">Software Engineering</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image width="" height=""
                src={avatar6}
                className="mb-4"
                alt=""
              />
              <div className="member-info">
                <h5 className="m-0 text-base member-name">Mubin Vai</h5>
                <p className="text-sm text-gray-500">Software Engineering</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image width="" height=""
                src={avatar7}
                className="mb-4"
                alt=""
              />
              <div className="member-info">
                <h5 className="m-0 text-base member-name">Tuhin Sorker</h5>
                <p className="text-sm text-gray-500">People Operations</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image width="" height=""
                src={avatar8}
                className="mb-4"
                alt=""
              />
              <div className="member-info">
                <h5 className="m-0 text-base member-name">Alamin Vai</h5>
                <p className="text-sm text-gray-500">Design</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image width="" height=""
                src={avatar9}
                className="mb-4"
                alt=""
              />
              <div className="member-info">
                <h5 className="m-0 text-base member-name">Tuhin Sorker</h5>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image width="" height=""
                src={avatar10}
                className="mb-4"
                alt=""
              />
              <div className="member-info">
                <h5 className="m-0 text-base member-name">Alamin Vai</h5>
                <p className="text-sm text-gray-500">Dog Squad Leader</p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TeamContent
