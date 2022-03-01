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
import { useState } from 'react'
import ProfileBlogs from './ProfileBlogs'

const ProfileBody = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div>
      <main
        style={{
          padding: '5rem 0',
        }}
        id="scisco-main-wrapper"
        className="overflow-hidden bg-Docy-AlmostBlack dark:bg-Docy-White"
      >
        <Container>
          <div id="anspress" className="anspress">
            <div id="ap-user" className="ap-row m-0 p-0">
              <div className="grid grid-cols-12">
                <div id="ap-user-nav" className="col-span-12 lg:col-span-3">
                  <div className="my-5 rounded-md bg-slate-700 md:w-64 lg:w-64">
                    <div className="flex flex-col">
                      <button
                        className={
                          toggleState === 1
                            ? 'mb-1 rounded-t-md bg-blue-700 py-3 text-white'
                            : 'text-whitebg-blue-700 mb-1 rounded-t-md bg-gray-800 py-3'
                        }
                        onClick={() => toggleTab(1)}
                      >
                        <span className="float-left pl-3">
                          <PersonIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#FFF',
                            }}
                          />
                          About
                        </span>
                        {/* <span className="float-right pr-3">{'>'}</span> */}
                      </button>
                      <button
                        className={
                          toggleState === 2
                            ? 'mb-1 bg-blue-700 py-3 text-white'
                            : 'mb-1 bg-gray-800 py-3 text-white'
                        }
                        onClick={() => toggleTab(2)}
                      >
                        <span className="float-left pl-3">
                          <EmojiEventsIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />
                          Reputations
                        </span>
                        {/* <span className="float-right pr-3">{'>'}</span> */}
                      </button>
                      <button
                        className={
                          toggleState === 3
                            ? 'mb-1 bg-blue-700 py-3 text-white'
                            : 'mb-1 bg-gray-800 py-3 text-white'
                        }
                        onClick={() => toggleTab(3)}
                      >
                        <span className="float-left pl-3">
                          <FacebookRoundedIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />
                          Blog
                        </span>
                        <span className="float-right mr-4 rounded-md bg-green-500 px-2 text-center text-white">
                          4
                        </span>
                      </button>
                      <button
                        className={
                          toggleState === 4
                            ? 'mb-1 bg-blue-700 py-3 text-white'
                            : 'mb-1 bg-gray-800 py-3 text-white'
                        }
                        onClick={() => toggleTab(4)}
                      >
                        <span className="float-left pl-3">
                          <PeopleAltRoundedIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />
                          Followers
                        </span>
                        <span className="float-right mr-4 rounded-md bg-green-500 px-2 text-center text-white">
                          4
                        </span>
                      </button>
                      <button
                        className={
                          toggleState === 5
                            ? 'rounded-t-md bg-blue-700 py-3 text-white'
                            : 'rounded-b-md bg-gray-800 py-3 text-white'
                        }
                        onClick={() => toggleTab(5)}
                      >
                        <span className="float-left pl-3">
                          <RemoveRedEyeRoundedIcon
                            sx={{
                              margin: '0',
                              minWidth: '1.75rem',
                              color: '#0a48b3',
                            }}
                          />{' '}
                          Following
                        </span>
                        <span className="float-right mr-4 rounded-md bg-green-500 px-2 text-center text-white">
                          4
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 pl-8 lg:col-span-9">
                  {/* <ProfileFllowing /> */}
                  <div
                    className={
                      toggleState === 1 ? 'content  active-content' : 'content'
                    }
                  >
                    <ProfileAbout></ProfileAbout>
                  </div>
                  {/* <div
                    className={
                      toggleState === 2 ? 'content  active-content' : 'content'
                    }
                  >
                    <ProfileAbout></ProfileAbout>
                  </div> */}
                  {/* <div
                    className={
                      toggleState === 3 ? 'content  active-content' : 'content'
                    }
                  >
                    <ProfileBlogs></ProfileBlogs>
                  </div> */}
                  <div
                    className={
                      toggleState === 4 ? 'content  active-content' : 'content'
                    }
                  >
                    <ProfileFllowers></ProfileFllowers>
                  </div>
                  <div
                    className={
                      toggleState === 5 ? 'content  active-content' : 'content'
                    }
                  >
                    <ProfileFllowing></ProfileFllowing>
                  </div>
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
