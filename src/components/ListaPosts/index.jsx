import styled from 'styled-components';
import React from "react";
import AcessarPosts from "../AcessarPosts";

const Posts = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;

const PostItem = styled.div`
  background-color: #D9D9D9;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: flex-end; /* Move o botão para o lado direito */
  margin-top: -50px; /* Ajuste para subir o botão */
  margin-bottom: 5px;
`;

export default function ListaPosts({ posts }) {
  if (!posts || posts.length === 0) return <p>Nenhum post encontrado.</p>;

  return (
    <Posts>
      {posts.map((post, index) => (
        <PostItem key={post.id || index}>
          <h2>{post.titulo}</h2>
          <p>{post.conteudo}</p>
          <p><strong>Autor:</strong> {post.autor}</p>
          <PostFooter>
            <AcessarPosts />
          </PostFooter>
        </PostItem>
      ))}
    </Posts>
  );
}
