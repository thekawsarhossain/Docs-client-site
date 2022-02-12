import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))
const HeroSection = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div
      style={{ background: '#140B25', height: '750px' }}
      className="relative flex items-center justify-center"
    >
      <div>
        <div className="">
          <div className="shape-1 absolute top-0 left-0 hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap4.png"
              alt=""
            />
          </div>
          <div className="shape-2 absolute top-0 left-0  hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap1.png"
              alt=""
            />
          </div>
          <div className="shape-3 absolute bottom-0 right-0  hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap3.png"
              alt=""
            />
          </div>
          <div className="shape-4 absolute bottom-0 right-0 hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/banner_shap2.png"
              alt=""
            />
          </div>
          <div className="shape-4 absolute top-60 left-60 hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/plus1.png"
              alt=""
            />
          </div>
          <div className="shape-4 absolute top-60 left-60 hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/plus1.png"
              alt=""
            />
          </div>
          <div className="shape-4 absolute bottom-60 right-96 hidden sm:block">
            <img
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/plugins/docy-core/widgets/inc/hero/controls/images/plus2.png"
              alt=""
            />
          </div>
          <div
            className="shape-4 absolute bottom-96 right-60 hidden sm:block"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#fff',
              opacity: '0.14',
            }}
          ></div>
          <div
            className="shape-4 absolute bottom-60 left-96 hidden sm:block"
            style={{
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              background: '#fff',
              opacity: '0.14',
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <h1 className="text-center font-sans font-bold text-white">
                How can we help you?
              </h1>
              <p className="pt-6 text-center text-lg font-bold text-white">
                Search here to get answers to your questions
              </p>
            </div>
            <div>
              <div class=" py-10 px-2">
                <div class="mx-auto max-w-md overflow-hidden rounded-lg md:max-w-xl">
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div class="relative flex">
                        <div>
                          <i class="fa fa-search absolute top-5 left-8 text-gray-400"></i>
       <input
         type="text"
         class="h-14 w-96 rounded-tl-full rounded-bl-full bg-white pl-14 pr-4 hover:cursor-pointer focus:outline-none"
                            name=""
                          />
                        </div>
                        <div>
                          <div>
            <Button 
              className="click"
              id="demo-customized-button"
                              aria-controls={
                                open ? 'demo-customized-menu' : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              endIcon={<KeyboardArrowDownIcon />}
                            >
                              all
                            </Button>
                            <StyledMenu
                              id="demo-customized-menu"
                              MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                            >
                              <MenuItem onClick={handleClose} disableRipple>
                                <EditIcon />
                                Edit
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                <FileCopyIcon />
                                Duplicate
                              </MenuItem>
                              <Divider sx={{ my: 0.5 }} />
                              <MenuItem onClick={handleClose} disableRipple>
                                <ArchiveIcon />
                                Archive
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                <MoreHorizIcon />
                                More
                              </MenuItem>
                            </StyledMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
