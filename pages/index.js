import Link from 'next/prefetch'

import Header from '../components/Header'

export default () => (
  <div>
    <Header />
    <h1>INDEX !!!</h1>
    <Link href='/about'><button>about</button></Link>
  </div>
)
