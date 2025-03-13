import styled from 'styled-components';
import OpcoesHeader from '../OpcoesHeader';

const HeaderContainer = styled.header`
  background-color: #F5E1C5;
  display: flex;
  width: 100%;  /* Garantindo que o header ocupe 100% da largura da tela */
  height: 90px;
  align-items: center;
  justify-content: space-between;
  position: fixed; /* Fixa o header no topo da tela */
  top: 0; /* Garante que ele fique no topo */
  left: 0; /* Garante que ele comece do lado esquerdo */
  margin: 0; /* Remove qualquer margem */
  padding: 0; /* Remove qualquer padding */
  box-sizing: border-box; /* Garantir que padding e bordas não afetem a largura */
  z-index: 10; /* Garante que o header fique acima de outros elementos */
`;

const Texto = styled.h2`
  margin-left: 20px;
  color: #00838F;
`;

const SearchBarContainer = styled.div`
  background-color: #00838F;
  padding: 8px;
  width: 100%; 
  display: flex;
  justify-content: flex-end;
  margin-top: 90px;  /* Garante que a barra de busca apareça abaixo do header fixo */

`;

const SearchInput = styled.input`
  width: 15%;  /* Ajuste o tamanho conforme necessário */
  padding: 15px;
  margin-right: 90px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  outline: none;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <Texto>Colégio Lumiar</Texto>
        <OpcoesHeader />
      </HeaderContainer>

      {/* Barra azul com o campo de busca */}
      <SearchBarContainer>
        <SearchInput type="text" placeholder="Buscar..." />
      </SearchBarContainer>
    </>
  );
}

export default Header;
