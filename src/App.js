import React from 'react'
import { Header, Footer, Tutorial, VoteCongressman } from './container'
import { Navbar } from './components'
import './App.scss'

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Tutorial />
      <VoteCongressman />
      <Footer />
    </div>
  )
}

export default App