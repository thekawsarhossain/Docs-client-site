import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const ForumSubBanner = () => {
  return (
    <div>
      <section
        style={{
          background: '#f0f5f7',
          padding: '16px 0',
          position: 'relative',
          zIndex: '1',
        }}
        className="page_breadcrumb"
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
                    <a style={{ color: '#878EA6' }} href="/">
                      Home
                    </a>
                  </li>
                  <ArrowForwardIosIcon
                    sx={{ color: ' #878EA6', fontSize: '14px' }}
                  />
                  <li
                    style={{
                      color: ' #878EA6',
                      fontSize: ' 14px',
                      lineHeight: '21px',
                    }}
                    className="breadcrumb-item"
                  >
                    <a style={{ color: '#878EA6' }} href="/">
                      Blog
                    </a>
                  </li>
                  <ArrowForwardIosIcon
                    sx={{ color: ' #878EA6', fontSize: '14px' }}
                  />
                  <li
                    style={{
                      color: ' #1d2746',
                      fontSize: ' 14px',
                      lineHeight: '21px',
                    }}
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    Blog with sidebar
                  </li>
                </ol>
              </nav>
            </div>
            <div
              style={{ flex: '0 0 41.666667%', maxWidth: ' 41.666667%' }}
              className="col-sm-5"
            >
              <a
                style={{
                  color: '#878EA6',
                  float: 'right',
                  fontSize: '14px',
                  paddingRight: '10px',
                }}
                href="/"
                className="date"
              >
                {/* <FontAwesomeIcon icon="fa-regular fa-timer" /> */}
                {/* <i
                  style={{ paddingRight: '10px' }}
                  class="fa-regular fa-timer"
                ></i> */}
                <AccessTimeIcon />
                Updated on March 03, 2020
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForumSubBanner
