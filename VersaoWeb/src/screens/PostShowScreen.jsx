import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/PostList.css";

export default function PostShowScreen() {
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const baseUrl =
    "https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app";

  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) {
      setError("Post ID is not defined");
      setLoading(false);
      return;
    }

    fetch(`${baseUrl}/posts/${postId}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        if (typeof data.keywords === "string") {
          data.keywords = data.keywords.split(", ");
        }
        setTopic(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [postId]);

  function removePost() {
    fetch(`${baseUrl}/posts/${postId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete post");
        }
        setTopic(null);
        navigate("/");
        alert("Excluído com sucesso!!");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {topic && (
        <div>
          <h1>{topic.title}</h1>
          <p>Descrição: {topic.description}</p>
          <p>Data de publicação: {topic.publicationDate}</p>
          <p>Usuário: {topic.userName}</p>
          <p>
            Palavras-chave:{" "}
            {Array.isArray(topic.keywords)
              ? topic.keywords.join(", ")
              : topic.keywords}
          </p>
          <p>Número de likes: {topic.likes}</p>
          <p>Número de dislikes: {topic.dislikes}</p>
          <p>
            Número de comentários: {topic.comments ? topic.comments.length : 0}
          </p>
          <button onClick={removePost}>Excluir</button>
        </div>
      )}
    </div>
  );
}
