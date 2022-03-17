import React from 'react'
import { BookLoader } from 'react-awesome-loaders'

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-200">
      <BookLoader
        background={'linear-gradient(135deg, #6066FA, #4645F6)'}
        desktopSize={'100px'}
        mobileSize={'80px'}
        textColor={'#5B1C8D'}
      />
    </div>
  )
}

export default Loading
