import axios from "axios";
import React from "react";
import ListaPosts from "./components/ListaPosts";
import CriaPosts from "./components/CriaPosts";
import AtualizaPosts from "./components/AtualizaPosts";
import Header from './components/Header';



const baseURL = "http://localhost:3000/posts/";

export default function App() {
  const [posts, setPosts] = React.useState([]); // Começa com um array vazio

  React.useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPosts(response.data); // Armazena a lista completa
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  if (posts.length === 0) return <p>Carregando ou sem posts...</p>;

  return (
    <div>
      <Header />
      <ListaPosts posts={posts} />
      
    </div>
  );
}
