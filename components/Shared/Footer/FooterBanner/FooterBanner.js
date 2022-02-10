import { Search } from '@mui/icons-material'
import Image from 'next/image'

const FooterBanner = () => {
  return (
    <div className="container mx-auto">
      <div className="relative mx-auto mb-8 rounded-xl bg-lightBlue shadow shadow-blue-700">
        {/* shape image  */}
        <img
          src="https://i.ibb.co/W5yb4Q4/subscribe-shap-1.png"
          alt="shape-1"
          className='className="absolute block" top-0 left-0'
        />
        {/* content here  */}
        <section class="py-12 text-gray-600">
          <div class="container mx-auto flex flex-wrap px-5 py-5">
            <h2 class="title-font mb-2 text-2xl font-bold text-white sm:text-4xl md:w-2/5">
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
        {/* shape image  */}
        <img
          src="https://i.ibb.co/X48H8hb/subscribe-shap-two-1.png"
          alt="shape-2"
          className="absolute bottom-0 right-0 block"
        />
      </div>
    </div>
  )
}

export default FooterBanner
