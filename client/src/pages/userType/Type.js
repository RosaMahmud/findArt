import React from 'react'
import "./type.css";
import { Link } from "react-router-dom";

function Type() {
    return (
        <div className="type">
        <div className="typeWrapper">
          <div className="typeLeft">
            <h3 className="loginLogo">FindArt</h3>
            <span className="loginDesc">
            Slect the type of user
            </span>
          </div>
          <div className="typeRight">
            <form className="typeBox" >
              
              {/* <div className="radioButton">
                              <div className="radioBox">
                                   <input className="radioLeft" type="radio" value="client" name="userType" /> Client
                                  <input className="radioRight" type="radio" value="artist" name="userType" /> Artist
                              </div>
                          </div>
  
                              <label style={{ color: 'white' }} for="cars">Choose category:</label>
                              <select style={{ justifyContent: 'center', marginBottom: '10px'}}name="cars" id="cars">
                                  <option value="photographer">Photographer</option>
                                  <option value="musician">Musician</option>
                                  <option value="choreographer">Choreographer</option>
                                  <option value="painter">Painter</option>
                              </select> */}
                <Link to = "/artistRegister/ArtistRegister">
              <button className="artistButton" type="submit">
                Artist
              </button>
              </Link>
              <Link to = "/register/Register">
              <button className="clientButton">Client</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
    
}

export default Type
