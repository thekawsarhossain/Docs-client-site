import { Search } from '@mui/icons-material'
// import { Box, Grid, Typography } from "@mui/material";
import Image from 'next/image'

const FooterBanner = () => {
  return (
    <div>
      <div className="email-section">
        <div className="overflow-hidden">
          <Image
            className="rounded"
            src="/banner/shap-1.png"
            width="500px"
            height="100%"
          ></Image>
        </div>
        <section class="body-font text-gray-600">
          <div class="container mx-auto flex flex-wrap px-5 py-5">
            <h2 class="title-font mb-2 text-2xl font-bold font-medium text-white sm:text-4xl md:w-2/5">
              {' '}
              Great Customer
              <br />
              Relationships start here
            </h2>
            <div class=" md:pl-6">
              <div className="flex flex-wrap">
                <div className="search-container bg-white md:ml-8 md:w-80">
                  <button className="text-black">
                    <Search />
                  </button>
                  <input
                    className="m-2 p-0.5"
                    style={{ flex: '1', border: 'none' }}
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="ml-5 mt-4 md:mt-0">
                  <button className="bg-buttons hover:text-buttons mt-2 rounded-full px-5 py-2 font-semibold text-white hover:bg-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Image src="/banner/shap-2.png" width="1200px" height="100%"></Image>
      </div>
    </div>
  )
}

export default FooterBanner
