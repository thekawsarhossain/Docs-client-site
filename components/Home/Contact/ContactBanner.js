/* eslint-disable @next/next/no-img-element */
import { Box, Container } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';

const ContactBanner = () => {
  return (
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
       
      <div className='text-center pb-24 text-white relative'>
      <h1 className='font-bold '>Contact</h1>
      <p className='mt-4'>
        <Link href='/'>
        <a>Home</a>
        </Link> 
       <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/> Contact</p>
      </div>
        </div>
  );
}

export default ContactBanner;