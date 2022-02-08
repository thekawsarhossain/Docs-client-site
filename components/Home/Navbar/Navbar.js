import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#1e1f26', minHeight: '100vh', color: 'white' }}
    >
      <Link href="/">
        <a className="flex justify-center py-4">
          <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
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
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Documentation</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Forum</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Pages</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Blog</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Get Docy</span>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </Box>
  )
  return (
    <div>
      <header
        style={{ backgroundColor: '#dc354500' }}
        className="body-font absolute w-full text-gray-400"
      >
        <div className="container mx-auto flex justify-between p-5 ">
          <Link href="/">
            <a className="flex justify-center">
              <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
            </a>
          </Link>
          <nav className="flex hidden flex-wrap items-center justify-center text-base md:ml-auto lg:block">
            <Link href="/">
              <a className="text-1xl two relative mr-5 w-max font-bold hover:text-white">
                <span>Home</span>
                <span className="absolute -bottom-1 left-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-1xl two relative mr-5 w-max font-bold hover:text-white">
                <span>Documentation</span>
                <span className="absolute -bottom-1 left-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-1xl two relative mr-5 w-max font-bold hover:text-white">
                <span>Forum</span>
                <span className="absolute -bottom-1 left-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-1xl two relative mr-5 w-max font-bold hover:text-white">
                <span>Pages</span>
                <span className="absolute -bottom-1 left-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-1xl two relative mr-5 w-max font-bold hover:text-white">
                <span>Blog</span>
                <span className="absolute -bottom-1 left-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 h-1 w-0 bg-yellow-400 transition-all"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-1xl ml-10 rounded-full border-2 border-sky-500 py-2 px-4 font-bold hover:text-white">
                Get Docy
              </a>
            </Link>
          </nav>
          <div className="block flex flex-wrap items-center justify-center text-base md:ml-auto lg:hidden">
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
