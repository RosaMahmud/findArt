import React from 'react'
import {Link} from "react-router-dom"
import "../../pages/profile/profile.css"
import "./artist_card.css"


const PF = process.env.REACT_APP_PUBLIC_FOLDER;


function ArtistCard(props) {
    const {username, category, profilePicture, isClient} = props.user;
    
    return (
        <div className="wrapper">
            <div className="content">
                {
                    (isClient===false) 
                ?<Link to={{pathname:`/profile/${username}`, state: {user: props.user}  }} style={{textDecoration:"none", color:"black"}}>
                    <img
                  src={
                    profilePicture
                      ?  profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="categoryImg"
                />
                <div className="header"><h3>{username}</h3></div>
                <div><span className="CategoryName" >{category}</span></div>
                </Link>
                : [props.user]+1
                }
            </div>
            
        </div>
    )
}

export default ArtistCard
