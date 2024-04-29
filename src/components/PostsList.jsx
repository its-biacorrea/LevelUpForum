import React from "react";
import PostCard from "./PostCard";

export default function PostsList({ topics, onLike, onDislike }) {
  return (
    <div className="grid-container">
      {topics.map((topic) => (
        <PostCard
          key={topic.id}
          topic={topic}
          onLike={() => onLike(topic.id)}
          onDislike={() => onDislike(topic.id)}
        />
      ))}
    </div>
  );
}
