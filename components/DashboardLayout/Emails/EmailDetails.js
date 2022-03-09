import { useEffect, useState } from "react"

const EmailDetails = () => {
  const [email, setEmail] = useState([])
  console.log(email)
  useEffect(() => {
    fetch(`https://polar-hamlet-38117.herokuapp.com/email/${email?._id}`)
      .then((res) => res.json())
      .then((data) => setEmail(data))
  })
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default EmailDetails;