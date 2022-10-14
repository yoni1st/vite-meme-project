import React from 'react'
import emptyStar from '../../public/star-empty.png'
import fillStar from '../../public/star-filled.png'

export default function star(props) {
  const starIcon = props.isFilled ? `${fillStar}` : `${emptyStar}`;
  return (
    <img id='article-fav' src={starIcon} alt='' className='article--fav' onClick={props.handleClick}/>

  )
}
