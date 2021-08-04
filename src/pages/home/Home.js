import React from 'react'
import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

function Home() {
    return (
        //used fragments as two components can not be called like this
        <>
        <Navbar/>
        {/* put them in a container so that i can align them sidewise */}
       
        <div className ="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar />
        </div>
        

        </>
    )
}

export default Home
