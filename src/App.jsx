import React from 'react'
import Center from './components/Center/Center'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='app-container'>
      <div className="app-wrapper">
          <Header/>
          <Center />
          <Footer />  
      </div>
    </div>
  )
}

export default App