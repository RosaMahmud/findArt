import React from 'react'
import {Link} from "react-router-dom"
import "../../pages/profile/profile.css"
import "./artist_card.css"


function ArtistCard(props) {
    const {username, category, profilePicture, isClient} = props.user;
    
    return (
        <div className="container">
            <div className="content">
                {
                    (isClient===false) 
                ?<Link to={{pathname:`/profile/${username}`, state: {user: props.user}  }} style={{textDecoration:"none", color:"black"}}>
                <div className="header"><h2>{username}</h2></div>
                <div><h3 >{category}</h3></div>
                </Link>
                : null
                }
            </div>
            
        </div>
    )
}

export default ArtistCard
