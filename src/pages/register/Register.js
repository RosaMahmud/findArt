import React from 'react'
import "./register.css"

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">FindArt</h3>
                    <span className="loginDesc">
                        Helps you in finding the artist next door.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder ="Username" className="loginInput"/>
                        <input placeholder ="Email" className="loginInput"/>
                        <input placeholder ="Password" className="loginInput"/>
                        <input placeholder ="Password Again" className="loginInput"/>
                        <div className="radioButton">
                            <div className="radioBox">
                                 <input className="radioLeft" type="radio" value="client" name="userType" /> Client
                                <input className="radioRight" type="radio" value="artist" name="userType" /> Artist
                            </div>
                        </div>

                            <label style={{ color: 'white' }} for="cars">Choose category:</label>
                            <select style={{ justifyContent: 'center', marginBottom: '10px'}}name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        <button className="loginButton">Sign Up</button>
                        <button style={{marginTop: "5px"}}className="loginRegisterButton">
                            Log into Account
                            </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
