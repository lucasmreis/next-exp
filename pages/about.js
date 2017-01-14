import React, { Component } from 'react'
import Link from 'next/prefetch'

import Header from '../components/Header'

export default class About extends Component {
  static async getInitialProps() {
    return new Promise(resolve => setTimeout(() => resolve({ aaa: 123 }), 2000))
  }

  render() {
    return (
      <div>
        <Header />
        <h1>ABOUT {this.props.aaa} !!!</h1>
        <Link href='/'><button>index</button></Link>
      </div>
    )
  }
}
