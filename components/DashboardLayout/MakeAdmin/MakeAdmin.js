import React, { useState } from 'react'
import Alert from '@mui/material/Alert'

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const handleOnBlur = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    const user = { email }
    const url = `https://polar-hamlet-38117.herokuapp.com/users/${user}`

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        window.alert('Are you really want to add new admin!!')
        if (data.modifiedCount) {
          setEmail('')
          setSuccess(true)
        }
      })

    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center pt-32">
      <div className="makeAdmin">
        <h2 className="pb-5 text-center dark:text-white">Make An Admin</h2>
        <form className=" flex gap-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded border-2 border-theme bg-white p-2 py-0 outline-none"
            onBlur={handleOnBlur}
            type="email"
          />
          <button
            type="submit"
            className="rounded bg-theme px-5 py-2 text-white hover:bg-theme-700"
          >
            Submit
          </button>
        </form>
        <br />
        {success && <Alert severity="success">New Admin Added</Alert>}
      </div>
    </div>
  )
}

export default MakeAdmin
