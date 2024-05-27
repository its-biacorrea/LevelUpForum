import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import "../styles/PostList.css";

export default function PostsList() {
  const [topicList, setTopicList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl =
      "https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app";

    fetch(`${baseUrl}/topics.json`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const respPosts = await response.json();
        let convertedList = convertData(respPosts);
        setTopicList(convertedList);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  function convertData(respPosts) {
    if (!respPosts) return []; // Check if respPosts is null or undefined
    const ids = Object.keys(respPosts || {});
    let topics = Object.values(respPosts || {});
    return topics.map((topic, i) => {
      return {
        id: ids[i],
        ...topic,
      };
    });
  }

  const handleLike = (id) => {
    setTopicList((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id
          ? { ...topic, likes: topic.likes + 1, dislikes: topic.dislikes - 1 }
          : topic
      )
    );
  };

  const handleDislike = (id) => {
    setTopicList((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id
          ? { ...topic, dislikes: topic.dislikes + 1, likes: topic.likes - 1 }
          : topic
      )
    );
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div className="grid-container">
          {topicList.map((topic) => (
            <PostCard
              key={topic.id}
              topic={topic}
              onLike={() => handleLike(topic.id)}
              onDislike={() => handleDislike(topic.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
