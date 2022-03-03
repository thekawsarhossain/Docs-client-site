import React from 'react';
import UserDetails from '../../components/Dashboard/UserDetails';
import Sidebar from '../../components/Dashboard/Sidebar'

const userDetails = () => {
    return (
        <div>
        <div className="flex w-full  bg-gray-200">
          <Sidebar />
          <div className="m-5 min-h-screen w-full bg-slate-100 dark:bg-gray-800 p-5 transition-all">
             <UserDetails/> 
          </div>
        </div>
      </div>
    );
};

export default userDetails;