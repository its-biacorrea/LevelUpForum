import express from "express";
import topics from "./posts.js";
const app = express();

const port = 3000;

app.get("/topics", (req, res) => {
  res.json(topics);
});

app.get("/lastTopics", (req, res) => {
  res.json(topics.lastTopics);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
