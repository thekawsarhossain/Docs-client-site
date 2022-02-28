/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import santo from '../../Images/santo.jpg'
import fahad from '../../Images/fahad.jpg'
import shihab from '../../Images/shihab.jpg'
import kawser from '../../Images/kawsar.jpg'
import rashidul from '../../Images/rashidul.png'
import abuBakker from '../../Images/abu-bakker.jpg'

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
        <div className="grid grid-cols-12 justify-center gap-4">
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image
                width="300"
                height="300"
                src={santo}
                className="mb-4 object-cover"
                alt=""
              />
              <div className="member-info">
                <h5 className="member-name m-0 text-base">Rakibul Hasan</h5>
                <p className="text-sm text-gray-500">MERN-Stack Developer</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image
                width="300"
                height="300"
                src={fahad}
                className="mb-4 object-cover"
                alt=""
              />
              <div className="member-info">
                <h5 className="member-name m-0 text-base">Monirul Islam</h5>
                <p className="text-sm text-gray-500">MERN-Stack Developer</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image
                width="300"
                height="300"
                src={shihab}
                className="mb-4 object-cover"
                alt=""
              />
              <div className="member-info">
                <h5 className="member-name m-0 text-base">Shajibul Alam</h5>
                <p className="text-sm text-gray-500">MERN-Stack Developer</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image
                width="300"
                height="300"
                src={kawser}
                className="mb-4 object-cover"
                alt=""
              />
              <div className="member-info">
                <h5 className="member-name m-0 text-base">Kawsar Hossain</h5>
                <p className="text-sm text-gray-500">MERN-Stack Developer</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image
                width="300"
                height="300"
                src={rashidul}
                className="mb-4 object-cover"
                alt=""
              />
              <div className="member-info">
                <h5 className="member-name m-0 text-base">Rashedul Islam</h5>
                <p className="text-sm text-gray-500">MERN-Stack Developer</p>
              </div>
            </article>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <article className="mb-8">
              <Image
                width="300"
                height="300"
                src={abuBakker}
                className="mb-4 object-cover"
                alt=""
              />
              <div className="member-info">
                <h5 className="member-name m-0 text-base">Abu Bakker</h5>
                <p className="text-sm text-gray-500">MERN-Stack Developer</p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TeamContent
