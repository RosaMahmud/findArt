import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const isClient = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        isClient: true,
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
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FindArt</h3>
          <span className="loginDesc">
          Helps you in finding the artist next door.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
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
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to = "/login/Login">
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
