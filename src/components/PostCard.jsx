import React from "react";
import { Link } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import "../styles/PostList.css";

export default function PostCard({ topic, onLike, onDislike }) {
  return (
    <div className="card-container">
      <Link to={`/post/${topic.id}`} className="card-link">
        <div className="card">
          <div className="card-content">
            <div className="card-content-inner">
              <span className="card-title">{topic.title}</span>
              <br />
              <span className="card-description">
                {topic.description.length > 100
                  ? topic.description.substring(0, 100) + "..."
                  : topic.description}
              </span>
              <br />
              <span>Data de publicação: {topic.publicationDate}</span>
              <br />
              <span>Usuário: {topic.userName}</span>
              <br />
              <span>
                Palavras-chave:{" "}
                {Array.isArray(topic.keywords)
                  ? topic.keywords.join(", ")
                  : topic.keywords}
              </span>
              <br />
              <span onClick={onLike}>
                <BiLike /> {topic.likes}
              </span>
              {topic.dislikes && (
                <span onClick={onDislike}>
                  <BiDislike /> {topic.dislikes}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
