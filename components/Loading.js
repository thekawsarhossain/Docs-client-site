import React from 'react'
import { WifiLoader } from "react-awesome-loaders";
const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
     
     <>
      <WifiLoader
        background={"transparent"}
        desktopSize={"150px"}
        mobileSize={"150px"}
        text={"Loading ...."}
        backColor="#E8F2FC"
        frontColor="#4645F6"
      />
      <br />
     
    </>
    </div>
  )
}

export default Loading
