import React from 'react'
import Image from 'next/image'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

const fakeData = [
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/07/icon-1@2x-1.svg',
    title: 'User Feedback',
    info: '3 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/07/icon-2@2x-1.svg',
    title: 'Product Support',
    info: '2 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/04/icon-8@2x.svg',
    title: 'Docly Theme Support',
    info: '3 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/07/icon-4@2x-1.svg',
    title: 'Account Management',
    info: '0 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/07/icon-5@2x-1.svg',
    title: 'Rogan Theme Support',
    info: '9 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/07/icon-6@2x-1.svg',
    title: 'Gullu Theme Support',
    info: '10 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2020/07/icon-7@2x-1.svg',
    title: 'Aprimo Theme Support',
    info: '1 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2019/04/smile@2x.png',
    title: 'Deksi Theme',
    info: '5 Posts',
  },
  {
    icon: 'https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/04/icon-8@2x.svg',
    title: 'kbDoc Template Support',
    info: '4 Posts',
  },
]

const CommunitiesCard = () => {
  const [showMore, setShowMore] = React.useState(false)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if (showMore) {
      setData(fakeData)
    } else {
      setData(fakeData.slice(0, 6))
    }
  }, [showMore])

  return (
    <div className="container mx-auto my-6 rounded-xl bg-darkBlue">
      {/* grid system for the items here  */}
      <div class="grid grid-cols-1 grid-rows-3 lg:grid-cols-3">
        {data?.map((item) => (
          <div className=" border-w-2 border-b border-r border-l border-secondary">
            <div className="flex items-center p-10">
              <Image src={item?.icon} width="50px" height="50px" />
              <span className="ml-4">
                <a href="/">
                  <h6 className="font-bold text-white">{item?.title}</h6>
                </a>
                <p className="text-secondary">{item?.info}</p>
              </span>
            </div>
          </div>
        ))}
        {/* buuton here  */}
        <div className="my-4 text-center">
          <button
            className="rounded-md p-1 font-bold text-blue-800 duration-300 focus:ring-2"
            onClick={() => setShowMore(!showMore)}
          >
            {' '}
            <ArrowCircleDownIcon /> More Communities{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunitiesCard
