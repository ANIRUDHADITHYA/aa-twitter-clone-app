import { useAccountContext } from "../../ContextAPI/AccountContext";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widgets from "../../Components/Widgets/Widgets";
import ProfileBar from "../../Components/ProfileBar/ProfileBar";

const Profile = () => {

    const {logout, authUser} = useAccountContext();

    return (
        <div className="home-section">
            <div className="sidebar-main-container">
                <Sidebar user={authUser} logout={logout} />
            </div>
            <div className="main-content">
                <ProfileBar user={authUser}/>
            </div>
            <div className="widgets-main-container">
                <Widgets user={authUser}/>
            </div>
        </div>
    )
}


export default Profile;