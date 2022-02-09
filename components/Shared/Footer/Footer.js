import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import FooterBanner from './FooterBanner/FooterBanner';

const Footer = () => {
    return (
        
       <> 
         <footer style={{ width: '100%',marginTop:'20px',backgroundColor:'#121317',color:'white',padding:'20px' }}
          className="text-white body-font">
               <FooterBanner/>
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-4xl">Docy</span>
                    </a>
                    <p className="mt-2 text-lg text-white">I’m available for commissions and collaborations, and i’m excited to hear from you about new projects.!!</p>
                    <div className="flex md:justify-start sm:justify-center">
                        <div className='footer-icon'>
                         <Facebook/>
                        </div>
                        <div className='footer-icon'>
                         <Twitter/>
                        </div>
                        <div className='footer-icon'>
                         <LinkedIn/>
                        </div>
                    </div>
                </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Doc Contents</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Doc Elements</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Footnotes</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                        </nav>
                    </div>
                    </div>
                </div>
                <hr />
            <p className="mt-5 text-center"><span>&copy;</span> All Rights Reserved by Programming Folks-Team</p>
            </footer>
       </>
    );
};

export default Footer;