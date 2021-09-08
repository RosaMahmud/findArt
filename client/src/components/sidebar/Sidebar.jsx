import "./sidebar.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import {
  RssFeed,
  Chat,
  LiveTv,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";



export default function Sidebar() {

  const { user } = useContext(AuthContext);
  
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li> */}

          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Inbox</span>
          </li>

          { (!user.isClient) && (
           <li className="sidebarListItem">
           <LiveTv className="sidebarIcon" />
           <span className="sidebarListItemText">Go Live</span>
         </li>
          )
          }

          
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Upcoming Events</span>
          </li>
        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
