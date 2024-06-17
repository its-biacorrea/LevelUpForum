import "@fontsource/roboto";
import "../styles/Home.css";
import Banner from "../components/Banner";
import SaibaMais from "../components/SaibaMais";
import Conheca from "../components/Conheca";

export default function HomeScreen() {
  return (
    <div data-cy="container" className="container">
      <Banner />
      <Conheca />
      <SaibaMais />
    </div>
  );
}
