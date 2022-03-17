/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WifiIcon from '@mui/icons-material/Wifi';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import UserDetails from '../../../components/DashboardLayout/UserDetails/UserDetails'

export const getStaticPaths = async () =>{
    const res = await fetch("https://polar-hamlet-38117.herokuapp.com/users");  
    const data = await res.json();

    const paths = data.map((curElem) => {
       //  console.log(curElem);
          return {
               params: {
                   page: curElem?._id?.toString(),
               },
          }
    })

    return {
        paths,
        fallback:false,
    };
};

export const getStaticProps = async (context) =>{
    const id = context.params.page;


    return {
        props: {
           id,
        }
    };
};

const pageNo = (props) => {
    const id = props.id;
    const [details,setDetails] = useState([]);
    useEffect(() =>{
        fetch("https://polar-hamlet-38117.herokuapp.com/users")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const ExactItem = details.filter(td => td._id === id);
    // console.log(ExactItem)
    
    return (
        <div>
            <DashboardLayout>
            <div className='mt-4'>
              <Box sx={{ }}>
                   <div >
                   <img  className="relative w-full h-96  object-cover" src="https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80"  alt="banner" />
                     {/* here user card */}
                 <div className="  md:top-16   md:ml-2 md:mt-20 -mt-72 ml-6  rounded absolute">         
                        <div className='flex justify-center '>
                            <img src={ExactItem[0]?.image} className="w-40 h-40 rounded-full border-4 border-green-600  " alt="image" />
                        </div>
                     <div className="mt-6 text-center">
                     <div>
                    <Container>
                      <ul className="user-icon-2 my-4 flex  justify-center">
                        <li>
                          <FacebookIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <GoogleIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <InstagramIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <TwitterIcon sx={{ fontSize: '18px' }} />
                        </li>
                        <li>
                          <WifiIcon sx={{ fontSize: '18px' }} />
                        </li>
                      </ul>
                    </Container>
                  </div>
                                <h3 className=" font-bold text-white mt-8">{ExactItem[0]?.displayName}</h3>
                                <p className="mt-1 mb-3 text-white">{ExactItem[0]?.profession}</p>
                     </div>
                        </div>
                   </div>
              </Box>
           
          </div>
             <UserDetails props={props} />
            </DashboardLayout>
        </div>
    );
};

export default pageNo;