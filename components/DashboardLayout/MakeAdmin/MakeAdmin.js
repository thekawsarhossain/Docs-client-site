import React, { useState } from 'react'
import Alert from '@mui/material/Alert';

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const handleOnBlur = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    const user = { email }
    const url = `http://localhost:5000/users/${user}`

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          window.alert("Are you really want to add new admin!!");
        if (data.modifiedCount) {
          setEmail('')
          setSuccess(true)
        }
      })
      

    e.preventDefault()
  }

  return (
    <div className="flex justify-center items-center pt-32">
      <div className="makeAdmin"
      >
        <h2 className='text-center pb-5'>Make An Admin</h2>
        <form className=" flex gap-4" onSubmit={handleSubmit}>
          <input className="w-full p-2 py-0 bg-white outline-none border-2 border-theme rounded" onBlur={handleOnBlur} type="email" />
          <button type="submit" className="px-5 py-2 bg-theme hover:bg-theme-700 text-white rounded">
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
