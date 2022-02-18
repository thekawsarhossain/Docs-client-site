import Head from 'next/head'
import DocsField from "../components/Documentation/DocsField";


const documentation = () => {
  return (
    <div>
      <Head>
        <title>
          Documentation
        </title>
      </Head>
    <DocsField/>
    </div>
  );
}

export default documentation;