import styled from 'styled-components'

const Opcoes = styled.ul`
  display: flex;
  justify-content: flex-end; /* Move os itens para a direita */
  width: 80%; /* Ocupa toda a largura */
  padding: 0;
  margin: 0;
  list-style: none
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  cursor: pointer;
  margin-left: 50px;
  margin-right: 20px;
  background-color: #439846;
  padding: 3px 50px;
  border-radius: 10px;
  color: white; /* Cor padrão do texto */
  &:hover {
    background-color: #0056b3;
  }
`

const textoOpcoes = ['SOU ALUNO', 'SOU DOCENTE']

function OpcoesHeader() {
  return(
    <Opcoes>
      { textoOpcoes.map( (texto) => (
      <Opcao><p>{texto}</p></Opcao>
      ) ) }
    </Opcoes>
  )
}

export default OpcoesHeader