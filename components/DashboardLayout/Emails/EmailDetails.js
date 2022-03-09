import { useSelector } from 'react-redux'

const EmailDetails = () => {
  // getting data from redux
  const email = useSelector((state) => state?.reducers?.emails?.email)

  return (
    <div>
      <h2>
        {email?.firstName} {email?.lastName}
      </h2>
      <p>{email?.message}</p>
    </div>
  )
}

export default EmailDetails
