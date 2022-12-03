import Cartao from "./components/Cartao";
import Logo from "./components/Logo";
import Rodape from "./components/Rodape"
import styled from "styled-components";
import GlobalStyle from './globalStyles.js'


const cards = [
  { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
  { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
  { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
  { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]


export default function App() {
  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <Logo />

        {cards.map((item, index) => <Cartao index={index} question={item.question} answer={item.answer} />)}
        <Rodape length={cards.length}/>
      </ScreenContainer>
    </>
  );
}


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

