import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostShowScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  const fetchPostDetails = async () => {
    try {
      const response = await fetch(
        `https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch post details");
      }

      const postData = await response.json();
      setPost(postData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  const deletePost = async () => {
    try {
      const response = await fetch(
        `https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      navigation.navigate("posts");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (loading) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  if (error) {
    return <Text style={styles.error}>Erro: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.text}>Descrição: {post.description}</Text>
      <Text style={styles.text}>
        Data de Publicação: {post.publicationDate}
      </Text>
      <Text style={styles.text}>Usuário: {post.userName}</Text>
      <Text style={styles.text}>Likes: {post.likes}</Text>
      <Text style={styles.text}>Dislikes: {post.dislikes}</Text>
      <TouchableOpacity onPress={deletePost} style={styles.button}>
        <Text style={styles.buttonText}>Excluir Post</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "red",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#800080",
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default PostShowScreen;
