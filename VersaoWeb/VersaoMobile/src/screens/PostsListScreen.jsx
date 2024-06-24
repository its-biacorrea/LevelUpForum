import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import PostCard from "../components/PostCard";

const PostsList = () => {
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
    <View style={{ flex: 1 }}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <View style={styles.inputContainer}>
        <Text>Filtro: </Text>
        <TextInput
          value={filterTerm}
          onChangeText={(text) => setFilterTerm(text)}
          placeholder="Buscar um post"
          style={styles.inputSearch}
        />
        <Text>Ordenar por: </Text>
        <TextInput
          value={sortTerm}
          onChangeText={(text) => setSortTerm(text)}
          placeholder="Data de publicação, Palavra-chave ou Mais curtidos"
          style={styles.sortTerm}
        />
      </View>
      {!loading && !error && (
        <ScrollView>
          {sortedTopics.map((topic) => (
            <PostCard
              key={topic.id}
              topic={topic}
              onLike={() => handleLike(topic.id)}
              onDislike={() => handleDislike(topic.id)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const PostsListScreen = () => {
  return (
    <View style={styles.containerScreen}>
      <Text style={styles.headerScreen}>Posts List</Text>
      <PostsList />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputSearch: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    width: 200,
    marginRight: 10,
  },
  sortTerm: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginLeft: 10,
    flex: 1,
  },
  containerScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  headerScreen: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default PostsListScreen;
