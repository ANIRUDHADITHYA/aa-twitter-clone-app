import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import {
    ImageOutlined,
    GifBoxOutlined,
    PollOutlined,
    SentimentSatisfiedAltOutlined,
    CalendarTodayOutlined,
    LocationOnOutlined,
} from "@mui/icons-material";
import "./TweetBox.css";

const TweetBox = () => {
    const [tweetText, setTweetText] = useState("");
    const [textareaHeight, setTextareaHeight] = useState("50px");
    const isTweetButtonActive = tweetText.trim() !== "";

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
                    <img src="/Asserts/profile.png"/>
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
                        <button className={`tweetbox-btn${isTweetButtonActive ? " active" : ""}`} disabled={!isTweetButtonActive}>Post</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default TweetBox;
