import { Container } from '@mui/material'
import Navbar from '../components/Shared/Navbar/Navbar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'

const Error = () => {
  return (
    <div>
      <Navbar />
      <section style={{ background: '#2c303a' }}>
        <div
          style={{
            width: '8px',
            height: '8px',
            background: '#4c4cf1',
            left: '325px',
            top: '120px',
            animation: 'spin2 2s infinite alternate',
            borderRadius: '50%',
          }}
          className="error_dot one absolute"
        ></div>
        <div
          style={{
            width: '16px',
            height: '16px',
            background: '#f99e43',
            left: '170px',
            bottom: '260px',
            animation: 'spin1 1s infinite alternate',
            position: 'absolute',
            borderRadius: '50%',
          }}
          className="error_dot two"
        ></div>
        <div
          style={{
            width: '30px',
            height: '30px',
            background: '#beebf5',
            animation: 'spin1 2s infinite alternate',
            right: '225px',
            top: '370px',
            borderRadius: '50%',
          }}
          className="error_dot three absolute"
        ></div>
        <div
          style={{
            width: '6px',
            height: '6px',
            background: '#ffa3be',
            bottom: '148px',
            right: '185px',
            animation: 'spin2 2s infinite alternate',
            borderRadius: '50%',
          }}
          className="error_dot four absolute"
        ></div>
        <Container>
          <div className="container">
            <div
              style={{ maxWidth: '970px', margin: '0 auto' }}
              className="error_content_two text-center"
            >
              <div
                style={{
                  paddingBottom: '55px',
                  position: 'relative',
                  zIndex: '1',
                }}
                className="error_img"
              >
                <img
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: '-1',
                  }}
                  className="absolute"
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/404_bg.png"
                  alt="404 page background shape."
                />
                <div
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                    top: '-50px',
                    animationName: 'clipInDown',
                  }}
                  className="one wow clipInDown"
                  data-wow-delay="1s"
                >
                  <img
                    style={{ animation: 'customUp 1.5s infinite alternate' }}
                    className="img_one"
                    src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/404_two.png"
                    alt="4 illustration"
                  />
                </div>
                <div
                  style={{
                    margin: '0 12px',
                    top: '-12px',
                    display: 'inline-block',
                    position: 'relative',
                    animationName: 'clipInDown',
                  }}
                  className="two wow clipInDown"
                  data-wow-delay="1.5s"
                >
                  <img
                    style={{ animation: 'customUp 1.8s infinite alternate' }}
                    className="img_two"
                    src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/404_three.png"
                    alt="0 illustration"
                  />
                </div>
                <div
                  style={{
                    top: '-58px',
                    display: 'inline-block',
                    position: 'relative',
                    animationName: 'clipInDown',
                  }}
                  className="three wow clipInDown"
                  data-wow-delay="1.8s"
                >
                  <img
                    style={{ animation: 'customUp 2s infinite alternate' }}
                    className="img_three"
                    src="https://wordpress-theme.spider-themes.net/docy/wp-content/themes/docy/assets/img/404_one.png"
                    alt="4 illustration"
                  />
                </div>
              </div>
              <h2
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#FFF',
                }}
              >
                Error. We can’t find the page you’re looking for.
              </h2>
              <p
                style={{
                  marginBottom: '1.3rem',
                  fontSize: '18px',
                  color: '#82879c',
                }}
              >
                Sorry for the inconvenience. Go to our homepage or check out our
                latest collections for Fashion, Chair, Decoration...
              </p>
              <form
                style={{ marginBottom: '40px', paddingTop: '25px' }}
                action="https://wordpress-theme.spider-themes.net/docy/"
                className="error_search"
              >
                <input
                  style={{
                    height: '60px',
                    borderRadius: '4px',
                    background: '#fff',
                    boxShadow: '0 16px 50px 0 rgb(3 62 75 / 10%)',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#1d2746',
                    border: '0',
                    paddingLeft: '30px',
                    display: 'block',
                    width: '100%',
                    padding: '0.375rem 0.75rem',
                    lineHeight: '1.5',
                    backgroundColor: '#fff',
                    appearance: 'none',
                    transition:
                      'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
                  }}
                  type="text"
                  name="s"
                  className="form-control"
                  placeholder="Search"
                />
              </form>
             <Link href='/'>
             <a
                style={{ background: '#4c4cf1' }}
                className="action_btn box_shadow_none mb-10"
              >
                Back to Home Page <ArrowForwardIcon />
              </a>
             </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Error
