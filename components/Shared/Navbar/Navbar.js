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
import { Avatar } from '@mui/material'
import avatar from '../../../Images/avatar.png'
import { useSelector } from 'react-redux'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from 'next-themes'

const Navbar = () => {
  // getting user info here
  const user = useSelector((state) => state?.reducers?.user?.currentUser)

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
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
        <Link href="/Forum">
          <ListItem button>
            <ListItemText>
              <span>Forum</span>
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
          <Avatar alt="avatar" src={user?.photoURL ? user?.photoURL : avatar} />
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
    <div>
      <header className="body-font absolute z-10 w-full text-gray-400">
        <div className="container mx-auto flex justify-between p-5 ">
          <Link href="/">
            <a className="flex justify-center">
              <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
            </a>
          </Link>
          <nav className="navbar-parent">
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
            <Link href="/Forum">
              <a className="link-item">
                <span>Forum</span>
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
            <Link href="/about">
              <a className="link-item">
                <span>About</span>
                <span className="link-hover left-1/2 h-0.5 w-0"></span>
                <span className="link-hover right-1/2 h-0.5 w-0"></span>
              </a>
            </Link>
            <Link href="/contact">
              <a className="link-item">
                <span>Contact</span>
                <span className="link-hover left-1/2 h-0.5 w-0"></span>
                <span className="link-hover right-1/2 h-0.5 w-0"></span>
              </a>
            </Link>
            {user?.email ? (
              <Avatar
                alt="avatar"
                src={user?.photoURL ? user?.photoURL : avatar}
              />
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
      </header>
    </div>
  )
}

export default Navbar
