import { Container } from '@mui/material'

const ASKBanner = () => {
  return (
    <div>
      <div
        style={{
          background: '#2c303a',
          padding: '170px 0 70px',
          position: 'relative',
          zIndex: '1',
        }}
        className="breadcrumb_area_three"
      >
        <img
          src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/leaf_left.png"
          className="one absolute"
          alt="leaf left"
          style={{ top: '0', left: '35px' }}
        />
        <img
          src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/leaf_right.png"
          className="four absolute"
          alt="leaf right"
          style={{ right: '0', bottom: '0' }}
        />
        <div>
          <Container>
            <div
              style={{ maxWidth: '100%', width: '100%' }}
              className="breadcrumb_text m-auto text-center"
            >
              <h1
                style={{
                  color: '#fff',
                  fontSize: '50px',
                  lineHeight: '66px',
                  marginBottom: '15px',
                  fontWeight: '700',
                }}
                className="text-center"
              >
                Ask Question
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ASKBanner
