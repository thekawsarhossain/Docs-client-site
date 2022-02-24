/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';

import Example from '../Home/HeroSection/test'
const DocsBanner = () => {
  return (  
    <div>
  <Navbar/>
  <div
          style={{
            background: 'linearGradient( 60deg , #10b3d6 0%, #1d2746 100%)',
            padding: '190px 0 95px',
            position: 'relative',
          }}
          className="breadcrumb_area overflow-hidden"
        >
          <img
            className="absolute"
            style={{
              width: '150px',
              height: '145px',
              bottom: '-7px',
              left: '20px',
              zIndex: '1',
            }}
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/v.svg"
            alt=""
          />
          <img
            style={{
              width: '135px',
              height: '110px',
              right: '30px',
              bottom: '-7px',
              zIndex: '1',
            }}
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/b_leaf.svg"
            alt=""
          />
          <img
            style={{
              top: '0',
              width: '100%',
              left: '0',
              zIndex: '0',
              right: '0',
              height: 'auto',
            }}
            className="star absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/banner_bg.png"
            alt=""
          />
          <img
            style={{ bottom: '0', zIndex: '0' }}
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-classic/shap_01.png"
            alt=""
          />
          <img
            style={{ bottom: '0', zIndex: '0' }}
            className="absolute"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-classic/shap_02.png"
            alt=""
          />
          <img
            className="absolute"
            style={{
              right: '20%',
              bottom: '25px',
              visibility: 'visible',
              animationName: 'fadeInRight',
            }}
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/b_man_two.png"
            alt=""
          />
          <img
            className="absolute"
            data-wow-delay="0.2s"
            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_one/flower.png"
            alt=""
            style={{
              left: '20%',
              bottom: '0',
              visibility: 'visible',
              animationDelay: '0.2s',
              animationName: 'fadeInUp',
            }}
          />
          <div
            className="custom_container container"
            style={{
              width: '100%',
              paddingRight: '15px',
              paddingLeft: '15px',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
          <form action="#" className=" pb-7">
              <div  className="relative flex justify-center">
                <div className=" py-10 px-2">
                  <div>
                    <div className="md:flex">
                      <div className=" p-3">
                        <div className="relative flex">
                          <div>
                            <i className="fa fa-search absolute top-5 left-5 text-gray-400"></i>
                            <input
                              type="search"
                              name=""
                              id="search"
                              className="w-72 md:w-96"
                            />
                          </div>
                          <div>
                            <Example />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </form>
          </div>
        </div>
 
    </div>
  );
}

export default DocsBanner;