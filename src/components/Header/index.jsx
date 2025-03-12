import styled from 'styled-components';
import OpcoesHeader from '../OpcoesHeader';

const HeaderContainer = styled.header`
  background-color: #F5E1C5;
  display: flex;
  width: 100vw;
  height: 90px;
  align-items: center;
`
const Texto = styled.h2`
  margin-left: 20px;
  color: #00838F;
`

function header() {
  return(
  <HeaderContainer>
    <Texto>
      <h2>Colégio Lumiar</h2>
    </Texto>
    <OpcoesHeader />
  </HeaderContainer>
  )
}
export default header