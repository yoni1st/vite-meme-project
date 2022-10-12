import React from 'react'

export default function Navbar() {
  return (
    <nav className='header'>
        <div className='header--logo'>
            <img src='/troll-face.png' alt='' className='logo--img'/>
            <h2 className='header--title'>Meme Generator</h2>
        </div>

        <span>
            <h4 className='header--project'>React Course - Project 3</h4>    
        </span>   
    </nav>
  )
}
