import { Container } from '@mui/material'

const ForumFooterBanner = () => {
  return (
    <div>
      <div
        style={{
          padding: '55px 0',
          background: '#1d2746',
          position: 'relative',
        }}
        className="call-to-action"
      >
        <div className="overlay-bg"></div>
        <Container>
          <div className="container relative">
            <div
              style={{
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              className="action-content-wrapper"
            >
              <div className="action-title-wrap title-img flex items-center">
                <img
                  style={{ paddingRight: '45px' }}
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/chat-smile.png"
                  alt=""
                />
                <h2
                  style={{
                    color: '#fff',
                    fontSize: '44px',
                    lineHeight: '1.2',
                    fontWeight: '500',
                  }}
                  className="action-title"
                >
                  New to Communities?
                </h2>
              </div>
              <a href="/" className="action_btn">
                Join the community <i class="fa-regular fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ForumFooterBanner
