import React from "react";

export default function ListaPosts({ posts }) { // posts vem das props
  if (!posts || posts.length === 0) return <p>Nenhum post encontrado.</p>;

  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.titulo}</h2>
          <p>{post.conteudo}</p>
          <p><strong>Autor:</strong> {post.autor}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
