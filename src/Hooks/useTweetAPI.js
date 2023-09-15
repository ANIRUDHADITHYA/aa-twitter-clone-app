import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useTweetApi = () => {
    const [cookies] = useCookies([]);
    const [error, setError] = useState(null);


    const postTweet = async (data) => {
        try {
            setError(null);

            const headers = {
                'Authorization': cookies.jwt,
                'Content-Type': 'application/json',
            };


            const tweetData = {
                first_name: data.first_name,
                last_name: data.last_name,
                author_username: data.username,
                tweet: data.tweet_data,
            };

            const response = await axios.post('http://localhost:3001/tweets/save-tweet', tweetData, { headers });

            if (response.status === 201) {
                console.log('Tweet posted successfully');
            }
        } catch (err) {
            setError(err || 'An error occurred while posting the tweet');
        }
    };

    return { postTweet, error };
};

export default useTweetApi;