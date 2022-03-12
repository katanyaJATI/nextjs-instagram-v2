import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram 2.0 Katanyacode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />

      {/* Modal */}
    </div>
  )
}

export default Home
