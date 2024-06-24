import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ImagePickerScreen from "./ImagePickerScreen";

const Stack = createStackNavigator();

export default function PostInsertScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="add-post-form"
        component={PostInsertForm}
      ></Stack.Screen>
      <Stack.Screen
        name="add-post-image"
        component={ImagePickerScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

function PostInsertForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");

  const baseUrl =
    "https://projetodebloco-8515c-default-rtdb.asia-southeast1.firebasedatabase.app";

  const handleSubmit = async () => {
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

    try {
      const response = await fetch(`${baseUrl}/posts.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar o post.");
      }

      setMsg("Salvo com sucesso");
    } catch (error) {
      setMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar novo Post</Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Título:</Text>
          <TextInput
            style={styles.formInput}
            value={title}
            onChangeText={setTitle}
            required
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Descrição:</Text>
          <TextInput
            style={styles.formInput}
            value={description}
            onChangeText={setDescription}
            required
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Usuário:</Text>
          <TextInput
            style={styles.formInput}
            value={userName}
            onChangeText={setUserName}
            required
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Palavras-chave:</Text>
          <TextInput
            style={styles.formInput}
            value={keywords}
            onChangeText={setKeywords}
            required
          />
        </View>
        <Button
          title={loading ? "Enviando..." : "Enviar"}
          onPress={handleSubmit}
          disabled={loading}
        />
        {loading && <ActivityIndicator size="large" color="#800080" />}
        {msg && <Text>{msg}</Text>}
        <Button
          title="Capturar imagem"
          onPress={() => {
            navigation.navigate("add-post-image");
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  form: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  },
  formGroup: {
    marginBottom: 16,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: "rgba(0, 0, 0, 0.87)",
  },
  formInput: {
    width: "100%",
    padding: 12,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
  },
});
