import { Search } from '@mui/icons-material'
import Image from 'next/image'

/* 

.email-section {
  width: 80%;
  margin: auto;
  background-color: #4c4cf1;
  margin-bottom: 70px;
  border-radius: 15px;
}


*/

const FooterBanner = () => {
  return (
    <div className="container mx-auto">
      <div className="relative mx-auto mb-8 rounded-xl bg-lightBlue shadow shadow-blue-700">
        <div className="overflow-hidden">
          <Image
            className="absolute top-0 left-0"
            src="/banner/shap-1.png"
            width="480px"
            height="135px"
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
                  <button className="mt-2 rounded-full bg-buttons px-5 py-2 font-semibold text-white hover:bg-white hover:text-buttons">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Image
          className="absolute bottom-0 right-0 block"
          src="/banner/shap-2.png"
          width="680px"
          height="95px"
        ></Image>
      </div>
    </div>
  )
}

export default FooterBanner
