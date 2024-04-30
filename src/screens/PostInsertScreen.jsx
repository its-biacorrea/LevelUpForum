import { useState } from "react";
import "../App.css";

export default function PostInsertScreen() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");

  const baseUrl =
    "https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app";

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const currentDate = `${dd}/${mm}/${yyyy}`;

    const topic = {
      title,
      publicationDate: currentDate,
      userName,
      keywords,
      description,
      comments: [],
      likes: 0,
      dislikes: 0,
    };

    fetch(`${baseUrl}/topics.json`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(topic),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao adicionar o post.");
        }
        setMsg("Salvo com sucesso");
      })
      .catch((error) => setMsg(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <h1 id="addPost">Adicionar novo Post</h1>
      <div className="container-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="title">
              Título:
            </label>
            <input
              type="text"
              id="title"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="description">
              Descrição:
            </label>
            <input
              type="text"
              id="description"
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="userName">
              Usuário:
            </label>
            <input
              type="text"
              id="userName"
              className="form-input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="keywords">
              Palavras-chave:
            </label>
            <input
              type="text"
              id="keywords"
              className="form-input"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
