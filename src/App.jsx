import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import MemeForm from './component/MemeForm'
import Profile from './component/Profile'

function App() {

  return (
    <div className="App">
      <Navbar />
      
      {/* <MemeForm /> */}
      
      <Profile />
    </div>
  )
}

export default App
