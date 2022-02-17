import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'

const fakeData= [
    {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-1.png',
        title: 'Users',
        info: 842,
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-2.png',
        title: 'Topics',
        info: 214,
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-3.png',
        title: 'Forums',
        info: 305,
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-4.png',
        title: 'Replies',
        info: 235,
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/fun-fact-5.png',
        title: 'Tags',
        info: 652,
      },
]

const CompleteWork = () => {
    return (
        <div className='bg-offwhite py-8'>
            <div>
                <h2 className='text-center font-bold'>Over 1200+ <br /> completed work & Still counting.</h2>
            </div>
            <div className='w-11/12 m-auto mt-8'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {fakeData.map((item) => (
                        <Grid item xs={2} sm={4} md={2.4} key={item?.title}>
                            <div className=' text-center my-12 py-8 drop-shadow-2xl bg-white rounded-3xl'>
                            <Image src={item?.icon} width="50px" height="50px" />
                            <h3 className='font-bold'>{item?.info}</h3>
                            <h3 className='font-bold'>{item?.title}</h3>
                            </div>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
                </div>
        </div>
    );
};

export default CompleteWork;