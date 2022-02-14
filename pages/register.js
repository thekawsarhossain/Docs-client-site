import Head from 'next/head'
import Register from '../components/Authentication/Register'

const register = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <Register />
    </div>
  )
}

export default register
