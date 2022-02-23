import { Container, Grid } from '@mui/material'
import ProfileAbout from './ProfileAbout'
// import ProfileBlogs from './ProfileBlogs'
import PersonIcon from '@mui/icons-material/Person'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import ProfileFllowers from './ProfileFllowers'
import ProfileFllowing from './ProfileFllowing'

const ProfileBody = () => {
  return (
    <div>
      <main
        style={{
          padding: '5rem 0',
          overflow: 'hidden',
          background: '#131417',
        }}
        id="scisco-main-wrapper"
      >
        <Container>
          <div id="anspress" className="anspress">
            <div id="ap-user" className="ap-row m-0 p-0">
              <div className="grid grid-cols-12">
                <div id="ap-user-nav" className="col-span-12 lg:col-span-3">
                  <div className="mb-8" id="scisco-user-menu-wrapper">
                    <div className="clearfix"></div>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: '0',
                        margin: '0',
                        background: '#2C303A',
                        border: '0',
                        borderRadius: '0.25rem',
                        boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
                        display: 'block',
                      }}
                      className="ap-tab-nav clearfix "
                    >
                      <li className="ap-menu-about active">
                        <a
                          style={{
                            background: 'none',
                            border: '0',
                            borderBottom: '1px solid rgba(0,0,0,.1)',
                            borderRadius: '0',
                            display: 'block',
                            marginBottom: '0',
                            padding: '0.75rem 1rem',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: '#FFF',
                          }}
                          className="profile-btn"
                        >
                          <PersonIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#FFF',
                            }}
                          />
                          About
                        </a>
                      </li>
                      <li className="ap-menu-reputations">
                        <a
                          style={{
                            background: 'none',
                            border: '0',
                            borderBottom: '1px solid rgba(0,0,0,.1)',
                            borderRadius: '0',
                            display: 'block',
                            marginBottom: '0',
                            padding: '0.75rem 1rem',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: '#101e36',
                          }}
                          className="profile-btn"
                        >
                          <EmojiEventsIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />
                          Reputations
                        </a>
                      </li>
                      <li className="ap-menu-blog">
                        <a
                          style={{
                            background: 'none',
                            border: '0',
                            borderBottom: '1px solid rgba(0,0,0,.1)',
                            borderRadius: '0',
                            display: 'block',
                            marginBottom: '0',
                            padding: '0.75rem 1rem',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: '#101e36',
                          }}
                          className="profile-btn"
                        >
                          <FacebookRoundedIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />
                          Blog
                          <span
                            style={{
                              fontSize: '70%',
                              padding: '4px 8px',
                              background: '#2dce89',
                              lineHeight: '1.2',
                              margin: '0 0 0 auto',
                              borderRadius: '0.25rem',
                              color: '#fff',
                            }}
                          >
                            4
                          </span>
                        </a>
                      </li>
                      <li className="ap-menu-followers">
                        <a
                          style={{
                            background: 'none',
                            border: '0',
                            borderBottom: '1px solid rgba(0,0,0,.1)',
                            borderRadius: '0',
                            display: 'block',
                            marginBottom: '0',
                            padding: '0.75rem 1rem',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: '#101e36',
                          }}
                          className="profile-btn"
                        >
                          <PeopleAltRoundedIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />
                          Followers
                          <span
                            style={{
                              fontSize: '70%',
                              padding: '4px 8px',
                              background: '#2dce89',
                              lineHeight: '1.2',
                              margin: '0 0 0 auto',
                              borderRadius: '0.25rem',
                              color: '#fff',
                            }}
                          >
                            4
                          </span>
                        </a>
                      </li>
                      <li className="ap-menu-following">
                        <a
                          style={{
                            background: 'none',
                            border: '0',
                            borderBottom: '1px solid rgba(0,0,0,.1)',
                            borderRadius: '0',
                            display: 'block',
                            marginBottom: '0',
                            padding: '0.75rem 1rem',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            color: '#101e36',
                          }}
                          className="profile-btn"
                        >
                          <RemoveRedEyeRoundedIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />{' '}
                          Following
                          <span
                            style={{
                              fontSize: '70%',
                              padding: '4px 8px',
                              background: '#2dce89',
                              lineHeight: '1.2',
                              margin: '0 0 0 auto',
                              borderRadius: '0.25rem',
                              color: '#fff',
                            }}
                          >
                            4
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-12 pl-8 lg:col-span-9">
                  {/* <ProfileAbout /> */}
                  {/* <ProfileBlogs /> */}
                  {/* <ProfileFllowers /> */}
                  <ProfileFllowing />
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </Container>
      </main>
    </div>
  )
}

export default ProfileBody
