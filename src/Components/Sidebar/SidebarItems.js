import "./Sidebar.css";


const SidebarItems = (props) => {

    const {text, Icon, active} = props;

    return (
        <div className={`sidebar-item ${active && "sidebar-item-active"}`}>
            <Icon className="twitter-sub-icons"/>
            <h2>{text}</h2>
        </div>
    )
}


export default SidebarItems;