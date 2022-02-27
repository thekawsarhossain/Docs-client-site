/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import Image from 'next/image'
import AddRounded from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import { Container } from '@mui/material'
import Link from 'next/link'
const fakeData = [
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc1.png',
    title: 'Getting Started',
    info: '350 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc2.png',
    title: 'Integrations',
    info: '214 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc3.png',
    title: 'Solar System',
    info: '305 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc4.png',
    title: 'Cloud Server',
    info: '235 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc5.png',
    title: 'Integrate Quickly',
    info: '542 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc6.png',
    title: 'Deployment',
    info: '350 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc7.png',
    title: 'Configuration',
    info: '214 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc8.png',
    title: 'App Management',
    info: '305 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc9.png',
    title: 'Marketplaces',
    info: '235 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc10.png',
    title: 'Integrate Quickly',
    info: '542 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc12.png',
    title: 'Integrate Quickly',
    info: '350 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc13.png',
    title: 'Go Global',
    info: '214 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc14.png',
    title: 'Customize',
    info: '305 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc15.png',
    title: 'From Commissions',
    info: '235 Posts',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc16.png',
    title: 'Service Based',
    info: '542 Posts',
  },
]

const RelatedDoc = () => {
  const [showMore, setShowMore] = React.useState(false)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if (showMore) {
      setData(fakeData.slice(5, 15))
    } else {
      setData()
    }
  }, [showMore])

  return (
    <div className="py-14">
      <Container>
        <div className="mb-20 text-center">
          <h2 className="related-doc-title">
            Select your product to find <br /> Related communities
          </h2>
        </div>
        <div className="">
          <div className="">
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {fakeData.slice(0, 5).map((item) => (
                  <Grid item xs={2} sm={4} md={2.4} key={item?.title}>
                    <div className="text-center mb-14">
                      <div className="mb-8 flex justify-center">
                        <img
                          className="rounded p-7 shadow-xl"
                          src={item?.icon}
                          width=""
                          height=""
                        />
                      </div>
                      <h3 className="mb-1 text-lg font-medium ">
                        <Link href="#">
                          <a className="hover:text-blue-800">{item?.title}</a>
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{item?.info}</p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
          <hr />
          <div className="my-4 flex justify-center text-center">
            <button
              className="rounded-md p-1 flex items-center font-bold text-blue-800 duration-300"
              onClick={() => setShowMore(!showMore)}
            >
              More Communities
              {showMore ? (
                <RemoveRoundedIcon  />
              ) : (
                <AddRounded  />
              )}
            </button>
          </div>
          <div className="my-10">
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {data?.map((item) => (
                  <Grid item xs={2} sm={4} md={2.4} key={item?.title}>
                    {/* <div className=" text-center">
                      <img src={item?.icon} width="50px" height="50px" />
                      <h3 className="font-bold">{item?.title}</h3>
                      <p>{item?.info}</p>
                    </div> */}
                    <div className="text-center mb-14">
                      <div className="mb-8 flex justify-center">
                        <img
                          className="rounded p-7 shadow-xl"
                          src={item?.icon}
                          width=""
                          height=""
                        />
                      </div>
                      <h3 className="mb-1 text-lg font-medium ">
                        <Link href="#">
                          <a className="hover:text-blue-800">{item?.title}</a>
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{item?.info}</p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default RelatedDoc
