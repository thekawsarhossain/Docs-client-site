import { Search } from '@mui/icons-material'
import { Container } from '@mui/material'
import Image from 'next/image'

const FooterBanner = () => {
  return (
   <div className='bg-lightDark'>
      <Container>
      <div className="footerBannerParent">
        {/* shape image  */}
        <img
          src="https://i.ibb.co/W5yb4Q4/subscribe-shap-1.png"
          alt="shape-1"
          className="absolute top-0 left-0 block rounded-tl-2xl"
        />
        {/* content here  */}
        <section className="py-24 text-gray-600">
          <div className="footerBannerContent">
            <h2 className="lg:mb-2 mb-4  font-bold text-white">
              {' '}
              Great Customer
              <br />
              Relationships start here
            </h2>
            <div className="flex-none   md:flex items-center justify-start">
              <div className="mx-4 rounded-full bg-white px-4 ">
                <Search />
                <input
                  className=" rounded-full py-3   lg:p-3  lg:pr-20 focus:outline-none"
                  style={{ flex: '1', border: 'none' }}
                  type="text"
                  placeholder="Your Email"
                 
                />
              </div>
              <button className=" btn-1  m-4 ">Get Started</button>
            </div>
          </div>
        </section>
        {/* shape image  */}
        <img
          src="https://i.ibb.co/X48H8hb/subscribe-shap-two-1.png"
          alt="shape-2"
          className="absolute bottom-0 right-0 block rounded-br-2xl"
        />
      </div>
    </Container>
   </div>
  )
}

export default FooterBanner
