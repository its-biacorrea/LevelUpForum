import "@fontsource/roboto";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import AppBar from "./components/AppBar";
import PostsListPage from "./screens/PostsListPage";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TopicDetailScreen from "./screens/TopicDetailScreen";
import RankingScreen from "./screens/RankingScreen";

export default function App() {
  return (
    <div>
      <AppBar />
      <HomeScreen />
      {/*<PostsListPage />
      <LoginScreen />
      <ProfileScreen user="kkkkk" />
      <TopicDetailScreen user="kkkkk" />
  <RankingScreen user="kkkkk" />*/}
    </div>
  );
}
