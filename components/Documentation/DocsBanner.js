import { Box, Container, Grid } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';

import Example from '../Home/HeroSection/test'
const DocsBanner = () => {
  return (
    <div>
  <Navbar/>
  <Box sx={{height:"400px",background:"#2C303A"}}>
     
       <div>
            <form action="#" class=" pt-32">
              <div  class="relative flex justify-center">
                <div class=" py-10 px-2">
                  <div>
                    <div class="md:flex">
                      <div class=" p-3">
                        <div class="relative flex">
                          <div>
                            <i class="fa fa-search absolute top-5 left-5 text-gray-400"></i>
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