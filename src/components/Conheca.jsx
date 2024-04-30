import React from "react";
import "../App.css";
import { BiLike, BiDislike } from "react-icons/bi"; // Import BiLike and BiDislike from react-icons/bi
import lastTopics from "../../public/data/posts.js";

export default function Posts() {
  const renderTopics = () => {
    return lastTopics.map((topic) => (
      <div className="card-container" key={topic.id}>
        <a href="#" className="card-link">
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
                <span>Palavras-chave: {topic.keywords.join(", ")}</span>
                <br />
                <span>Comentários: {topic.comments.length}</span>
                <br />
                <span>
                  <BiLike /> {topic.likes}
                </span>
                {topic.dislikes && (
                  <span>
                    <BiDislike /> {topic.dislikes}
                  </span>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>
    ));
  };

  return (
    <div className="container-conheca" id="postMaisCurtidos">
      <h1>Tópicos mais curtidos</h1>
      <div className="grid-container">{renderTopics()}</div>
      <h4>Quer ver mais? Faça o login ou se cadastre agora!</h4>
      <a href="#login" className="logo">
        Log In
      </a>
    </div>
  );
}
