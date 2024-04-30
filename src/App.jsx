import "@fontsource/roboto";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import AppBar from "./components/AppBar";
import PostsListPage from "./screens/PostsListPage";
import PostInsertScreen from "./screens/PostInsertScreen";

export default function App() {
  return (
    <div>
      <AppBar />
      <HomeScreen />
      <PostsListPage />
      <PostInsertScreen />
      {/*<LoginScreen />
      <ProfileScreen user="kkkkk" />
      <TopicDetailScreen user="kkkkk" />
  <RankingScreen user="kkkkk" />*/}
    </div>
  );
}
