import React from 'react';
// import Image from 'next/image'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const fakeData = [
    {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_1.png',
        title: 'Find answers and ask new questions',
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_2.png',
        title: 'Manage the people and discussions you follow',
       
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_3.png',
        title: 'Award points, level up, and earn new privileges',
        
      },
      
]

const SearchCommunity = () => {
    return (
        <div className="mt-5">
            <div className='text-center my-5'>
                <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/com_sm.png" width="150px" height="150px" />
                <h2>New to Communities?</h2>
                <Button  className='text-black bg-indigo-500 mt-3 '>Join The Community < ArrowForwardIcon/></Button>
            </div>
            <div className='w-11/12 m-auto mt-8'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {fakeData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item?.title}>
                            <div className=' text-center my-12 py-8 drop-shadow-2xl bg-white rounded-3xl hover:border-t-4 border-indigo-500'>
                                <img src={item?.icon} width="50px" height="50px" />
                                <h3 className='w-3/4 m-auto'>{item?.title}</h3>
                                <Link href="/"><a className='font-bold'>How to search Community < ArrowForwardIcon/></a></Link>
                            </div>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
                </div>
        </div>
    );
};

export default SearchCommunity;