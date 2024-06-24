import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Banner = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/galaxy.gif")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logo}>
          <Text style={styles.heading}>Bem-vindo ao LevelUpForum</Text>
          <Text style={styles.subheading}>
            Uma plataforma de fórum gamificada onde as discussões elevam sua
            experiência!
          </Text>
          <Text>Quer saber mais?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("CLIQUE AQUI!")}
          >
            <Text style={styles.buttonText}>CLIQUE AQUI!</Text>
          </TouchableOpacity>
          <Text testID="banner-component">{}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const Conheca = () => {
  const lastTopics = [
    {
      id: 1,
      title: "Título do Tópico 1",
      description:
        "Descrição do tópico 1 que é bastante interessante e detalhada.",
      publicationDate: "2024-06-18",
      userName: "usuário1",
      keywords: ["React Native", "JavaScript", "Mobile"],
      comments: ["Comentário 1", "Comentário 2"],
      likes: 10,
      dislikes: 2,
    },
    {
      id: 2,
      title: "Título do Tópico 2",
      description:
        "Descrição do tópico 2 que é igualmente interessante e detalhada.",
      publicationDate: "2024-06-17",
      userName: "usuário2",
      keywords: ["React", "Web Development", "Frontend"],
      comments: ["Comentário 1"],
      likes: 15,
      dislikes: 1,
    },
    {
      id: 3,
      title: "Título do Tópico 3",
      description: "Descrição do tópico 3 que também é muito interessante.",
      publicationDate: "2024-06-16",
      userName: "usuário3",
      keywords: ["Node.js", "Backend", "API"],
      comments: [],
      likes: 5,
      dislikes: 0,
    },
  ];

  const renderTopics = () => {
    return lastTopics.map((topic) => (
      <TouchableOpacity key={topic.id} style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{topic.title}</Text>
            <Text style={styles.cardDescription}></Text>
            <Text>Data de publicação: {topic.publicationDate}</Text>
            <Text>Usuário: {topic.userName}</Text>
            <Text>Palavras-chave: {topic.keywords.join(", ")}</Text>
            <Text>Comentários: {topic.comments.length}</Text>
            <Text>
              <AiFillLike /> {topic.likes}
            </Text>
            {topic.dislikes && (
              <Text>
                <AiFillDislike /> {topic.dislikes}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.containerConheca}>
      <Text style={styles.headingConheca}>Tópicos mais curtidos</Text>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {renderTopics()}
      </ScrollView>
      <Text>Quer ver mais? Faça o login ou se cadastre agora!</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => console.log("Log In")}
      >
        <Text style={styles.buttonTextConheca}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const SaibaMais = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.containerSaibaMais}
      testID="saiba-mais"
    >
      <View style={styles.descricao}>
        <Text style={styles.headingSaibaMais}>
          Saiba Mais sobre Nossa Plataforma de Fórum Gamificada
        </Text>
        <Text>
          Bem-vindo à nossa inovadora plataforma de Fórum Gamificada! Aqui,
          mergulhe em um mundo de discussões envolventes, trocas de ideias e
          interações significativas, tudo enquanto desfruta de uma experiência
          única e recompensadora.
        </Text>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.sectionTitle}>O que é o Fórum Gamificada?</Text>
            <Text style={styles.sectionText}>
              Nosso Fórum Gamificada é mais do que apenas um espaço para
              discussões. É uma comunidade vibrante onde os usuários são
              incentivados a participar, criar e interagir de maneira ativa. Ao
              trazer elementos de gamificação para o mundo dos fóruns online,
              tornamos a experiência ainda mais cativante e gratificante.
            </Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.sectionTitle}>Como Funciona?</Text>
            <Text style={styles.sectionText}>
              Ao criar uma conta em nossa plataforma, você terá acesso a uma
              infinidade de tópicos fascinantes. A cada interação que você
              realizar, seja criando um novo tópico, comentando ou curtindo
              conteúdos, você estará acumulando pontos. Esses pontos não apenas
              refletem sua atividade na comunidade, mas também desbloqueiam
              distintivos exclusivos e prêmios emocionantes de nossos parceiros.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.sectionTitle}>O que Você Pode Fazer?</Text>
            <Text style={styles.sectionText}>
              Seja um participante ativo da nossa comunidade, compartilhando
              suas opiniões, contribuindo para discussões significativas e
              reconhecendo o conteúdo valioso de outros usuários através de
              curtidas. Além disso, explore os tópicos mais populares, veja o
              que está gerando discussões acaloradas e faça parte das conversas
              mais interessantes da internet.
            </Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.sectionTitle}>
              Recompensas e Reconhecimento
            </Text>
            <Text style={styles.sectionText}>
              Aqui, a participação não passa despercebida. Cada ação que você
              realiza é recompensada com pontos, que podem desbloquear
              distintivos exclusivos e até mesmo prêmios especiais de nossos
              parceiros. Quanto mais você se envolve, mais oportunidades você
              tem de ser reconhecido e recompensado por sua contribuição para a
              comunidade.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.sectionTitle}>Junte-se a Nós!</Text>
            <Text style={styles.sectionText}>
              Então, o que você está esperando? Junte-se a nós hoje mesmo e faça
              parte de uma comunidade dinâmica, onde suas opiniões importam e
              suas interações são valorizadas. Descubra novas ideias, conheça
              novas pessoas e mergulhe em uma experiência de fórum como nenhuma
              outra.
            </Text>
          </View>
        </View>

        <Text style={styles.finalText}>
          Junte-se à nossa plataforma de Fórum Gamificada e transforme suas
          conversas online em uma jornada emocionante e gratificante!
        </Text>
      </View>
    </ScrollView>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerHome} testID="container">
      <Banner />
      <Conheca />
      <SaibaMais />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 128,
  },
  logo: {
    maxWidth: 320,
    textAlign: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  subheading: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#800080",
    fontWeight: "bold",
  },
  containerConheca: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 128,
    alignItems: "center",
  },
  headingConheca: {
    fontSize: 32,
    color: "#800080",
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    maxWidth: 640,
    marginVertical: 20,
  },
  cardContainer: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: "#800080",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#800080",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonTextConheca: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  containerSaibaMais: {
    backgroundColor: "#c12ac1",
    paddingVertical: 128,
    alignItems: "center",
  },
  descricao: {
    maxWidth: 720,
    textAlign: "center",
  },
  headingSaibaMais: {
    fontSize: 48,
    color: "#ffffff",
    marginBottom: 32,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  sectionLeft: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  sectionRight: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#c12ac1",
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
  },
  finalText: {
    fontSize: 18,
    color: "#ffffff",
    marginTop: 32,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});

export default HomeScreen;
