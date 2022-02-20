import { Box, Container, Grid } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';

import Example from '../Home/HeroSection/test'
const DocsBanner = () => {
  return (
    <div>
  <Navbar/>
  <div className="bg-[url('https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2022/02/3261838-scaled.jpg')]  bg-cover bg-no-repeat  bg-center ">
  <div>
            <form action="#" className=" py-32">
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
    </div>
 
    </div>
  );
}

export default DocsBanner;