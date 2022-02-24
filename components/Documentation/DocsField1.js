/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Image from 'next/image'
import Link from 'next/link'
const DocsField1 = () => {
  return (
    <div className="mt-12">
      <div className="DocsElements mx-8">
        <h3>Docy Documentation</h3>
        <input type="search" name="" id="docSearch" placeholder="Filter" />
        <div className="div">
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
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2019/12/slide-show-app.png"
                  alt="img "
                  className="tabImg"
                />
                <Typography className="text-title">Elements</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <Link href="#">
                  <li>Tabs Widget</li>
                </Link>
                <Link href="#">
                  <li>Notice / Message Widget</li>
                </Link>
                <Link href="#">
                  <li>Accordions Widget</li>
                </Link>
                <Link href="#">
                  <li>Cheatsheet Widget</li>
                </Link>
                <Link href="#">
                  <li>Image Hotspots Widget</li>
                </Link>
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
                <Typography className="text-title ml-2">Content</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <Link href="#">
                  <li>Tabs Widget</li>
                </Link>
                <Link href="#">
                  <li>Notice / Message Widget</li>
                </Link>
                <Link href="#">
                  <li>Accordions Widget</li>
                </Link>
                <Link href="#">
                  <li>Cheatsheet Widget</li>
                </Link>
                <Link href="#">
                  <li>Image Hotspots Widget</li>
                </Link>
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
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2020/05/edition.png"
                  alt="img "
                  className="tabImg"
                />
                <Typography className="text-title ml-2">
                  Code Syntax Highlight
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <Link href="#">
                  <li>Tabs Widget</li>
                </Link>
                <Link href="#">
                  <li>Notice / Message Widget</li>
                </Link>
                <Link href="#">
                  <li>Accordions Widget</li>
                </Link>
                <Link href="#">
                  <li>Cheatsheet Widget</li>
                </Link>
                <Link href="#">
                  <li>Image Hotspots Widget</li>
                </Link>
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
                  src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2020/04/pin.png"
                  alt="img "
                  className="tabImg"
                />
                <Typography className="text-title ml-2">Layouts</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <Link href="#">
                  <li>Tabs Widget</li>
                </Link>
                <Link href="#">
                  <li>Notice / Message Widget</li>
                </Link>
                <Link href="#">
                  <li>Accordions Widget</li>
                </Link>
                <Link href="#">
                  <li>Cheatsheet Widget</li>
                </Link>
                <Link href="#">
                  <li>Image Hotspots Widget</li>
                </Link>
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
                <Typography className="text-title ml-2">Footnotes</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <Link href="#">
                  <li>Tabs Widget</li>
                </Link>
                <Link href="#">
                  <li>Notice / Message Widget</li>
                </Link>
                <Link href="#">
                  <li>Accordions Widget</li>
                </Link>
                <Link href="#">
                  <li>Cheatsheet Widget</li>
                </Link>
                <Link href="#">
                  <li>Image Hotspots Widget</li>
                </Link>
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
                <Typography className="text-title ml-2">Changelogs</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <Link href="#">
                  <li>Tabs Widget</li>
                </Link>
                <Link href="#">
                  <li>Notice / Message Widget</li>
                </Link>
                <Link href="#">
                  <li>Accordions Widget</li>
                </Link>
                <Link href="#">
                  <li>Cheatsheet Widget</li>
                </Link>
                <Link href="#">
                  <li>Image Hotspots Widget</li>
                </Link>
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
                <Typography className="text-title ml-2">FAQs</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-list">
                <Link href="#">
                  <li>Tabs Widget</li>
                </Link>
                <Link href="#">
                  <li>Notice / Message Widget</li>
                </Link>
                <Link href="#">
                  <li>Accordions Widget</li>
                </Link>
                <Link href="#">
                  <li>Cheatsheet Widget</li>
                </Link>
                <Link href="#">
                  <li>Image Hotspots Widget</li>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default DocsField1
