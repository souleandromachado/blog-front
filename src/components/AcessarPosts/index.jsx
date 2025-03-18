import styled from 'styled-components';

const Botao = styled.button`
  background-color: #439846;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function AcessarPosts() {
  const acessarNovaPagina = () => {
    window.location.href = "http://www.google.com.br"; // Altere para a rota desejada
  };

  return (
    <Botao onClick={acessarNovaPagina}>
      Acessar Post
    </Botao>
  );
}
