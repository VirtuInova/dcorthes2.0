import React, { useState } from "react";
import {bg01, bg02, bg02mapa, bgmapa, catalogo, hero, hero2, mapa, time} from "../assets"
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
    const bg2 = `url(${bg02mapa})`;
    const h01 = `url(${bgmapa})`;
    const h02 = `url(${mapa})`;

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

            <div className="w-full" style={{alignItems:"center"}}>
                <div className={`w-full h-[34vw] items-center flex px-[10vw]`} style={{backgroundImage:h01, backgroundSize: 'cover'}}>
                </div>
                <div className={`w-full h-[79vw] flex justify-center items-center`} style={{backgroundImage:h02, backgroundSize: 'cover'}}>
                        
                </div>
                <div className={`w-full h-[50vw] flex justify-start p-[10vw] items-start`} style={{backgroundImage:bg2, backgroundSize: 'cover'}}>
                        <div className="w-[50%]">
                            <h2 className="text-black text-left text-[3vw]">Quer montar um menu com qualidade e produtos de excelência?</h2>
                            <h1 className="text-black text-left text-[1.5vw] mt-[2vw]">Contamos com a experiência da Chef e consultoda gastronômica Rose Mardoll. Todos os restaurantes que estamos hoje tem seu menu assinados
                                completamente pela Chef.
                            </h1>
                            <div className="mt-[2vw] w-full flex justify-between">
                                <button onClick={openModal} className="bg-black w-[18vw] h-[3vw] mr-[2%]"><h2 className="text-[0.8vw]">PRECISO DE UM ESPECIALISTA</h2></button>
                                <button onClick={()=>{window.open(catalogo)}} className="bg-white w-[18vw] h-[3vw]"><h2 className="text-[0.8vw] text-black">CATÁLOGO DE CORTES</h2></button>
                            </div>
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