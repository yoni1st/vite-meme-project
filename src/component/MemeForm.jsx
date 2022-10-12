import React from 'react'
import Mem from '../../public/meme_pic.png'
export default function MemeForm() {
  return (

    <section>
        <form className='form'>
            <div className='div--form'>
                <input type={"text"} placeholder="Enter the top meme" className='input-text-l'/>
                <input type={"text"} placeholder="Enter the bottom meme" className='input-text-r'/>
            </div>
            <input type={"submit"} value = "Get a new meme image" className='input-button'/>
        </form>

        <div className='meme-img'>
            <h2 className='meme-top'>SHUTUP</h2>
            <img src={Mem} alt='' className='img'/>
            <h2 className='meme-btm'>AND TAKE MY MONEY</h2>
        </div>
    </section>

  )
}
