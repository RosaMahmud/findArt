import "./topbar.css";
import { Search, Person, Chat, Notifications, ExitToApp, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FindArt</span>
        </Link>
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


      <div className="topbarCenter">
        
     
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for artists"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <Link to = "/edit/EditProfile" style={{ textDecoration: "none" }}>
          <span className="topbarLink">Edit Profile</span>
         </Link>
           <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
          <span className="topbarLink">Profile</span>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Link to={`/profile/${user.username}`} style={{ color: "white" }}>
            <Person />
            </Link>
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
           <div className="topbarIconItem">
           <Link to = "/edit/EditProfile"style={{ color: "white" }}>
            <Edit />
            </Link>
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
         
        </div>
        <ExitToApp/>
        
      </div>
    </div>
  );
}
