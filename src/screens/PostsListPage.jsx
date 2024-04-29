import React, { useState, useEffect } from "react";
import PostsList from "../components/PostsList";

export default function PostsListPage() {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    // Fetch topics from the API
    fetch("http://localhost:3000/topics") // Adjust the URL according to your API endpoint
      .then((response) => response.json())
      .then((data) => setTopicList(data))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

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
      <h1>Posts List</h1>
      <PostsList
        topics={topicList}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </div>
  );
}
