/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button, Grid } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
import Link from 'next/link'

const Docs1 = () => {
  const [docs, setDocs] = useState([])
  useEffect(() => {
    fetch('./docs.json')
      .then((res) => res.json())
      .then((data) => setDocs(data.slice(0, 6)))
  }, [])
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <Image
              src="https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2019/04/spinner_logo-1.png"
              width="71"
              height="67"
              alt="img"
            ></Image>
            <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
              Docy Goal
            </Typography>
            <Typography variant="p" sx={{ lineHeight: 2 }}>
              Docy is a powerful, responsive, and high-performance online
              documentation that can assist you quickly
            </Typography>
            <Button sx={{ my: 2 }}>
              View All <ArrowForwardIcon sx={{ ml: 1 }} />{' '}
            </Button>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {docs.map((doc) => (
                <Grid
                  key={doc?.docsTitle}
                  item
                  sx={{ mb: 3 }}
                  xs={12}
                  sm={6}
                  md={6}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   
                    <Box sx={{ ml: 3 }}>
                       <Box>
                           <><p >{doc?.description}</p></>
                      </Box>
                       
                    
                     
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Docs1
