import "./topbar.css";
import { Public, Notifications, ExitToApp, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(user.profilePicture);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FindArt</span>
        </Link>
      </div>

      <div className="topbarCenter">
      <div className="dropbox">
      <Link to = "/category/Category"style={{ color: "white",  textDecoration: "none"  }}>
      <span className="categories">Discover</span>
      <Public fontSize="small"/>
      </Link>
            </div>
    </div>
{/* 
      <div className="topbarCenter">
        
     
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for artists"
            className="searchInput"
          />
        </div>
      </div> */}
      <div className="topbarRight">
        <div className="topbarLinks">
        
         
        </div>
        <div className="topbarIcons">
          {/* <div className="topbarIconItem">
          <Link to={`/profile/${user.username}`} style={{ color: "white" }}>
            <Person />
            </Link>
            <span className="topbarIconBadge">1</span>
          </div> */}
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
        <Link to={`/profile/${user.username}`}>
        {user.profilePicture
                    ?   <img
                    className="postProfileImg"
                    src={PF + user.profilePicture}
                    alt=""
                  /> 
                  :
                  <img
                    className="postProfileImg"
                    src={PF + "person/noAvatar.png"}
                    alt=""
                  /> 

                   
        }       
              {/* <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ?   user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              /> */}
            </Link>
        
      </div>
      {/* <div className="topbarIconItem">
            <ExitToApp />
       
          </div> */}
    </div>
  );
}
