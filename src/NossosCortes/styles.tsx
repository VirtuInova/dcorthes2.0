import { useState } from "react";
import {our, suine} from "../assets"
import suines from '../assets/Cortes/Suinos'
import ovines from '../assets/Cortes/Ovinos'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
type Lista = {
    nome: string
    src: string
}


export function Container (){
    return (
    <div className="w-full min-h-[100vh] bg-[white] px-[10vw]" style={{alignItems:"center"}}>
        {Content()}
        {Selection()}
        
    </div>)
} 

function Image(src: string, width: string){
    return (
        <div className={`flex justify-center ml-[2vw] w-[90vw]`}  style={{alignItems:"center"}}>
            <img src={src} width={width} />
        </div>
    
    )
}

function Content (){
    return (
        <div className="flex mt-[5vw]">
            <div className="w-[70%] flex-col justify-between "> 
                <h5 className="text-left mb-[4vw]">Nossos Cortes</h5>
                <h1 className="text-[black] text-justify mb-[4vw]">Cortes selecionados para proporcionar uma experiência de degustação incomparável, para você que aprecia o que há de melhor da carne animal suína e ovina. <br/> Esse menu 
                oferece uma ampla gama de opções para os amantes de carne, atendendo a todos os gostos e preferências. Seja você um fã de cortes mais tradicionais ou alguém que gosta de experimentar cortes mais únicos e especializados, certamente algo que agrade seu paladar. </h1>
            </div>
            {Image(our, "100%")}
        </div>
       
    )
}

function Selection(){
    const [text, setText] = useState("Nossos cortes ovinos, são provenientes de carneiros e cordeiros, com uma variedade de mais de 20 cortes, dos mais comuns, como Alcatra Completa e Filé Mignon, até cortes mais especializados, como Prime Rib e T-Bone. ")
    const [type, setType] = useState("01")
    const products : Lista[] =  type == "01" ? ovines : suines
    return(
        <div>
            <div className="w-full bg-[black] px-[10vw] h-[4vw] rounded-[1vw] flex items-center mt-[5vw]">
                <div className="w-[100%]  flex row-auto justify-between">
                    <button onClick={()=>{setText("Nossos cortes ovinos, são provenientes de carneiros e cordeiros, com uma variedade de mais de 20 cortes, dos mais comuns, como Alcatra Completa e Filé Mignon, até cortes mais especializados, como Prime Rib e T-Bone. "),setType("01")}} className="bg-black"><h1>Cortes ovinos</h1></button>
                    <button onClick={()=>{setText("Na seção de carnes suínas, que são provenientes de porcos, apresentamos mais de 25 cortes do mais comum ao mais especializada, sirva-se com nossa Picanha Suína, Porchetta, Short Rib, e Tomahawk. "),setType("02")}} className="bg-black"><h1>Cortes suínos</h1></button>
                </div>
            </div>
            
            <div className="w-[70%] mt-[5%] ml-[5%]">
                <h1 className="text-black text-left ">{text}</h1>
            </div>

            {Products(products)}
            
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
            <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className="w-full h-full">
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