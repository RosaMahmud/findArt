import React from 'react';
import "./rightbar.css";

// inner components

function Rightbar({ profile }) {

    const  HomeRightbar = () => {
        return(
         <>
            <div className ="birthdayContainer">
                <img className="birthdayImage" src="/images/birthday.png" alt=""/>
                <span className="birthdayText">
                    <b>lorium ipsum</b> and <b>2 other artists</b> have birthday today
                </span>
            </div>
            
            <img className="rightbarAd" src="/images/posts/Sunset-Sunflower.jpg" alt=""/>

              </>
        );
        
    };

    const ProfileRightbar = () => {
        return (
            <> 
            <h4 className = "rightbarTitle"> User infromation</h4>
            <div className= "rightbarInfo">
                <div className = "rightbarInfoItem">
                    <span className= "rightbarInfoKey">City:</span>
                    <span className= "rightbarInfoValue">Dhaka</span>
                </div>
                <div className = "rightbarInfoItem">
                    <span className= "rightbarInfoKey">Primary Skills:</span>
                    <span className= "rightbarInfoValue">Singing</span>
                </div>
                <div className = "rightbarInfoItem">
                    <span className= "rightbarInfoKey">Other Skills:</span>
                    <span className= "rightbarInfoValue">Photography</span>
                </div>
            </div>

            <h4 className = "rightbarTitle"> Followings</h4>
            <div className="rightbarFollowings">
                <div className= "rightbarFollowing">
                    <img src="/images/profile picture/faiza.jpg" alt="" className="rightbarFollowingImg"/>
                    <span className ="rightbarFollowingName">Mahdia Faiza</span>
                </div>
                <div className= "rightbarFollowing">
                    <img src="/images/profile picture/jamil.png" alt="" className="rightbarFollowingImg"/>
                    <span className ="rightbarFollowingName">Jamilur Rahman</span>
                </div>
                <div className= "rightbarFollowing">
                    <img src="/images/profile picture/lahm.jpg" alt="" className="rightbarFollowingImg"/>
                    <span className ="rightbarFollowingName">Sakib Raihan</span>
                </div>
                <div className= "rightbarFollowing">
                    <img src="/images/profile picture/rosa.png" alt="" className="rightbarFollowingImg"/>
                    <span className ="rightbarFollowingName">Rosa Mahmud</span>
                </div>
                <div className= "rightbarFollowing">
                    <img src="/images/profile picture/sakib.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className ="rightbarFollowingName">Lahm Raihan</span>
                </div>
                <div className= "rightbarFollowing">
                    <img src="/images/profile picture/shadman.jpg" alt="" className="rightbarFollowingImg"/>
                    <span className ="rightbarFollowingName">Shadman Al Islam</span>
                </div>
            </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}

export default Rightbar
