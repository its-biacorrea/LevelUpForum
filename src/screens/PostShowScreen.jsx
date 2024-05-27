import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostShowScreen() {
  const { id: postId } = useParams();
  const baseUrl =
    "https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app";

  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
          <p>Número de comentários: {topic.comments.length}</p>
        </div>
      )}
    </div>
  );
}
