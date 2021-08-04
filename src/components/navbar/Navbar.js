import React from 'react'
import "./navbar.css"
import {Search,Person, Chat, Notifications} from "@material-ui/icons"

function navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">FindArt</span>
            </div>

            <div className="dropbox">
            
            <label style={{color:'white'}}for="cars">Choose category:</label>
         <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
  </select>
 

            </div>
            <div className="navbarCenter">

                <div className="searchbar">
                    <Search className="searchIcon"/>
                        <input placeholder="Search for Artists" className="searchInput"></input>
                </div>
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person/>
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat/>
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications/>
                        <span className="navbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/images/profile picture/2213424.jpg" alt="" className="navbarImg"/>
            </div>
        </div>
    )
}

export default navbar
