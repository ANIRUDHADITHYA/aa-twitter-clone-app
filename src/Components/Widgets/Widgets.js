import { useState, useEffect } from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import axios from "axios";
import { Link } from "react-router-dom";

const Widgets = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [usernames, setUsernames] = useState([]);

    useEffect(() => {
        const fetchUsernames = async () => {
            try {
                const response = await axios.get("http://localhost:3001/user/get-usernames");
                const extractedUsernames = response.data.map((user) => user.username);
                setUsernames(extractedUsernames);
                console.log(extractedUsernames)
            } catch (error) {
                console.error("Error fetching usernames:", error);
            }
        };
        fetchUsernames();
    }, []);

    

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredSuggestions = usernames.filter((username) =>
            username.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    return (
        <div className="widgets-section">
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search for users..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {searchQuery && (
                <div className="user-suggestions">
                    {suggestions.map((username) => (
                        <Link to={`/${username}`} src={username}><div
                            className="suggestion"
                            key={username}
                            onClick={() => setSearchQuery(username)}
                        >
                            @{username}
                        </div>
                        </Link> 
                    ))}
                </div>
            )}
            <TwitterTimelineEmbed
                className="widgets-twitter"
                sourceType="profile"
                screenName="IvyKids1"
                options={{ height: 400 }}
            />
        </div>
    );
};

export default Widgets;
