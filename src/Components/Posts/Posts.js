import { Link } from "react-router-dom";
import { useTweetsContext } from "../../ContextAPI/TweetsContext";
import TweetBox from "../TweetBox/TweetBox";
import "./Posts.css";


const Posts = (props) => {

    const { tweets } = useTweetsContext();

    return (
        <div className="posts-section">
            <div className="post-header">
                <h1>Home</h1>
            </div>

            <div className="tweetbox-container">
                <TweetBox user={props.user} />
            </div>


            {tweets &&
                tweets.map((data, index) => {
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
                                <Link to={`/${data.author_username}`}><h4>@{data.author_username}</h4></Link>
                                <h4>{displayTime} ago</h4>
                            </div>
                            <div className="tweet-body">
                                <p>{data.tweet}</p>
                            </div>
                        </div>
                    );
                })}

        </div>
    )
}

export default Posts;