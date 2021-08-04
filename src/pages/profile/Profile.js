import React from 'react'
import "./profile.css"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"


function Profile() {
    return (
        <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img 
                className="profileCoverImg"
                 src ="/images/cover photo/life-cycle-facebook-cover.jpg"
                  alt=""/>

                <img 
                className="profileUserImg" 
                src ="/images/profile picture/fairuz.jpg" 
                alt=""/>
        
        </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Fairuz Humaira</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
