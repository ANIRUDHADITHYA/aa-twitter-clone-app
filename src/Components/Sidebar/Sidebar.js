import "./Sidebar.css";

import { ArticleOutlined, GroupAddOutlined, Home, MailOutline, MoreHoriz, NotificationsNoneOutlined, PermIdentity, Search, Twitter } from '@mui/icons-material';
import SidebarItems from "./SidebarItems";

const Sidebar = (props) => {

    console.log(props.user)
    function handleLogout () {
        props.logout()
    }
    return (
        <div className="sidebar-section">
            <Twitter className="twitter-icon" />
            <SidebarItems active Icon={Home} text="Home" />
            <SidebarItems Icon={Search} text="Explore" />
            <SidebarItems Icon={NotificationsNoneOutlined} text="Notifications" />
            <SidebarItems Icon={MailOutline} text="Message" />
            <SidebarItems Icon={ArticleOutlined} text="Lists" />
            <SidebarItems Icon={GroupAddOutlined} text="Communities" />
            <SidebarItems Icon={PermIdentity} text="Profile" />
            <SidebarItems Icon={MoreHoriz} text="More" />

            <button className="tweet-post-btn">
                Post
            </button>

            <div className="sidebar-account-card">
                <div className="profile-pic">
                    <img src="/Asserts/profile.png"/>
                </div>
                <div className="profile-details">
                    <h3>{`${props.user.first_name} ${props.user.last_name}`}</h3>
                    <p>@{props.user.username}</p>
                </div>
                <div className="logout-container">
                    <MoreHoriz />
                </div>
                <div className="tooltip-content">
                    
                    <button onClick={handleLogout}>Logout @{props.user.username}</button>
                </div>
            </div>
        </div>
    )
}



export default Sidebar;