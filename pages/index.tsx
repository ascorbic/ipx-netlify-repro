import Image from 'next/image'
import type { NextPage } from 'next'

import sampleJpg from '../assets/sample.jpg'

const Home: NextPage = () => {
  return (
    <div>
      <Image src={sampleJpg} alt="" layout='responsive' />
    </div>
  )
}

export default Home
