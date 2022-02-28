/* eslint-disable @next/next/no-img-element */
import {Box, Container, Grid } from '@mui/material'
import Link from 'next/link'

const ForumFooterBanner = () => {
  return (
    <div>
     <div className="overlay-bg">
        <Container>
        <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Grid item xs={12} sm={6} md={8} >
         <div className="action-title-wrap title-img flex items-center">
                <img
                  style={{ paddingRight: '45px' }}
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/chat-smile.png"
                  alt=""
                />
                <h2
                  style={{
                    color: '#fff',
                    fontSize: '44px',
                    lineHeight: '1.2',
                    fontWeight: '500',
                  }}
                  className="action-title hidden md:block"
                >
                  New to Communities?
                </h2>
              </div>
         </Grid>
         <Grid item xs={12} sm={6} md={4}>
        <Link href='/'>
        <a className="action_btn mt-8">
                Join the community <i className="fa-regular fa-chevron-right"></i>
              </a>
        </Link>
         </Grid>
         
         </Grid>
        </Container>
        </div>
    </div>
  )
}

export default ForumFooterBanner
