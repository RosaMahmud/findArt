import axios from "axios";
import { useRef,React, useState } from "react";
import "./artistRegister.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";



function ArtistRegister() {
        const username = useRef();
        const email = useRef();
        const password = useRef();
        const passwordAgain = useRef();
        const history = useHistory();
        const category = useRef();

        // const [items, setValue] = useState([
        //   { label: "Photographer",value: "Photographer"},
        //   { label: "Dancer", value: "Dancer" },
        //   { label: "Painter", value: "Painter" },
        //   { label: "Singer", value: "Singer" },
        //   { label: "Musician", value: "Musician" },
        //   { label: "Guitarist", value: "Guitarist" },
          
        // ]);

        const [items, setValue] = useState(
          ["Photographer", "Dancer", "Painter","Singer", "Guitarist", "Drummer", "Band", "Choreographer", "Actor"])
      
          const Add = items.map(Add => Add)

          const handleChange = (e) => { 
            console.clear(); 
            console.log((items[e.target.value])); 
            setRole(items[e.target.value]) 
              }

              const [role, setRole] = useState('Photographer')

        const handleClick = async (e) => {
          e.preventDefault();
          // setItem(items)
          if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
          } else {
            const user = {
              username: username.current.value,
              email: email.current.value,
              password: password.current.value,
              category: role,
              isClient: false
            };
            console.log("user data",user)
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

              {/* <select>
                {items.map(item => (
                  <option
                    key={item.value}
                    ref={category}
                    onChange={e=>setValue(e.currentTarget.value) }
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select> */}

            <select  
            onChange={e => handleChange(e)} >
            {
                Add.map((address, key) => <option key={key} value={key}>{address} 
                   </option>)
            }
        </select >

       
             

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