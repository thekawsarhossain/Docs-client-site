import { Container, Grid } from '@mui/material'
import ProfileAbout from './ProfileAbout'
import PersonIcon from '@mui/icons-material/Person'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import ProfileFllowers from './ProfileFllowers'
import ProfileFllowing from './ProfileFllowing'
import { useState } from 'react'
import ProfileBlogs from './ProfileBlogs'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import ArticleIcon from '@mui/icons-material/Article'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSelector } from 'react-redux'
import ProfileEdit from './ProfileEdit'

const ProfileBody = (props) => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setFilter(event.target.value)
  }
  const otherPosts = blogs?.filter(
    (td) => td?.blogger?._id === props?.userInfoFromDB?._id
  )
  let dataSearch = otherPosts?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  // dataSearch?.sort(
  //   (firstItem, secondItem) =>
  //     firstItem?.comment?.length - secondItem?.comment?.length
  // )
  dataSearch?.reverse()
  return (
    <div>
      <main className="overflow-hidden  dark:bg-Docy-AlmostBlack">
        <Container>
          <div className="grid grid-cols-12">
            {/* SidBar list  */}
            <div className="col-span-12 lg:col-span-3">
              <div className="my-5 rounded-md bg-slate-700">
                <div className="flex flex-col">
                  <button
                    className={
                      toggleState === 1
                        ? 'mb-1 rounded-t-md bg-blue-700 py-3 text-white'
                        : 'mb-1 rounded-t-md bg-gray-800 py-3 text-white'
                    }
                    onClick={() => toggleTab(1)}
                  >
                    <span className="float-left pl-3">
                      <PersonIcon
                        sx={{
                          margin: '0',
                          minWidth: '1.75rem',
                          color: '#fff',
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
                      <ManageAccountsIcon
                        sx={{
                          margin: '0',
                          minWidth: '1.75rem',
                          color: '#fff',
                        }}
                      />
                      Edit Profile
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
                      <ArticleIcon
                        sx={{
                          margin: '0',
                          minWidth: '1.75rem',
                          color: '#fff',
                        }}
                      />
                      Blogs
                    </span>
                    <span className="float-right mr-4 rounded-md bg-green-500 px-2 text-center text-white">
                      {dataSearch.length}
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
                          color: '#fff',
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
                      <FavoriteIcon
                        sx={{
                          margin: '0',
                          minWidth: '1.75rem',
                          color: '#fff',
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
            {/* Details Section  */}
            <div className="col-span-12 lg:col-span-9 lg:pl-8">
              <div
                className={
                  toggleState === 1 ? 'content  active-content' : 'content'
                }
              >
                <ProfileAbout
                  userInfoFromDB={props?.userInfoFromDB}
                ></ProfileAbout>
              </div>
              <div
                className={
                  toggleState === 2 ? 'content  active-content' : 'content'
                }
              >
                <ProfileEdit userInfoFromDB={props?.userInfoFromDB} />
              </div>
              <div
                className={
                  toggleState === 3 ? 'content  active-content' : 'content'
                }
              >
                <ProfileBlogs searchText={searchText} dataSearch={dataSearch} />
              </div>
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
        </Container>
      </main>
    </div>
  )
}

export default ProfileBody
