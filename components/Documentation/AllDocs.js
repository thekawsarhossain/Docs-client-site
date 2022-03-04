/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */

import * as React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Elements from './MainDocs/Elements/Elements'
import ImageWidget from './MainDocs/Elements/ImageWidget/ImageWidget'
import MessageWidget from './MainDocs/Elements/MessageWidget/MessageWidget'
import TabsWidget from './MainDocs/Elements/TabsWidget/TabsWidget'
import Content from './MainDocs/Content/Content'
import ToolTip from './MainDocs/Content/Tootlip/ToolTip'
import VideoWidget from './MainDocs/Content/VideoWidget/VideoWidget'
import FAQ from './MainDocs/FAQ/FAQ'
import Shortcodes from './MainDocs/Shortcodes/Shortcodes'
import ConContent from './MainDocs/Shortcodes/ConContent/ConContent'
import Direction from './MainDocs/Shortcodes/Direction/Direction'
import Tips from './MainDocs/Tips/Tips'
import Language from './MainDocs/Tips/Language/LanguageTrans'
import OptimizeImg from './MainDocs/Tips/OptimizeImg/OptimizeImg'

const AllDocs = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <>
      <div className='overflow-hidden h-full'>
        <Container >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid className=" bg-Docy-DarkGray text-white pb-6 h-full " item xs={12} sm={6} md={4}>
                <div className=" md:mx-8 mt-16 ">
                 <h3>Docy Documentation</h3>
                  <input type="search" name="" id="docSearch" placeholder="Filter" />
      {/* start documentation tabs */}
          <Accordion
            sx={{
              backgroundColor: '#2c303a00',
              color: 'white',
              mb: 2,
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className=" flex">
               
                <img
                  src="https://spider-themes.net/wp-content/uploads/2020/10/content.png"
                  alt="img "
                  className="tabImg"
                />
                <button onClick={() => toggleTab(1)} >
                <span className="float-left hover:text-indigo-600 ml-3">Elements</span>
                </button>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <li>
                <button onClick={() => toggleTab(2)} >
                <span className="float-left hover:text-indigo-600">Image Widget </span>
                </button>
                </li>
                <li>
                <button onClick={() => toggleTab(3)} >
                <span className="float-left hover:text-indigo-600">Tabs Widget</span>
                </button>
                </li>
                <li>
                <button onClick={() => toggleTab(4)} >
                <span className="float-left hover:text-indigo-600"> Message Widget</span>
                </button>
                </li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: '#2c303a00',
              color: 'white',
              mb: 2,
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className=" flex">
               
                <img
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2020/04/pages.png"
                  alt="img "
                  className="tabImg"
                />
                <button onClick={() => toggleTab(5)} >
                      <span className="float-left ml-3">Content</span>
                     
                    </button>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className="text-list">
                <li>
                <button onClick={() => toggleTab(6)} >
                <span className="float-left hover:text-indigo-600">Tooltip & Direction </span>
                </button>
                </li>
                <li>
                <button onClick={() => toggleTab(7)} >
                <span className="float-left hover:text-indigo-600">Video Widget</span>
                </button>
                </li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: '#2c303a00',
              color: 'white',
              mb: 2,
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className=" flex">
               
                <img
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2019/04/notes.png"
                  alt="img "
                  className="tabImg"
                />
                <button onClick={() => toggleTab(8)} >
                 <span className="float-left ml-3">Shortcodes</span>
                 </button>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className="text-list">
                <li>
                <button onClick={() => toggleTab(9)} >
                <span className="float-left hover:text-indigo-600">Conditional Content</span>
                </button>
                </li>
                <li>
                <button onClick={() => toggleTab(10)} >
                <span className="float-left hover:text-indigo-600">Direction</span>
                </button>
                </li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: '#2c303a00',
              color: 'white',
              mb: 2,
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className=" flex">
               
                <img
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2020/05/notes-1.png"
                  alt="img "
                  className="tabImg"
                />
                <button onClick={() => toggleTab(11)} >
                      <span className="float-left ml-3">Tips</span>
                     
                    </button>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className="text-list">
                <li>
                <button onClick={() => toggleTab(12)} >
                <span className="float-left hover:text-indigo-600">Language Translations</span>
                </button>
                </li>
                <li>
                <button onClick={() => toggleTab(13)} >
                <span className="float-left hover:text-indigo-600">Optimize Images</span>
                </button>
                </li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: '#2c303a00',
              color: 'white',
              mb: 2,
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className=" flex">
               
                <img
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2019/04/slack.png"
                  alt="img "
                  className="tabImg"
                />
                <button onClick={() => toggleTab(14)} >
                 <span className="float-left ml-3">FAQ</span>
                 </button>
              </Box>
            </AccordionSummary>
          </Accordion>
      </div>
              </Grid>

      {/* start tabs fields */}
              <Grid sx={{mt:5}} item xs={12} sm={6} md={8}>
                <div
                  className={
                    toggleState === 1 ? 'content  active-content' : 'content'
                  }
                >
               <Elements/>
                </div>
                <div
                  className={
                    toggleState === 2 ? 'content  active-content' : 'content'
                  }
                >
                  <ImageWidget/>
                </div>
                <div
                  className={
                    toggleState === 3 ? 'content  active-content' : 'content'
                  }
                >
               
                  <TabsWidget/>
                </div>
                <div
                  className={
                    toggleState === 4 ? 'content  active-content' : 'content'
                  }
                >
                     <MessageWidget/>
                </div>
                <div
                  className={
                    toggleState === 5 ? 'content  active-content' : 'content'
                  }
                >
                  <Content/>
                </div>
                <div
                  className={ toggleState === 6 ? 'content  active-content' : 'content'}
                >
                  <ToolTip/>
                </div>
                <div
                  className={ toggleState === 7 ? 'content  active-content' : 'content'}
                >
                  <VideoWidget/>
                </div>
                <div
                  className={ toggleState === 8 ? 'content  active-content' : 'content'}
                >
                  <Shortcodes/>
                </div>
                <div
                  className={ toggleState === 9 ? 'content  active-content' : 'content'}
                >
                  <ConContent/>
                </div>
                <div className={ toggleState === 10 ? 'content  active-content' : 'content'} >
                  <Direction/>
                </div>
                <div className={ toggleState === 11 ? 'content  active-content' : 'content'} >
                  <Tips/>
                </div>
                <div className={ toggleState === 12 ? 'content  active-content' : 'content'} >
                  <Language/>
                </div>
                <div className={ toggleState === 13 ? 'content  active-content' : 'content'} >
                  <OptimizeImg/>
                </div>
                <div className={ toggleState === 14 ? 'content  active-content' : 'content'} >
                  <FAQ/>
                </div>
              
              </Grid>
            </Grid>
        </Container>
        </div>
    </>
  )
}

export default AllDocs
