import React, { useRef } from 'react'
import ArtistCard from './ArtistCard';
function UsersList(props) {
    
    const inputEl = useRef("");

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
      };
    
    const renderArtistList = props.users.map((user)=>{
        return(
            <ArtistCard 
            user={user}
            key={user._id}
            />
        );
    })

    return (
        <div>
            <h2>
                Artists Lists
            </h2>

            <div className="categorySearch">
                 <input type="text" 
                 placeholder="Search categories"
                 className="prompt" 
                 value={props.term}
                 onChange={getSearchTerm}
                 ref={inputEl}
                />
                <i className="searchIcon"></i>
            </div>

            <div className="artist-list">
                {renderArtistList.length > 0
                ? renderArtistList
                : "No Artists Available"}
            
            </div>


        </div>

        
    )
}

export default UsersList
