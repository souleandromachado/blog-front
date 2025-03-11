import React, { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/posts/";

export default function CriarPosts() {
  const [titulo, setTitulo] = useState(""); // Estado para o título
  const [conteudo, setConteudo] = useState(""); // Estado para o conteúdo
  const [autor, setAutor] = useState(""); // Estado para o autor
  const [post, setPost] = useState(null); // Estado para armazenar o post criado

  function createPost() {
    if (!titulo || !conteudo || !autor) {
      alert("Preencha todos os campos!");
      return;
    }

    axios
      .post(baseURL, { titulo, conteudo, autor }) // Enviando os dados do formulário
      .then((response) => {
        setPost(response.data); // Atualiza o estado com o novo post
        setTitulo(""); // Limpa o campo título
        setConteudo(""); // Limpa o campo conteúdo
        setAutor(""); // Limpa o campo autor
      })
      .catch((error) => console.error("Erro ao criar post:", error));
  }

  return (
    <div>
      <h1>Criar Novo Post</h1>

      {/* Campo de entrada para o título */}
      <input
        type="text"
        placeholder="Título do post"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <br />

      {/* Campo de entrada para o conteúdo */}
      <textarea
        placeholder="Conteúdo do post"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
      />
      <br />

      {/* Campo de entrada para o autor */}
      <input
        type="text"
        placeholder="Autor do post"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <br />

      {/* Botão para criar post */}
      <button onClick={createPost}>Criar Post</button>

      {/* Exibir o post criado */}
      {post && (
        <div>
          <h2>{post.titulo}</h2>
          <p>{post.conteudo}</p>
          <p><strong>Autor:</strong> {post.autor}</p>
        </div>
      )}
    </div>
  );
}