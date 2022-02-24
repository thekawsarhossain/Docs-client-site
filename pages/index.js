import Head from 'next/head'
import HomePage from '../components/Home/Home/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <HomePage />
    </>
  )
}
