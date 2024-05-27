import "@fontsource/roboto";
import "../styles/Home.css";
import Banner from "../components/Banner";
import SaibaMais from "../components/SaibaMais";
import Rodape from "../components/Rodape";
import Conheca from "../components/Conheca";

export default function HomeScreen() {
  return (
    <div className="container">
      <Banner />
      <Conheca />
      <SaibaMais />
      <Rodape />
    </div>
  );
}
