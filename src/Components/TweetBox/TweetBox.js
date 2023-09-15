import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {
    ImageOutlined,
    GifBoxOutlined,
    PollOutlined,
    SentimentSatisfiedAltOutlined,
    CalendarTodayOutlined,
    LocationOnOutlined,
} from "@mui/icons-material";
import "./TweetBox.css";
import useTweetApi from "../../Hooks/useTweetAPI";

const TweetBox = (props) => {
    const [tweetText, setTweetText] = useState("");
    const [textareaHeight, setTextareaHeight] = useState("50px");
    const isTweetButtonActive = tweetText.trim() !== "";

    const { postTweet, error } = useTweetApi();



    function handlePost(e) {
        e.preventDefault()
        const data = {
            ...props.user,
            tweet_data: tweetText,
        }
        if (isTweetButtonActive) {
            postTweet(data).then(() => {
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    if (error) {
        console.log(error)
    }

    const handleTextareaKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const textarea = e.target;
            const newHeight = Math.min(textarea.scrollHeight, 100);
            setTextareaHeight(newHeight + "px");
            setTweetText((prevText) => prevText + "\n");
        }
    };
    return (
        <div className="tweetbox">
            <form className="tweetbox-form">
                <div className="profile-pic">
                    <img src="/Asserts/profile.png" />
                </div>
                <div className="tweetbox-form-field">
                    <div className="tweetbox-input">
                        <textarea
                            type="text"
                            placeholder="What's happening?"
                            style={{ height: textareaHeight }}
                            value={tweetText}
                            onChange={(e) => setTweetText(e.target.value)}
                            onKeyDown={handleTextareaKeyDown}
                        />
                    </div>
                    <div className="tweetbox-input">
                        <div className="tweetbox-icons">
                            <ImageOutlined className="tweetbox-icon" />
                            <GifBoxOutlined className="tweetbox-icon" />
                            <PollOutlined className="tweetbox-icon" />
                            <SentimentSatisfiedAltOutlined className="tweetbox-icon" />
                            <CalendarTodayOutlined className="tweetbox-icon" />
                            <LocationOnOutlined className="tweetbox-icon" />
                        </div>
                        <button className={`tweetbox-btn${isTweetButtonActive ? " active" : ""}`} disabled={!isTweetButtonActive} onClick={handlePost}>Post</button>
                    </div>
                </div>

            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default TweetBox;
