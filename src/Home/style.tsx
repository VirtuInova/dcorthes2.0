import React, { useState } from "react";
import {bg01, bg02, catalogo, hero, hero2, time} from "../assets"
import churrascoListOvine from '../assets/Cortes/Churrasco/Ovine'
import refeicaoOvine from '../assets/Cortes/Refeicao/Ovinos'
import lanche from '../assets/Cortes/Lanche'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';

type Lista = {
    nome: string
    src: string
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


export function Container (){
    const bg1 = `url(${bg01})`; 
    const bg2 = `url(${bg02})`;
    const h01 = `url(${hero})`;
    const h02 = `url(${hero2})`;

    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    
    return (
        <>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >  
                <div className="flex w-[90%] justify-center mt-[2vw]">
                    <h2 className="text-black text-[2vw]">Entre em contato com a D'Corthes</h2>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div id="info" className="flex-wrap w-[50%]">
                            <input placeholder="Nome" className="w-[50%] text-[1vw] px-[2vw] mr-[2vw] mb-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300"></input>
                            <input placeholder="Celular" className="w-[26%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="CPF" className="w-[20%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="Cidade" className="w-[20%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="Tipo de negócio" className="w-[30%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="E-mail" className="w-[44%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <button className="w-[30%] bg-black h-[3vw]"><h1 className="text-[1vw]">Cadastrar</h1></button>
                    </div>
                </div>
                
            </Modal>

            <div className="w-full  bg-[white]" style={{alignItems:"center"}}>
                <div className={`w-full h-[30vw] items-center flex px-[10vw]`} style={{backgroundImage:h01, backgroundSize: 'cover'}}>
                    <h1 className="text-center text-[2vw] w-[35%]">Bem vindo ao mundo de <b>excelência</b> no agro de corte de carnes!</h1>
                </div>
                <div className={`w-full h-[30vw] flex justify-center items-center`} style={{backgroundImage:h02, backgroundSize: 'cover'}}>
                            <div className="w-[25vw] h-[25vw] bg-white rounded-full flex items-center justify-center">
                                <div>
                                    <div className="flex justify-center mb-[10%]" >
                                        <h1 className="text-black text-center text-[1.8vw] w-[70%]"><b>O corte perfeito</b> para seu prato de suíno ou ovino!</h1>
                                    </div>
                                    <button onClick={()=>{window.open(catalogo)}} className="bg-black w-[18vw] h-[3vw]"><h2 className="text-[0.8vw]">CATÁLOGO DE CORTES</h2></button>
                                </div>
                            </div>
                </div>
                <div className="px-[10vw] mt-[5%]">
                    <div className="w-[30%]">
                    <h2 className="text-black text-left  text-[1.8vw] ">O que há de mais NOBRE agora na sua mesa</h2>
                    <h1 className="text-black text-left">Mais de 40 produtos para tornar sua refeição inesquecível!</h1>
                    </div>
                    {Selection()}
                </div>

                <div className={`flex  px-[10vw] justify-between w-full h-[40vw] items-center`} style={{backgroundImage:bg1, backgroundSize: 'cover'}}>
                    <iframe className="rounded-[1vw]" width="50%" height="80%"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <div className="w-[40%]">
                        <h2 className="text-black text-left text-[2vw] mb-[7%]">PORQUE AS PESSOAS ESCOLHEM A D'CORTHES</h2>
                        <h2 className="text-black text-left mt-[2%]">INSPEÇÃO RIGOROSA EM TODA CADEIA PRODUTIVA</h2>
                        <h2 className="text-black text-left mt-[2%]" >ESTABELECIMENTO INSPECIONADO E PELOS
            PARÂMETROS ESTADUAIS </h2>
                        <h2 className="text-black text-left mt-[2%]" >REGISTRO NA ADAPI/SIE/PI SOB Nº006/069</h2>
                        <h2 className="text-black text-left mt-[2%]" > NUTRIÇÃO ANIMAL FEITA COM RAÇÃO 100% VEGETAL</h2>
                        <h2 className="text-black text-left mt-[2%]">ANIMAIS INSPECIONADOS PRÉ E PÓS ABATE</h2>
                        <h2 className="text-black text-left mt-[2%]">GARANTIA DE PADRÃO EM TODOS OS CORTES
            (ANIMAIS COM MAIOR PORCENTAGEM DE GORDURA)</h2>
                        <div className="mt-[4%] flex justify-between">
                                <button onClick={openModal} className="bg-black mr-[2%]"><h1>Agende sua visita</h1></button>
                                <button onClick={openModal} className="bg-white border-black"><h1 className="text-black">Quero ser um revendedor</h1></button>
                        </div>
                    </div>
                </div>
                
                <div className="bg-black w-full h-[10vw] justify-center flex items-center">
                    <h5 className="text-white text-[2.5vw]">A sua confiança é o mais importante</h5>
                </div>

                <div className="h-[20vw]" style={{backgroundImage:bg2, backgroundSize: 'cover'}}>
                    <Carousel responsive={responsive} className="w-full h-full">
                            {
                                churrascoListOvine.map(() => (
                                    <div className="w-[90%] h-full flex items-center justify-center">
                                        <div className="w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center">
                                            <h1 className="text-white">PESSOA</h1>
                                        </div>
                                </div>
                                ))
                            }
                    </Carousel>
                </div>

                <div className="flex my-[5%] justify-between"> 
                    <img src={time} className="w-[50%] "></img>
                    <div className="w-[40%]">
                        <h2 className="text-black text-left text-[2vw] mb-[7%]">NOSSOS PARCEIROS</h2>
                        <h1 className="text-black text-left mt-[2%] pr-[10vw]">Acreditamos que é perto dos bons que a 
                        gente fica melhor! Por isso contamos com 
                        parcerias ao alcance de nossos clientes, além 
                        de colaborações em prol do desenvolvimento 
                        social, ambiental, científico e tecnológico da 
                        sociedade.</h1>
                        
                        <div className="mt-[4%] flex justify-between">
                                <a href="/mapa" className="bg-black h-[3vw] rounded-[1vw] flex justify-center items-center w-[20vw]"><h1>MAPA D'CORTHES</h1></a>
                        </div>
                    
                    </div>
                </div>

                <div className="h-[30vw] w-full flex px-[10vw]"> 
                    <div className="w-[40%]">
                        <div className="rounded-[1vw] h-[2vw] flex justify-center items-center bg-black">
                            <h1>QUERO SABER MAIS</h1>
                        </div>
                        <div className="h-[2vw]  flex justify-center items-center mt-[7vw]">
                            <h2 className="text-black text-[2vw] text-left">FIQUE POR DENTRO DAS
                            NOVIDADES, RECEITAS E
                            PROMOÇÕES</h2>
                        </div>
                        
                    </div>
                    <div id="info" className="flex-wrap w-[70%]">
                        <input placeholder="Nome" className="w-[50%] text-[1vw] px-[2vw] mr-[2vw] mb-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300"></input>
                        <input placeholder="Idade" className="w-[20%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="Celular" className="w-[26%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="CPF" className="w-[20%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="Estado" className="w-[20%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="E-mail" className="w-[44%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <button className="w-[30%] bg-black h-[3vw]"><h1 className="text-[1vw]">Cadastrar</h1></button>
                    </div>
                </div>
            </div>
        </>
    )
} 


function Selection(){
    const [type, setType] = useState("01")
    const productsOvine : Lista[]=  type == "01" ? churrascoListOvine : type == "02" ? refeicaoOvine : type == "03" ? lanche : []

    return(
        <div>
            <div className="w-full bg-[black] px-[10vw] h-[4vw] rounded-[1vw] flex items-center mt-[5vw]">
                <div className="w-[100%]  flex row-auto justify-between">
                    <button onClick={()=>{setType("01")}} className="bg-black "><h1>PARA CHURRASCO</h1></button>
                    <button onClick={()=>{setType("02")}} className="bg-black"><h1>REFEIÇÃO DO DIA A DIA</h1></button>
                    <button onClick={()=>{setType("03")}} className="bg-black"><h1>HORA DO LANCHE</h1></button>
                </div>
            </div>
            {Products(productsOvine)}
            
        </div>
     
    )
}

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

function Products(lista: Lista[]){
    return (
        <div className="w-[100%] mt-[2vw] mb-[2vw] h-[20vw] flex items-center">
            <Carousel responsive={responsive} className="w-full h-full">
                {
                    lista.map((index) => (
                        <div key={index.nome} className="w-[50%]">
                            <div className="h-[10vw] w-[20vw] overflow-hidden rounded-[1vw]">
                            <div className={`flex h-full`}  style={{alignItems:"center"}}>
                            <a href={`/nutricional/${index.nome}`}><img src={index.src} className="object-contain" /></a>
                            </div>
                            </div>
                            <div className="w-[20vw] rounded-[2vw] mt-[1vw] bg-black p-[0.4vw]"><h1>{index.nome}</h1></div>
                        </div>
                    ))
                }
            </Carousel>
            
        </div>
    )
}