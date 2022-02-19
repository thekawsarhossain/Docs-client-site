import { Box, Container, Grid } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';

import Example from '../Home/HeroSection/test'
const DocsBanner = () => {
  return (
    <div>
  <Navbar/>
  <Box sx={{height:"400px",background:"#2C303A"}}>
     
       <div>
            <form action="#" className=" pt-32">
              <div  className="relative flex justify-center">
                <div className=" py-10 px-2">
                  <div>
                    <div className="md:flex">
                      <div className=" p-3">
                        <div className="relative flex">
                          <div>
                            <i className="fa fa-search absolute top-5 left-5 text-gray-400"></i>
                            <input
                              type="search"
                              name=""
                              id="search"
                              className="w-72 md:w-96"
                            />
                          </div>
                          <div>
                            <Example />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </form>
          </div>
       
    </Box>
    </div>
  );
}

export default DocsBanner;