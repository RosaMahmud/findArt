import axios from "axios";
import { useRef } from "react";
import "./artistRegister.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function ArtistRegister() {
        const username = useRef();
        const email = useRef();
        const password = useRef();
        const passwordAgain = useRef();
        const history = useHistory();
      
        const handleClick = async (e) => {
          e.preventDefault();
          if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
          } else {
            const user = {
              username: username.current.value,
              email: email.current.value,
              password: password.current.value,
              isClient: false,
            };
            try {
              await axios.post("/auth/register", user);
              history.push("/login");
            } catch (err) {
              console.log(err);
            }
          }
        };
    return (
        <div className="artistlogin">
        <div className="artistloginWrapper">
          <div className="artistloginLeft">
            <h3 className="loginLogo">FindArt</h3>
            <span className="loginDesc">
            Helps you in finding the artist next door.
            </span>
          </div>
          <div className="artistloginRight">
            <form className="artistloginBox" onSubmit={handleClick}>
              <input
                placeholder="Username"
                required
                ref={username}
                className="loginInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
                className="loginInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="loginInput"
                type="password"
                minLength="6"
              />
              <input
                placeholder="Password Again"
                required
                ref={passwordAgain}
                className="loginInput"
                type="password"
              />
            
              
            <div class="dropdown">
  <button class="dropbtn">Category</button>
  <div class="dropdown-content">
  <a href="#">Photographer</a>
  <a href="#">Musician</a>
  <a href="#">Painter</a>
  </div>
</div>    

              <button className="artistloginButton" type="submit">
                Sign Up
              </button>
              <Link to = "/login/Login">
              <button className="artistloginRegisterButton">Log into Account</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
    
}

export default ArtistRegister
