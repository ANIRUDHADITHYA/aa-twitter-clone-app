import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widgets from "../../Components/Widgets/Widgets";
import { useAccountContext } from "../../ContextAPI/AccountContext";
import "./Home.css";


const Home = () => {
    const {logout, authUser} = useAccountContext();
    return (
        <div className="home-section">
            <div className="sidebar-main-container">
                <Sidebar user={authUser} logout={logout}/>
            </div>
            <div className="main-content">
                <Posts />
            </div>
            <div className="widgets-main-container">
                <Widgets />
            </div>
        </div>
    );
};


export default Home;
