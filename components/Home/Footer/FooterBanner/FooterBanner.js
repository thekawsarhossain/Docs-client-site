import { Search } from "@mui/icons-material";
// import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image"

const FooterBanner = () => {
  return (
    <div>
    <div className="email-section">
          <div className="overflow-hidden">
            <Image className="rounded"  src="/banner/shap-1.png" width="500px" height="100%"></Image>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-5 mx-auto flex flex-wrap">
              <h2 class="sm:text-4xl text-2xl font-bold text-white font-medium title-font mb-2 md:w-2/5"> Great Customer 
                    <br />
                    Relationships start here</h2>
                <div class=" md:pl-6">
                <div className="flex flex-wrap">
                   <div className='md:w-80 search-container md:ml-8 bg-white' >
                        <button className="text-black">
                            <Search/>
                        </button>
                        <input className='m-2 p-0.5'  style={{flex:'1',border:'none'}}  type="text" placeholder='Your Email'/>
                   </div>
                   <div className="ml-5 md:mt-0 mt-4">
                     {/* buttons use for color config file */}
                   <button  className="rounded-full px-5 py-2 mt-2 bg-buttons font-semibold text-white hover:bg-white hover:text-buttons">Get Started</button>
                   </div>
                </div>
                </div>
            </div>
          </section>
         <Image src="/banner/shap-2.png" width="1200px" height="100%"></Image>
    </div>
</div>
  );
}

export default FooterBanner;