import Head from 'next/head'
import Login from '../components/Authentication/Login'
const login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      {/* login component called here  */}
      {/* Register is also here */}
      <Login />
    </div>
  )
}

export default login
