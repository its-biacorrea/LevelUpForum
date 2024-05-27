import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@fontsource/roboto";
import "./styles/App.css";
import AppBar from "./components/AppBar";
import HomeScreen from "./screens/HomeScreen";
import PostsListScreen from "./screens/PostsListScreen";
import PostShowScreen from "./screens/PostShowScreen";
import PostInsertScreen from "./screens/PostInsertScreen";

export default function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/posts" exact component={PostsListScreen} />
          <Route path="/post/:id" component={PostShowScreen} />
          <Route path="/add-post" exact component={PostInsertScreen} />
        </Switch>
      </div>
    </Router>
  );
}
