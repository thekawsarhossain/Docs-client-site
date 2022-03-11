import Head from 'next/head'
import Login from '../components/Authentication/Login'
const login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      {/* login component called here  */}
      {/* there is also register page */}
      <Login />
    </div>
  )
}

export default login
