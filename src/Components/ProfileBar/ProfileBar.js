import { useParams } from "react-router-dom";
import { useTweetsContext } from "../../ContextAPI/TweetsContext";
import "./ProfileBar.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileBar = (props) => {

    const { tweets } = useTweetsContext();
    const { username } = useParams(); 
    const [userData, setUserData] = useState(null);
    const filteredTweets = tweets.filter((tweet) => tweet.author_username === username);
    console.log(userData)

    useEffect(() => {
        const getUser = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/user/${username}`);
              setUserData(response.data);
            } catch (error) {
              console.error("Error fetching tweets:", error);
            }
          };
          getUser();
      }, [username]);

      if (!userData) {
        return <div className="loaderIcon" style={{ background: "#f8f8f8", minHeight: "100vh" }}>
        <img src="/Asserts/loader'" alt="loader" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }}></img>
    </div>
      }
    return (
        <div className="profile-section">
            <div className="profile-conatiner">
                <div className="profile-header">
                    <h1>{`${userData.first_name} ${userData.last_name}`}</h1>
                    <p>@{userData.username}</p>
                </div>
                <div className="profile-images-conatiner">
                    <div className="profile-cover">
                        <img src="/Asserts/cover.jpeg"></img>
                    </div>
                    <div className="profile-main-container">
                        <div className="profile-img">
                            <img src="/Asserts/profile.png"></img>
                        </div>
                        {props.user.username !== username && <button className="profile-follow-btn">Follow</button>}
                    </div>
                </div>
                <div className="profile-details-container">
                    <h2>{`${userData.first_name} ${userData.last_name}`}</h2>
                    <h3>@{userData.username}</h3>
                </div>
                <div className="profile-follows">
                    <h4>{userData.following.length - 1} <span>Following</span></h4>
                    <h4>{userData.followers.length - 1} <span>Followers</span></h4>
                </div>
                <h4 className="profile-posts">Your Posts</h4>
            </div>
            {filteredTweets &&
                filteredTweets.map((data, index) => {
                    const tweetDate = new Date(data.timestamp).getTime();
                    const currentDate = Date.now();
                    const timeDifference = currentDate - tweetDate;

                    let displayTime = "";

                    if (timeDifference >= 3600000) {
                        const hours = Math.floor(timeDifference / 3600000);
                        displayTime = `${hours}h`;
                    } else if (timeDifference >= 60000) {
                        const minutes = Math.floor(timeDifference / 60000);
                        displayTime = `${minutes}m`;
                    } else {
                        const seconds = Math.floor(timeDifference / 1000);
                        displayTime = `${seconds}s`;
                    }

                    return (
                        <div className="tweet-feeds" key={index}>
                            <div className="tweet-header">
                                <div className="profile-pic">
                                    <img src="/Asserts/profile.png" alt="Profile" />
                                </div>
                                <h3>{`${data.first_name} ${data.last_name}`}</h3>
                                <h4>{props.user.username === username ? "you tweeted this" : `@${data.author_username} tweeted this`}</h4>
                                <h4>{displayTime} ago</h4>
                            </div>
                            <div className="tweet-body">
                                <p>{data.tweet} ago</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}

export default ProfileBar;