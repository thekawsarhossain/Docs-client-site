import React from 'react';
import { Search } from '@mui/icons-material'

const CommunityBanner = () => {
    return (
        <div style={{backgroundColor:'#F9F7F7'}}>
            <div className='text-center  pt-32'>
                <h2 className='font-bold mb-4'>Docy Support Communities</h2>
                <p>Find answers, ask questions, and connect with our community of KbDoc users <br /> from around the world.</p>
                <div className="mx-4 px-4 my-6 ">

                        <input
                          className=" rounded-full lg:w-2/4 py-3 lg:100%  drop-shadow-2xl lg:p-3  lg:pr-20 focus:outline-none"
                          style={{ flex:'8', border: 'none' }}
                          type="text"
                          placeholder="Search or Ask question"
                        
                        />
                        <button style={{flex:'2'}}>
                          <Search/>
                      </button>
                    
                </div>
             </div>
             <div className='flex justify-evenly my-8 flex-wrap community'>
               <div>
               
               </div>
                 <div>
                 <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bnp2.png"  alt="home_supportf" className='ml-20' width="30px" height="30px"  />
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn2.jpg" alt="home_support2" width="70px" height="70px" />
                 </div>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn1.jpg" alt="home_support1" className='mt-8' width="90px" height="90px" />
                 </div>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn3.jpg" alt="home_support3" width="50px" height="50px" />
                 </div>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn4.jpg" alt="home_support4" width="50px" height="50px" />
                 </div>
                 <div>
                 <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bnp1.png"  alt="home_supportf" className='ml-20' width="30px" height="30px"  />
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn10.jpg" alt="home_support10" className='lg:my-12' width="50px" height="50px" />
                 </div>
             </div>
             <div className='flex justify-around my-4 flex-wrap community'>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn7.jpg" alt="home_support2" className='my-12' width="70px" height="70px" />
                 </div>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn9.jpg" alt="home_support1" width="70px" height="70px" />
                 </div>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn6.jpg" alt="home_support3" className='my-12' width="100px" height="100px" />
                 </div>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn5.jpg" alt="home_support4" width="50px" height="50px" />
                 </div>
                 <div>
                     <img src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/bn8.jpg" alt="home_support8" width="50px" height="50px" />
                 </div>
             </div>
        </div>
    );
};

export default CommunityBanner;