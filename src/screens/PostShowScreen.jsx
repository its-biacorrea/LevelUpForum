import { useState, useEffect } from "react";

export default function PostShowScreen({ match }) {
  const postId = match.params.id;

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
          <p>Palavras-chave: {topic.keywords.join(", ")}</p>
          <p>Número de likes: {topic.likes}</p>
          <p>Número de dislikes: {topic.dislikes}</p>
          <p>Número de comentários: {topic.comments.length}</p>
        </div>
      )}
    </div>
  );
}
