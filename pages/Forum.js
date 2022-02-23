import Head from 'next/head'
import ForumBody from '../components/Forum/ForumBody/ForumBody'
import ForumM from '../components/Forum/ForumM'

const Forum = () => {
  return (
    <div>
      <Head>
        <title>
          Forum
        </title>
      </Head>
      <ForumM />
    </div>
  )
}

export default Forum
