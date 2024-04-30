import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@fontsource/roboto";
import "./App.css";
import AppBar from "./components/AppBar";
import HomeScreen from "./screens/HomeScreen";
import PostsListPage from "./screens/PostsListPage";
import PostShowScreen from "./screens/PostShowScreen";
import PostInsertScreen from "./screens/PostInsertScreen";

export default function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/posts" exact component={PostsListPage} />
          <Route path="/post/:id" component={PostShowScreen} />
          <Route path="/add-post" exact component={PostInsertScreen} />
        </Switch>
      </div>
    </Router>
  );
}
