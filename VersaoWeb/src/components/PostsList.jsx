import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import "../styles/PostList.css";

export default function PostsList() {
  const [topicList, setTopicList] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("publicationDate");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl =
    "https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app";

  useEffect(() => {
    fetch(`${baseUrl}/posts.json`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const respPosts = await response.json();
        let convertedList = convertData(respPosts);
        setTopicList(convertedList);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  function convertData(respPosts) {
    if (!respPosts) return [];
    const ids = Object.keys(respPosts || {});
    let topics = Object.values(respPosts || {});
    return topics.map((topic, i) => {
      return {
        id: ids[i],
        ...topic,
      };
    });
  }

  const updateLikesDislikes = (id, updatedTopic) => {
    fetch(`${baseUrl}/posts/${id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTopic),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update data");
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleLike = (id) => {
    setTopicList((prevTopics) =>
      prevTopics.map((topic) => {
        if (topic.id === id) {
          const updatedLikes = topic.likes + 1;
          const updatedDislikes = topic.dislikes > 0 ? topic.dislikes - 1 : 0;
          const updatedTopic = {
            ...topic,
            likes: updatedLikes,
            dislikes: updatedDislikes,
          };
          updateLikesDislikes(id, updatedTopic);
          return updatedTopic;
        }
        return topic;
      })
    );
  };

  const handleDislike = (id) => {
    setTopicList((prevTopics) =>
      prevTopics.map((topic) => {
        if (topic.id === id) {
          const updatedDislikes = topic.dislikes + 1;
          const updatedLikes = topic.likes > 0 ? topic.likes - 1 : 0;
          const updatedTopic = {
            ...topic,
            dislikes: updatedDislikes,
            likes: updatedLikes,
          };
          updateLikesDislikes(id, updatedTopic);
          return updatedTopic;
        }
        return topic;
      })
    );
  };

  const filteredTopics = topicList.filter((topic) => {
    const term = filterTerm.toLowerCase();
    return (
      topic.title.toLowerCase().includes(term) ||
      (Array.isArray(topic.keywords) &&
        topic.keywords.some((keyword) => keyword.toLowerCase().includes(term)))
    );
  });

  const sortedTopics = filteredTopics.sort((a, b) => {
    let comparison = 0;
    if (sortTerm === "publicationDate") {
      comparison = new Date(a.publicationDate) - new Date(b.publicationDate);
    } else if (sortTerm === "keywords") {
      comparison = a.keywords?.[0]?.localeCompare(b.keywords?.[0]) || 0;
    } else if (sortTerm === "mostLiked") {
      comparison = a.likes - b.likes;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className="input-container">
        <label htmlFor="inputSearch">Filtro: </label>
        <input
          value={filterTerm}
          onChange={(event) => setFilterTerm(event.target.value)}
          id="inputSearch"
          data-testid="inputSearch"
          placeholder="Buscar um post"
        />
        <label htmlFor="sortTerm">Ordenar por: </label>
        <select
          value={sortTerm}
          onChange={(event) => setSortTerm(event.target.value)}
          id="sortTerm"
        >
          <option value="publicationDate">Data de publicação</option>
          <option value="keywords">Palavra-chave</option>
          <option value="mostLiked">Mais curtidos</option>
        </select>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="asc"
              checked={sortOrder === "asc"}
              onChange={() => setSortOrder("asc")}
            />
            Ascendente
          </label>
          <label>
            <input
              type="radio"
              value="desc"
              checked={sortOrder === "desc"}
              onChange={() => setSortOrder("desc")}
            />
            Descendente
          </label>
        </div>
      </div>
      {!loading && !error && (
        <div className="grid-container">
          {sortedTopics.map((topic) => (
            <PostCard
              key={topic.id}
              topic={topic}
              onLike={() => handleLike(topic.id)}
              onDislike={() => handleDislike(topic.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
