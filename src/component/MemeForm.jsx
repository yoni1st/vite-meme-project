import React, {useState} from 'react'
import Mem from '/meme_pic.png'
import memeData from '../../memesData'

export default function MemeForm() {

  // function handleClick (e) {
  //   e.preventDefault();
  
  //   let topText = document.getElementById("memTop");
  //   let btmText = document.getElementById("memBtm");

  //   let topImg = document.getElementById("imgTop");
  //   let btmImg = document.getElementById("imgBtm");
    
  //   if((topText.value === '') && (btmText.value === '')) {console.log("first type a text!");}
  //   else {
  //     topImg.value = topText.value;
  //     btmImg.value = btmText.value;
  //   }

  // }

  // let url
  // function getMemeImage(e) {
  //   e.preventDefault();
  //   const memeArray = memeData.data.memes
  //   const randomNumber = Math.floor(Math.random() * memeArray.length)
  //   url = memeArray[randomNumber].url
  //   console.log(url)
  // }

  const memeArray = memeData.data.memes
  const randomNumber = Math.floor(Math.random() * memeArray.length)

  const [memeItems, setMeme] = useState (memeArray)
  const [allMemeImages, setItems] = useState ("")
  function setMemeImg(e){
    e.preventDefault();
    setItems(memeArray[randomNumber].url)
  }
  
  return (
    <section>
        <form className='form'>
            <div className='div--form'>
                <input type={"text"} placeholder="Enter the top meme" className='input-text-l' id='memTop' />
                <input type={"text"} placeholder="Enter the bottom meme" className='input-text-r' id='memBtm'/>
            </div>
            <button onClick={setMemeImg} className='input-button'>
              Get a new meme image
            </button>
        </form>
        
        <div className='meme-img'>
            <h2 className='meme-top' id='imgTop'>SHUTUP</h2>
            <img id='img' src={allMemeImages} alt='' className='img'/>
            <h2 className='meme-btm' id='imgBtm'>AND TAKE MY MONEY</h2>
        </div>

    </section>

  )
}
