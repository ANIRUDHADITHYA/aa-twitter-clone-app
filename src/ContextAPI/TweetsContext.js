import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const TweetsContext = createContext();

export function TweetsContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios.get("http://localhost:3001/tweets/all");
        const sortedTweets = response.data.sort((a, b) => a.timestamp - b.timestamp);
        const reversedTweets = sortedTweets.reverse();
        setTweets(reversedTweets);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };
    getTweets();
  }, []);

  return <TweetsContext.Provider value={{ tweets }}>{children}</TweetsContext.Provider>;
}

export function useTweetsContext() {
  return useContext(TweetsContext);
}
