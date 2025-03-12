import axios from "axios";
import React, { useEffect, useState} from "react";

const baseURL = "http://localhost:3000/posts/";

export default function AtualizaPosts() {
  const [titulo, setTitulo] = useState(""); // Estado para o título
  const [conteudo, setConteudo] = useState(""); // Estado para o conteúdo
  const [autor, setAutor] = useState(""); // Estado para o autor
  const [post, setPost] = useState(null); // Estado para armazenar o post criado

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}