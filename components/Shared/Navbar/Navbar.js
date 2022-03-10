/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, Container } from '@mui/material'
import avatar from '../../../Images/avatar.png'
import { useSelector } from 'react-redux'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from 'next-themes'
import useFirebase from '../../../Firebase/useFirebase'

const Navbar = () => {
  // getting user info here
  const user = useSelector((state) => state?.reducers?.user?.currentUser)

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  const { logoutUser } = useFirebase()
  const renderThemeChange = () => {
    if (!mounted) return null

    const curentTheme = theme === 'system' ? systemTheme : theme

    if (curentTheme === 'dark') {
      return (
        <LightModeIcon
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <DarkModeIcon
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#1e1f26', minHeight: '100vh', color: 'white' }}
    >
      <Link href="/">
        <a className="flex justify-center py-4">
          {/* <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" /> */}
        </a>
      </Link>
      <Divider style={{ backgroundColor: 'white' }} />
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Home</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/documentation">
          <ListItem button>
            <ListItemText>
              <span>Documentation</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/blogs">
          <ListItem button>
            <ListItemText>
              <span>Blog</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem button>
            <ListItemText>
              <span>Contact</span>
            </ListItemText>
          </ListItem>
        </Link>
        {user?.email ? (
          <div>
            <Avatar
              alt="avatar"
              src={user?.photoURL ? user?.photoURL : avatar}
            />
            <button
              className="bg-white p-4 text-left text-white"
              onClick={() => logoutUser()}
            >
              logout
            </button>
          </div>
        ) : (
          <Link href="/login">
            <ListItem button>
              <ListItemText>
                <span>Log in</span>
              </ListItemText>
            </ListItem>
          </Link>
        )}
      </List>
    </Box>
  )
  return (
    <div className="font-serif">
      <header className="body-font absolute z-10 w-full text-gray-400">
        <Container>
          <div className="mt-5 flex justify-between">
            <Link href="/">
              <a className="flex justify-center">
                <img
                  style={{ height: 'fit-content' }}
                  className="hidden w-40 dark:block"
                  src="https://i.ibb.co/KspLSX3/docy-logo.png"
                  alt=""
                />
                <img
                  style={{ height: 'fit-content' }}
                  className="block w-40 dark:hidden"
                  src="https://i.ibb.co/Zx7g8yW/logo-2x-1.png"
                  alt=""
                />
              </a>
            </Link>
            <nav className="navbar-parent flex">
              <Link href="/">
                <a className="link-item">
                  <span>Home</span>
                  <span className="link-hover left-1/2 h-0.5 w-0"></span>
                  <span className="link-hover right-1/2 h-0.5 w-0"></span>
                </a>
              </Link>
              <Link href="/documentation">
                <a className="link-item">
                  <span>Documentation</span>
                  <span className="link-hover left-1/2 h-0.5 w-0"></span>
                  <span className="link-hover right-1/2 h-0.5 w-0"></span>
                </a>
              </Link>
              <Link href="/blogs">
                <a className="link-item">
                  <span>Blog</span>
                  <span className="link-hover left-1/2 h-0.5 w-0"></span>
                  <span className="link-hover right-1/2 h-0.5 w-0"></span>
                </a>
              </Link>
              {/* Dropdown button  */}
              <div className="group relative inline-block">
                <button className="link-item inline-flex items-center">
                  <span className="mr-1 pr-6">Pages</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className="absolute hidden pt-1 text-gray-700 group-hover:block">
                  <li className="">
                    <Link href="/about">
                      <a className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400">
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/adminDashboard">
                      <a className="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400">
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/profile">
                      <a className="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400">
                        Profile
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/contact">
                      <a className="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/ask">
                      <a className="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400">
                        Ask
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/helpdesk">
                      <a className="whitespace-no-wrap block rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400">
                        Help desk
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              {user?.email ? (
                <div className="relative inline-block">
                  <div className="group relative inline-block">
                    <img
                      style={{ height: '40px', width: '40px' }}
                      className="link-item inline-flex items-center rounded-full"
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : `https://i.ibb.co/DMYmT3x/Generic-Profile.jpg`
                      }
                      alt=""
                    />
                    <ul
                      style={{ minWidth: '120px' }}
                      className="absolute hidden pt-1 text-gray-700 group-hover:block"
                    >
                      <li className="">
                        <Link href="/profile">
                          <a className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400">
                            My Profile
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <button
                          className="whitespace-no-wrap block w-full rounded-b bg-gray-200 py-2 px-4 text-left hover:bg-gray-400"
                          onClick={() => logoutUser()}
                        >
                          logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link href="/login">
                  <a className="title-btn">Login</a>
                </Link>
              )}
              {renderThemeChange()}
            </nav>
            <div className="flex flex-wrap items-center justify-center text-base md:ml-auto lg:hidden">
              <React.Fragment key="left">
                <Button onClick={toggleDrawer('left', true)}>
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor="left"
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                >
                  {list('left')}
                </Drawer>
              </React.Fragment>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Navbar
