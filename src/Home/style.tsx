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
                            <input placeholder="Nome" className="w-[50%] text-[1vw] px-[2vw] mr-[2vw] mb-[2vw] h-[3vw]  rounded-[0.5vw] bg-slate-300"></input>
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
                <div className={`w-full h-[30vw] items-center flex px-[10vw] max-[425px]:h-[40vw]  bg-[url(./assets/hero.webp)] `} style={{ backgroundSize: 'cover'}}>
                    <h1 className="text-center text-[2vw] w-[35%] max-[425px]:w-full max-[425px]:text-[5vw] max-[425px]:bg-black max-[425px]:p-[1vw] rounded-[1vw] ">Bem vindo ao mundo de <b>excelência</b> no agro de corte de carnes!</h1>
                </div>
                <div className={`w-full h-[30vw] flex justify-center items-center max-[425px]:h-[70vw]`} style={{backgroundImage:h02, backgroundSize: 'cover'}}>
                            <div className="w-[25vw] h-[25vw] max-[425px]:h-[60vw] max-[425px]:w-[60vw] bg-white rounded-full flex items-center justify-center">
                                <div>
                                    <div className="flex justify-center mb-[10%]" >
                                        <h1 className="text-black text-center max-[425px]:text-[4vw] text-[1.8vw] w-[70%]"><b>O corte perfeito</b> para seu prato de suíno ou ovino!</h1>
                                    </div>
                                    <button onClick={()=>{window.open(catalogo)}} className="bg-black max-[425px]:w-[30vw] max-[425px]:h-[14vw] w-[18vw] h-[3vw]"><h2 className="text-[0.8vw] max-[425px]:text-[3vw]">CATÁLOGO DE CORTES</h2></button>
                                </div>
                            </div>
                </div>
                <div className="px-[10vw] mt-[5%] max-[425px]:mt-[20%] " >
                    <div className="w-[30%] max-[425px]:w-[70%] ">
                    <h2 className="text-black text-left  text-[1.8vw] max-[425px]:text-[4vw]">O que há de mais NOBRE agora na sua mesa</h2>
                    <h1 className="text-black text-left max-[425px]:text-[3vw]">Mais de 40 produtos para tornar sua refeição inesquecível!</h1>
                    </div>
                    {Selection()}
                </div>

                <div className={`flex max-[425px]:flex-wrap  px-[10vw]  justify-between w-full h-[40vw] max-[425px]:h-[150vw]  max-[425px]:bg-none items-center bg-[url(./assets/bg-imag01.webp)]`} style={{backgroundSize: 'cover'}}>
                    <iframe className="rounded-[1vw] w-[50%] h-[80%] max-[425px]:h-[50%] max-[425px]:mt-[20%] max-[425px]:w-full"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <div className="w-[40%] max-[425px]:h-[50%] max-[425px]:mt-[3vw] max-[425px]:w-full">
                        <h2 className="text-black text-left text-[2vw] mb-[7%] max-[425px]:text-[4vw]">PORQUE AS PESSOAS ESCOLHEM A D'CORTHES</h2>
                        <h2 className="text-black text-left mt-[2%] max-[425px]:text-[3vw]">INSPEÇÃO RIGOROSA EM TODA CADEIA PRODUTIVA</h2>
                        <h2 className="text-black text-left mt-[2%] max-[425px]:text-[3vw]" >ESTABELECIMENTO INSPECIONADO E PELOS
            PARÂMETROS ESTADUAIS </h2>
                        <h2 className="text-black text-left mt-[2%] max-[425px]:text-[3vw]" >REGISTRO NA ADAPI/SIE/PI SOB Nº006/069</h2>
                        <h2 className="text-black text-left mt-[2%] max-[425px]:text-[3vw]" > NUTRIÇÃO ANIMAL FEITA COM RAÇÃO 100% VEGETAL</h2>
                        <h2 className="text-black text-left mt-[2%] max-[425px]:text-[3vw]">ANIMAIS INSPECIONADOS PRÉ E PÓS ABATE</h2>
                        <h2 className="text-black text-left mt-[2%] max-[425px]:text-[3vw]">GARANTIA DE PADRÃO EM TODOS OS CORTES
            (ANIMAIS COM MAIOR PORCENTAGEM DE GORDURA)</h2>
                        <div className="mt-[4%] flex justify-between max-[425px]:w-[80vw] max-[425px]:mt-[14%]">
                                <button onClick={openModal} className="bg-black mr-[2%]"><h1 className="max-[425px]:text-[3vw] max-[425px]:h-[4vw]">Agende sua visita</h1></button>
                                <button onClick={openModal} className="bg-white border-black max-[425px]:h-[12vw]"><h1 className="text-black max-[425px]:text-[3vw] max-[425px]:h-[4vw]">Quero ser um revendedor</h1></button>
                        </div>
                    </div>
                </div>
                
                <div className="bg-black w-full h-[10vw] max-[425px]:h-[15vw] justify-center flex items-center max-[425px]:mt-[45vw]">
                    <h5 className="text-white text-[2.5vw] max-[425px]:text-[3.5vw]">A sua confiança é o mais importante</h5>
                </div>

                <div className="h-[20vw] max-[425px]:h-[30vw]" style={{backgroundImage:bg2, backgroundSize: 'cover'}}>
                    <Carousel autoPlay={true} infinite={true}  removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className="w-full h-full">
                            {
                                churrascoListOvine.map(() => (
                                    <div className="w-[90%] h-full flex items-center justify-center">
                                        <div className="w-[10vw] h-[10vw] max-[425px]:h-[20vw] max-[425px]:w-[20vw] bg-black rounded-full flex items-center justify-center">
                                            <h1 className="text-white">PESSOA</h1>
                                        </div>
                                </div>
                                ))
                            }
                    </Carousel>
                </div>

                <div className="flex my-[5%] justify-between"> 
                    <img src={time} className="w-[50%] max-[425px]:w-[40%] object-contain"></img>
                    <div className="w-[40%] max-[425px]:w-[60%] max-[425px]:ml-[10%]">
                        <h2 className="text-black text-left text-[2vw] mb-[7%] max-[425px]:text-[4vw]">NOSSOS PARCEIROS</h2>
                        <h1 className="text-black text-left mt-[2%] pr-[10vw] max-[425px]:text-[3vw]">Acreditamos que é perto dos bons que a 
                        gente fica melhor! Por isso contamos com 
                        parcerias ao alcance de nossos clientes, além 
                        de colaborações em prol do desenvolvimento 
                        social, ambiental, científico e tecnológico da 
                        sociedade.</h1>
                        
                        <div className="mt-[4%] flex justify-between">
                                <a href="/mapa" className="bg-black h-[3vw] rounded-[1vw] flex justify-center items-center w-[20vw] max-[425px]:w-[25vw] max-[425px]:h-[4vw]"><h1 className="max-[425px]:text-[2vw]">MAPA D'CORTHES</h1></a>
                        </div>
                    
                    </div>
                </div>

                <div className="h-[30vw] w-full flex max-[425px]:flex-wrap max-[425px]:h-[50vw] px-[10vw] max-[425px]:mt-[10vw]"> 
                    <div className="w-[40%] max-[425px]:w-full">
                        <div className="rounded-[1vw] h-[2vw] max-[425px]:h-[4vw] flex justify-center items-center bg-black">
                            <h1 className="max-[425px]:text-[3vw]">QUERO SABER MAIS</h1>
                        </div>
                        <div className="h-[2vw] flex justify-center items-center mt-[7vw]">
                            <h2 className="text-black text-[3vw] text-left">FIQUE POR DENTRO DAS
                            NOVIDADES, RECEITAS E
                            PROMOÇÕES</h2>
                        </div>
                        
                    </div>
                    <div id="info" className="flex-wrap w-[70%] max-[425px]:w-full">
                        <input placeholder="Nome" className="w-[50%] max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] max-[425px]:w-[60%] text-[1vw] px-[2vw] mr-[2vw] mb-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300"></input>
                        <input placeholder="Idade" className="w-[20%] max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="Celular" className="w-[26%] max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] max-[425px]:w-[60%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="CPF" className="w-[20%] max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="Estado" className="w-[20%]  text-[1vw] max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input placeholder="E-mail" className="w-[44%]  max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] max-[425px]:w-[60%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <button className="w-[30%] bg-black h-[3vw] max-[425px]:pb-[4vw]"><h1 className="text-[1vw] max-[425px]:max-[425px]:text-[3vw]">Cadastrar</h1></button>
                    </div>
                </div>
            </div>
        </>
    )
} 


function Selection(){
    const [type, setType] = useState("01")

    return(
        <div>
            <div className="w-full bg-[black] px-[10vw] max-[425px]:px-[0vw] h-[10vw] rounded-[1vw] flex items-center mt-[5vw] mb-[5vw]">
                <div className="w-full  flex row-auto justify-between">
                    <button onClick={()=>{setType("01")}} className="bg-black max-[425px]:w-[30%] max-[425px]:h-[30%]"><h1 className="max-[425px]:text-[3vw]">CHURRASCO</h1></button>
                    <button onClick={()=>{setType("02")}} className="bg-black max-[425px]:w-[40%] max-[425px]:h-[30%]"><h1 className="max-[425px]:text-[3vw]">REFEIÇÃO</h1></button>
                    <button onClick={()=>{setType("03")}} className="bg-black max-[425px]:w-[30%] max-[425px]:h-[30%]"><h1 className="max-[425px]:text-[3vw]">LANCHE</h1></button>
                </div>
            </div>
            {
                type == "01" ?  Products(churrascoListOvine)  : type == "02" ? Products(refeicaoOvine)  : type == "03" ?  Products(lanche)  : null
            }
           
            
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
      breakpoint: { max: 425, min: 0 },
      items: 2
    }
  };

function Products(lista: Lista[]){
    return (
        <div className="w-full mt-[2vw] mb-[2vw] h-[20vw] max-[425px]:h-[40vw] flex items-center">
            <Carousel autoPlay={true} infinite={true}  removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className="w-full h-full">
                {
                    lista.map((index) => (
                        <div key={index.nome} className="w-[50%]">
                            <div className="h-[15vw] w-[20vw] max-[425px]:h-[30vw] max-[425px]:w-[37vw]  overflow-hidden">
                                <div className={`flex h-full`}  style={{alignItems:"center"}}>
                                    <a href={`/nutricional/${index.nome}`} className="h-full w-full"><img src={index.src} className="object-cover h-full w-full rounded-[2vw]" /></a>
                                </div>
                            </div>
                            <div className="w-[20vw] max-[425px]:w-[37vw] max-[425px]:h-[7.5vw] rounded-[2vw] mt-[1vw] bg-black p-[0.4vw] flex justify-center items-center"><h1 className="max-[425px]:text-[2.8vw]">{index.nome}</h1></div>
                        </div>
                    ))
                }
            </Carousel>
            
        </div>
    )
}

