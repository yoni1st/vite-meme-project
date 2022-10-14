import React from 'react'
import user from '../../public/user.png'
import Star from './Star'

export default function Profile() {

    const [contact, setContact] = React.useState({
        firstName: "Jhon",
        lastName: "Doe",
        phone: "+ (719) 555-1212",
        email: "itsrealname@gmail.com",
        isFavorite: false
    })
    
    function toggleFav(e) {
        e.preventDefault();
        // var image = document.getElementById('article-fav');
        // if (image.src.match(emptyStar)) image.src = `${fillStar}`;
        // else image.src = `${emptyStar}`;
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    
  return (
    <main>
        <article className='article'>
            <img src={user} alt='' className='article--img'/>
            <div className='article--info'>
                <Star isFilled = {contact.isFavorite} handleClick = {toggleFav}/>
                <h2 className='article--name'>{contact.firstName} {contact.lastName}</h2>
                <p className='article--contact'>{contact.phone}</p>
                <p className='article--contact'>{contact.email}</p>
            </div>
        </article>
    </main>
  )
}
