import "@fontsource/roboto";
import "../App.css";
import Banner from "../components/Banner";
import SaibaMais from "../components/SaibaMais";
import Rodape from "../components/Rodape";

export default function HomeScreen() {
  return (
    <div className="container">
      <Banner />
      <SaibaMais />
      <Rodape />
    </div>
  );
}
