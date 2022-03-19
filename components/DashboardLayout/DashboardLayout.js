/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp'
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp'
import BookSharpIcon from '@mui/icons-material/BookSharp'
import MarkEmailUnreadSharpIcon from '@mui/icons-material/MarkEmailUnreadSharp'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import { useSelector } from 'react-redux'
const drawerWidth = 240

function DashboardLayout(props) {
  const { window, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const userInfoFromDB = useSelector(
    (state) => state?.reducers?.user?.userInfoFromDB
  )

  const drawer = (
    <div className="h-full bg-slate-100 text-Docy-Dark dark:bg-Docy-DarkGray dark:text-white">
      <div className="py-2">
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
      </div>
      <hr style={{ marginTop: '-2px' }} />
      <div className="mt-5 mb-4 text-center">
        <div className="flex justify-center">
          <img
            src={userInfoFromDB.image}
            className="mb-3 h-40 w-40 rounded-full  object-cover p-2"
            alt="Admin logo"
          />
        </div>
        <h3 className="text-lg font-bold">{userInfoFromDB.displayName}</h3>
        <p>{userInfoFromDB.email}</p>
      </div>
      <hr style={{ marginTop: '-2px' }} />
      <List sx={{ ml: 1 }}>
        <Link href="/">
          <a>
            <ListItem button>
              <ListItemText>
                {' '}
                <HomeSharpIcon /> Home
              </ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard">
          <a>
            <ListItem button>
              <ListItemText>
                <DashboardSharpIcon /> Dashboard
              </ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard/manageUser">
          <a>
            <ListItem button>
              <ListItemText>
                <ManageAccountsSharpIcon /> Manage Users
              </ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard/manageBlogs">
          <a>
            <ListItem button>
              <ListItemText>
                <BookSharpIcon /> Manage Blogs
              </ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard/emails">
          <a>
            <ListItem button>
              <ListItemText>
                {' '}
                <MarkEmailUnreadSharpIcon /> Messages
              </ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/adminDashboard/makeAdmin">
          <a>
            <ListItem button>
              <ListItemText>
                {' '}
                <AdminPanelSettingsIcon /> Make Admin
              </ListItemText>
            </ListItem>
          </a>
        </Link>
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className="bg-slate-50 dark:bg-black">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div>{children}</div>
        </Box>
      </Box>
    </div>
  )
}

DashboardLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default DashboardLayout
