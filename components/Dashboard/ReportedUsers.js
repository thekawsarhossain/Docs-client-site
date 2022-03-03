/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import AddRounded from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'

const reportedUsers = [
  {
    img: 'https://i.ibb.co/Kw7ZCg4/users.jpg',
    userName: 'Mohammod Jafor',
    email: 'jafor20@gmail.com',
    reporterName: 'Rakib Ahmed',
  },
  {
    img: 'https://i.ibb.co/pvYMW2b/avatar-6.png',
    userName: 'Alex Jorbor',
    email: 'alex22@gmail.com',
    reporterName: 'Monirul Fahad',
  },
  {
    img: 'https://i.ibb.co/z5P6r9X/user4.jpg',
    userName: 'Riman wings',
    email: 'rimanwings@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/N2DKz39/usr3.jpg',
    userName: 'Tasnuvai Hridi',
    email: 'hridi202@gmail.com',
    reporterName: 'Nazmus Sakib',
  },
  {
    img: 'https://i.ibb.co/Kw7ZCg4/users.jpg',
    userName: 'Mohammad Jaffy',
    email: 'jaffywing@gmail.com',
    reporterName: 'Shihab',
  },
  {
    img: 'https://i.ibb.co/TP8kMHR/user2.jpg',
    userName: 'Angelina jolly',
    email: 'angeljolly@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/z5P6r9X/user4.jpg',
    userName: 'Riman wings',
    email: 'rimanwings@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/N2DKz39/usr3.jpg',
    userName: 'Tasnuvai Hridi',
    email: 'hridi202@gmail.com',
    reporterName: 'Nazmus Sakib',
  },
  {
    img: 'https://i.ibb.co/Kw7ZCg4/users.jpg',
    userName: 'Mohammad Jaffy',
    email: 'jaffywing@gmail.com',
    reporterName: 'Shihab',
  },
  {
    img: 'https://i.ibb.co/z5P6r9X/user4.jpg',
    userName: 'Riman wings',
    email: 'rimanwings@gmail.com',
    reporterName: 'Alexay',
  },
  {
    img: 'https://i.ibb.co/N2DKz39/usr3.jpg',
    userName: 'Tasnuvai Hridi',
    email: 'hridi202@gmail.com',
    reporterName: 'Nazmus Sakib',
  },
]

const ReportedUsers = () => {
  const [showMoreUsers, setShowMoreUsers] = React.useState(false)
  const [usersData, setUsersData] = React.useState([])
  React.useEffect(() => {
    if (showMoreUsers) {
      setUsersData(reportedUsers.slice(6, 1000))
    } else {
      setUsersData()
    }
  }, [showMoreUsers])
  return (
    <div className="my-8">
      <p className=" font-bold">Reported Users</p>
      <div className="mt-5 grid grid-cols-12 gap-4">
        {reportedUsers.slice(0, 6).map((user) => (
          <div
            key={user.index}
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src={user?.img}
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                      {user?.userName}
                    </h4>
                  </a>
                </Link>
                <p>{user?.email}</p>
                <h5 className="pt-2">
                  Reported By
                  <span className="font-semibold text-gray-700">
                    {user?.reporterName}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center text-center">
        <button
          className="flex items-center rounded-md p-1 font-bold text-blue-800 duration-300"
          onClick={() => setShowMoreUsers(!showMoreUsers)}
        >
          More Reported Users
          {showMoreUsers ? <RemoveRoundedIcon /> : <AddRounded />}
        </button>
      </div>
      <div className="mt-5 grid grid-cols-12 gap-4">
        {usersData?.map((user) => (
          <div
            key={user.index}
            style={{ backgroundColor: '#ba895d' }}
            className="col-span-12 flex items-center justify-between rounded   p-4 text-white md:col-span-6 xl:col-span-4"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full bg-white object-cover p-2"
                  src={user?.img}
                  alt="blog thumbnail"
                />
              </div>
              <div>
                <Link href="#">
                  <a>
                    <h4 className=" font-medium text-white hover:text-gray-700">
                      {user?.userName}
                    </h4>
                  </a>
                </Link>
                <p>{user?.email}</p>
                <h5 className="pt-2">
                  Reported By
                  <span className="font-semibold text-gray-700">
                    {user?.reporterName}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReportedUsers
