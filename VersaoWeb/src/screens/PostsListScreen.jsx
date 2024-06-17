import React from "react";
import PostsList from "../components/PostsList";
import "../styles/PostList.css";

export default function PostsListScreen() {
  return (
    <div>
      <h1 id="posts">Posts List</h1>
      <PostsList />
    </div>
  );
}
