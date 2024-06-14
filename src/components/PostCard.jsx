import React from "react";
import { Link } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import "../styles/PostList.css";

export default function PostCard({ topic, onLike, onDislike }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <div className="card-content-inner">
            <Link to={`/post/${topic.id}`} className="card-link">
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
            </Link>
            <span
              onClick={onLike}
              style={{ cursor: "pointer", marginRight: "10px" }}
            >
              <BiLike /> {topic.likes}
            </span>
            <span onClick={onDislike} style={{ cursor: "pointer" }}>
              <BiDislike /> {topic.dislikes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
