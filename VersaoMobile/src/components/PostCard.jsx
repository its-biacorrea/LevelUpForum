import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useNavigation } from "@react-navigation/native";

const PostCard = ({ topic, onLike, onDislike }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("post", { id: topic.id });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{topic.title}</Text>
          <Text style={styles.cardDescription}>{topic.description}</Text>
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity style={styles.button} onPress={onLike}>
            <Text>
              <AiFillLike />
              {topic.likes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDislike}>
            <Text>
              <AiFillDislike />
              {topic.dislikes}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  card: {
    padding: 10,
  },
  cardContent: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: "#800080",
    marginBottom: 3.2,
  },
  cardDescription: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.54)",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostCard;
