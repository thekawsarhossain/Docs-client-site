import { Box } from '@mui/material'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import WatchLaterIcon from '@mui/icons-material/WatchLater'

const ProfileSubbanner = () => {
  return (
    <div>
      <section
        style={{
          zIndex: '1',
        }}
        className="relative bg-Docy-PaleGrey py-4 px-0 dark:bg-Docy-DarkM"
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
          className="container"
        >
          <div className="row flex items-center">
            <div
              style={{ flex: '0 0 58.333333%', maxWidth: '58.333333%' }}
              className="col-sm-7"
            >
              <nav aria-label="breadcrumb">
                <ol
                  style={{
                    marginBottom: '0',
                    background: 'transparent',
                    borderRadius: '0',
                    padding: '0',
                  }}
                  className="breadcrumb flex items-center"
                >
                  <li
                    style={{
                      color: ' #878EA6',
                      fontSize: ' 14px',
                      lineHeight: '21px',
                    }}
                    className="breadcrumb-item"
                  >
                    <Link style={{ color: '#878EA6' }} href="/">
                      Home
                    </Link>
                  </li>
                  <ChevronRightIcon
                    sx={{ color: ' #878EA6', fontSize: '14px' }}
                  />
                  <li
                    style={{
                      fontSize: ' 14px',
                      lineHeight: '21px',
                    }}
                    className="breadcrumb-item active dark:text-white"
                    aria-current="page"
                  >
                    Profile
                  </li>
                </ol>
              </nav>
            </div>
            <div
              style={{ flex: '0 0 41.666667%', maxWidth: ' 41.666667%' }}
              className="col-sm-5"
            >
              <Box
                style={{
                  color: '#878EA6',
                  float: 'right',
                  fontSize: '14px',
                  paddingRight: '10px',
                }}
              >
                <WatchLaterIcon />
                <Link href="/" className="date">
                  <a>
                    <i
                      style={{ paddingRight: '10px' }}
                      className="fa-regular fa-timer"
                    ></i>
                    Updated on March 03, 2020
                  </a>
                </Link>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfileSubbanner
