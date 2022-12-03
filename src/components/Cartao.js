import styled from "styled-components"
import play from "../assets/img/seta_play.png"
import certo from "../assets/img/icone_certo.png"
import quase from "../assets/img/icone_quase.png"
import errado from "../assets/img/icone_erro.png"
import flip from "../assets/img/seta_virar.png"
import React from "react"

export default function Cartao({ index, question, answer, setConcluidos, concluidos}) {
    /* 0 para pergunta fechada, 1 aberta e 2 para resposta*/
    const [estado, setEstado] = React.useState(0) 

    const [resultadoBotao, setResultadoBotao] = React.useState("#333333")
    const [icone, setIcone] = React.useState(play)

    const [dataTeste, setDataTeste] = React.useState("play-btn")
    function Blank(){

    }
    function cliqueResposta(resultado){
        setEstado(0)
        setConcluidos (concluidos + 1);
        setResultadoBotao(resultado)
        if(resultado === "#FF3030"){
            setIcone(errado)
            setDataTeste("no-icon")
        }else if(resultado === "#FF922E"){
            setIcone(quase)
            setDataTeste("partial-icon")
        } else{
            setIcone(certo)
            setDataTeste("zap-icon")
        }
        
    }
    return (
        <>
            <PerguntaFechada estado={estado} resultadoBotao={resultadoBotao} data-test="flashcard">
                <p data-test="flashcard-text">Pergunta {index + 1}</p>
                <img 
                src={icone} 
                alt="icon" 
                data-test={dataTeste}
                onClick={resultadoBotao === "#333333"? () => setEstado(1):Blank()}
                />

            </PerguntaFechada>

            <PerguntaAberta estado={estado} data-test="flashcard">
                <p data-test="flashcard-text">{question}</p>
                <img src={flip} alt="flip" data-test="turn-btn" onClick={() => setEstado(2)}/>
            </PerguntaAberta>

            <RespostaAberta estado={estado} data-test="flashcard">
                <p data-test="flashcard-text">{answer}</p>
                <ContainerButoes>
                    <button data-test="no-btn" onClick={() => cliqueResposta("#FF3030")}>Não lembrei</button>
                    <button data-test="partial-btn" onClick={() => cliqueResposta("#FF922E")}>Quase não lembrei</button>
                    <button data-test="zap-btn" onClick={() => cliqueResposta("#2FBE34")}>Zap!</button>
                </ContainerButoes>

            </RespostaAberta>
        </>

    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.estado === 0?'flex':'none'};
    align-items: center;
    justify-content: space-between;
    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.resultadoBotao};
    text-decoration: ${props => props.resultadoBotao === "#333333" ?'none':'line-through' };
    }
`

const PerguntaAberta = styled.div`
    width: 310px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => props.estado === 1?'flex':'none'};;
    flex-direction: column;
    justify-content: space-between;

    img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    }

    p{
        margin-bottom: 20px;
    }
`

const RespostaAberta = styled.div`
    width: 310px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => props.estado === 2?'flex':'none'};
    flex-direction: column;
    justify-content: space-between;


    p{
        margin-bottom: 20px;
    }
`

const ContainerButoes = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 286px;
    justify-content: space-between;
    margin: 20px;
    button{
    box-sizing: border-box;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: none;
    padding:5px;
    height: 40px;
    margin-right: 8px;
    width: 120px;
    }
    button:nth-child(1){
    background-color: #FF3030;
    }
    button:nth-child(2){
    background-color: #FF922E;
    }
    button:nth-child(3){
    background-color: #2FBE34;
    }
`