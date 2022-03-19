/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import WifiIcon from '@mui/icons-material/Wifi'
import { useEffect, useState } from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import DeleteIcon from '@mui/icons-material/Delete'

const ManageUsers = () => {
  const [manageUsers, setManageUsers] = useState([])
  // here users
  useEffect(() => {
    fetch(`https://polar-hamlet-38117.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setManageUsers(data))
  })

  // here users delete
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure , you want to delete ?')
    if (proceed) {
      const url = `https://polar-hamlet-38117.herokuapp.com/users/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert('Deleted successfully')
            const remaining = manageUsers.filter((order) => order._id !== id)
            setManageUsers(remaining)
          }
        })
    }
  }

  return (
    <Box>
      {/* Showing users in table  */}
      <table className="block min-w-full border-collapse md:table">
        <thead className="block md:table-header-group">
          <tr className="border-grey-500 absolute -top-full -left-full block border md:relative md:top-auto md:left-auto md:table-row  md:border-none ">
            <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
              User
            </th>
            <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
              Gender
            </th>
            <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
              Email Address
            </th>
            <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
              Role
            </th>
            <th className="md:border-grey-500 block bg-gray-600 p-2 text-left font-bold text-white md:table-cell md:border">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {manageUsers.map((data) => (
            <tr
              key={data?._id}
              className="block border border-gray-900 bg-gray-300 md:table-row md:border-none"
            >
              <td className="md:border-grey-500 flex p-2 text-left md:table-cell md:border">
                <span className="inline-block w-1/3 self-center font-bold md:hidden">
                  User
                </span>
                <div className="self-center">
                  <Link href={`/adminDashboard/manageUser/${data?._id}`}>
                    <a>
                      <div className="flex items-center text-sm">
                        {/* <!-- Avatar with inset shadow --> */}
                        <div className="relative mr-3  h-8 w-8 rounded-full ">
                          <img
                            className="h-full w-full rounded-full object-cover"
                            src={data?.image}
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">{data?.displayName}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {data?.profession}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </td>
              <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                <span className="inline-block w-1/3 font-bold md:hidden">
                  Gender
                </span>
                {data?.gender}
              </td>
              <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                <span className="inline-block w-1/3 font-bold md:hidden">
                  Email
                </span>
                {data?.email}
              </td>
              <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                <span className="inline-block w-1/3 font-bold md:hidden">
                  Role
                </span>
                {data?.role}
              </td>
              <td className="md:border-grey-500 block p-2 text-left md:table-cell md:border">
                <span className="inline-block w-1/3 font-bold md:hidden">
                  Actions
                </span>
                <button className="mr-4 rounded border border-blue-500 bg-blue-500 py-1 px-2 font-bold text-white hover:bg-blue-700">
                  Make Admin
                </button>
                <button
                  className="rounded border border-red-500 bg-red-500 py-1 px-2 font-bold text-white hover:bg-red-700"
                  onClick={() => handleDelete(data?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}

export default ManageUsers
