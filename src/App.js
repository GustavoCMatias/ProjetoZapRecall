import Cartao from "./components/Cartao";
import Logo from "./components/Logo";
import Rodape from "./components/Rodape"
import styled from "styled-components";

function App() {
  return (
    <ScreenContainer>
      <Logo/>
      <Cartao/>
      <Rodape/>
    </ScreenContainer>
  );
}

export default App;
const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

