import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import UsersList from '../../components/usersList/UsersList';
import { Link } from "react-router-dom";
import "./category.css";


function Category({props}) {

    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  

    const searchHandler = (searchTerm) => {
       setSearchTerm(searchTerm);
       if(searchTerm !== ""){
           const newUsersList = users.filter((user) => {
              return  Object.values(user)
               .join("")
               .toLowerCase()
               .includes(searchTerm.toLowerCase())
               ;
           });
           setSearchResults(newUsersList);
       }
       else{
           setSearchResults(users);
       }
    };


    useEffect(() => {
        const getUsers = async () => {
            try {
                const userList = await axios.get("/users/getArtists");
                if(userList) setUsers(userList.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);

    

    // useEffect(()=>{

    // },[users])


    return (
        <>
            <Topbar />

            <div className="categoryContainer">


           <UsersList 
            {...props}
            users = {searchTerm.length < 1 ? users: searchResults}
            term = {searchTerm}
            searchKeyword={searchHandler}
           /> 

            </div>
        </>
    )
}

export default Category
