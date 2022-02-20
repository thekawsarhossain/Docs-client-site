import React from 'react';
import Box from '@mui/material/Box';
// import Image from 'next/image'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const fakeData= [
    {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp1.png',
        title: 'Connection timeouts',
        info: 'updated by: Hilary ouse 11 days ago',
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp2.jpg',
        title: 'Connection timeouts',
        info: 'updated by: Hilary ouse 11 days ago',
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp3.jpg',
        title: 'Connection timeouts',
        info: 'updated by: Hilary ouse 11 days ago',
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp4.jpg',
        title: 'Connection timeouts',
        info: 'updated by: Hilary ouse 11 days ago',
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp5.jpg',
        title: 'Connection timeouts',
        info: 'updated by: Hilary ouse 11 days ago',
      },
      {
        icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp6.jpg',
        title: 'Connection timeouts',
        info: 'updated by: Hilary ouse 11 days ago',
      },
]

const CommunityPost = () => {
    return (
        <div>
            <div className='text-center my-6'>
                <h2 className='font-bold mb-3'>KbDoc top community posts</h2>
                <p>
                Me old mucker chimney pot bodge so I said Oxford my lady show off show off <br /> pick your nose and blow off cack cheesed.!
                </p>
            </div>
            <div className='w-10/12 m-auto mt-8'>
                <Box sx={{ flexGrow: 1 }}>
                    <div>
                        {fakeData.map((item) => (
                        <div key={item.title}>
                            <div className='flex flex-wrap justify-between items-center text-center my-12 py-8 drop-shadow-2xl bg-white rounded-3xl px-4'>
                              <div className='flex '>
                                <img src={item?.icon} width="50px" height="50px" alt='img'/>
                                  <div className='ml-3'>
                                  <h3 className='font-bold'>{item?.title}</h3>
                                  <p className=''>{item?.info}</p>
                                  </div>
                              </div>
                              <div className='flex '>
                                <p><span><RemoveRedEyeRoundedIcon/></span> 420</p>
                                <p className='mx-3'><span><QuestionAnswerRoundedIcon/></span> 120</p>
                                <p><span><ThumbUpAltRoundedIcon/></span> 5</p>
                              </div>
                            </div>
                           
                        </div>
                        ))}
                    </div>
                </Box>
                </div>
        </div>
    );
};

export default CommunityPost;