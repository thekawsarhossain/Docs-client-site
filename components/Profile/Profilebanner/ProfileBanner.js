/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
// import Image from 'next/image'

const ProfileBanner = () => {
  return (
    <div>
      <div
        style={{ padding: '80px 0 80px 80px' }}
        className="relative bg-Docy-paleGeen dark:bg-Docy-Dark"
      >
        <img
          src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/leaf_left.png"
          className="one absolute"
          alt="leaf left"
          style={{ top: '0', left: '35px' }}
        />
        <img
          className="absolute top-40 left-24 hidden md:block"
          src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/man_01.png"
          alt=""
        />
        <img
          className="absolute right-40 top-32 hidden md:block"
          src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/typography/man_02.png"
          alt=""
        />
        <img
          src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/leaf_right.png"
          className="four absolute"
          alt="leaf right"
          style={{ right: '0', bottom: '0' }}
        />
        <Container>
          <div
            id="scisco-page-title"
            className="scisco-profile-header relative z-10 flex flex-nowrap items-center py-16"
          >
            <div
              style={{ minWidth: '125px' }}
              className="scisco-profile-thumbnail"
            >
              <div className="scisco-verified relative">
                <img
                  style={{
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    borderRadius: '100%',
                    border: '5px solid rgba(255,255,255,.1)',
                    background: 'none',
                    width: 'auto',
                    height: '105px',
                  }}
                  className="avatar"
                  src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar-200x200.jpg"
                  alt="avatar"
                  layout="fill"
                />
              </div>
            </div>
            <div className="scisco-profile-info">
              <h1 className="scisco-ap-title text-Docy-Dark dark:text-white">
                John Doe
                <span className="scisco-title-count scisco-title-rep dark:text-whitetext-Docy-Dark">
                  64
                </span>
              </h1>
              <div className="scisco-description text-Docy-Dark dark:text-white">
                Im a Web Developer and Designer
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProfileBanner
