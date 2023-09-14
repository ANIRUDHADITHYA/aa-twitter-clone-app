import TweetBox from "../TweetBox/TweetBox";
import "./Posts.css";


const Posts = () => {
    return (
        <div className="posts-section">
            <div className="post-header">
                <h1>Home</h1>
            </div>

            <div className="tweetbox-container">
                <TweetBox/>
            </div>
        </div>
    )
}

export default Posts;