import "@fontsource/roboto";
import "../styles/Home.css";

export default function Banner() {
  return (
    <div className="container-banner">
      <div className="logo">
        <h1>Bem-vindo ao LevelUpForum</h1>
        <h2>
          Uma plataforma de fórum gamificada onde as discussões elevam sua
          experiência!
        </h2>
        <p>Quer saber mais?</p>
        <a href="/home#saiba-mais">CLIQUE AQUI!</a>
      </div>
    </div>
  );
}
