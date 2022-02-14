import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import DateRangeIcon from '@mui/icons-material/DateRange'

const VideoList = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div className="video-List">
      <Container>
        <div className="videoList-container grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-7">
            <iframe
              // className="w-full"
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/X7XbjwD6fVY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-span-12 text-white md:col-span-5">
            <h2 className="pb-7 font-bold">Docky Video List</h2>
            <Accordion
              sx={{ mb: 1, backgroundColor: '#2C303A', color: 'white' }}
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                sx={{ backgroundColor: '#2C303A', color: 'white' }}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className="font-bold">Configuration</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-2-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Theme Settings – Docy Video Tutorial
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ mb: 1, backgroundColor: '#2C303A', color: 'white' }}
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                sx={{ backgroundColor: '#2C303A', color: 'white' }}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className="font-bold">
                  Development Environment
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{ mb: 1, backgroundColor: '#2C303A', color: 'white' }}
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                sx={{ backgroundColor: '#2C303A', color: 'white' }}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className="font-bold">Getting Started</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: '#2C303A', color: 'white' }}
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                sx={{ backgroundColor: '#2C303A', color: 'white' }}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className="font-bold">
                  License and Support
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a href="#">
                      <li className="mb-3 flex gap-3">
                        <div>
                          <img
                            className="h-12 w-14 rounded"
                            src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/03/video-bg-1.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className="pb-2 text-gray-300">
                            Have you any question which is not answered?
                          </h5>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex gap-2">
                              <PersonIcon className=" text-sm" />
                              Fahad
                            </div>
                            <div className="flex gap-2">
                              <DateRangeIcon className="text-sm" />
                              March 27, 2022
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VideoList
