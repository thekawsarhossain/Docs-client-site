/* eslint-disable @next/next/no-img-element */
import { Container } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
// import Image from 'next/image'

const ProfileBanner = () => {
  return (
    <div>
      <div
        style={{ background: '#2c303a', padding: '80px 0 80px 80px' }}
        className="relative "
      >
     
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
                <CheckIcon
                  sx={{
                    fontSize: '16px',
                    width: ' 26px',
                    height: '26px',
                    lineHeight: '26px',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    color: '#fff',
                    background: '#2dce89',
                    borderRadius: '100%',
                    fontSize: '10px',
                    width: '16px',
                    height: '16px',
                    lineHeight: '16px',
                    textAlign: 'center',
                    zIndex: '2',
                  }}
                />
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
                    height: '105',
                  }}
                  className="avatar"
                  src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar-200x200.jpg"
                  alt="avatar"
                  layout="fill"
                />
              </div>
            </div>
            <div className="scisco-profile-info">
              <h1 className="scisco-ap-title text-white">
                John Doe
                <span className="scisco-title-count scisco-title-rep text-white">
                  64
                </span>
              </h1>
              <div className="scisco-description text-white">
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
