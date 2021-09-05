import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove, Star } from "@material-ui/icons";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        {/* <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>gh</b> and <b>3 other artists</b> have a birhday today.
          </span>
        </div> */}
        <img className="rightbarAd" src="assets/ad.jpg" alt="" />
        {/* <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul> */}
      </>
    );
  };

  const ProfileRightbar = () => {
    // if(!user.isClient)
    {
      return (
        <>
      
         { user.username !== currentUser.username && !user.isClient &&(
            <button className="rightbarFollowButton" onClick={handleClick}>
              {followed ? "Unfollow" : "Follow"}
              {followed ? <Remove /> : <Add />}
            </button>
          )
          }
          <h4 className="rightbarTitle">User information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">{user.city}</span>
            </div>
           
            { !user.isClient &&(
         <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">Category:</span>
         <span className="rightbarInfoValue">{user.category}</span>
         {/* <span className="rightbarInfoValue">
           {user.category === 1
             ? "Photographer"
             : user.category === 1
             ? "Dancer"
             : "-"}
         </span> */}
       </div>
          )
          }
            

            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Rating:</span>
              <br/>
              <Star htmlColor="orange" className="ratingStar" />
              <Star className="ratingStar" />
              <Star className="ratingStar" />
              <Star className="ratingStar" />
              <Star className="ratingStar" />
              
              <span className="rightbarInfoValue">{user.rating}</span>
            </div>

          </div>

          { user.username !== currentUser.username && (
             <div className="submit">
             <div className="submitWrapper">
                 <div className="submitTop">
                     <input placeholder="Leave a Review" className="submitInput"/>
                 </div>
                 <hr className="submitHr"/>
                 <div className="submitBottom">
                     <button className="submitButton">Submit</button>
                 </div>
             </div>
         </div>
          )
          }
  
        
            <br/>
          <h4 className="rightbarTitle">Following</h4>
          <div className="rightbarFollowings">
            {friends.map((friend) => (
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
              >
                <div className="rightbarFollowing">
                  <img
                    src={
                      friend.profilePicture
                        ?  friend.profilePicture
                        : PF + "person/noAvatar.png"
                    }
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">{friend.username}</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      );

    }
    return(
      null
    )
    
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
