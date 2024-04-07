import { useState } from "react";
import {    embImg, ovine, suine } from "../assets"
import churrascoListOvine from '../assets/Cortes/Churrasco/Ovine'
import churrascoListSuine from '../assets/Cortes/Churrasco/Suine'
import refeicaoOvine from '../assets/Cortes/Refeicao/Ovinos'
import refeicaoSuine from '../assets/Cortes/Refeicao/Suinos'
import lanche from '../assets/Cortes/Lanche'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Lista = {
    nome: string
    src: string
}

export function Container (){
    return (
    <div className="w-full  bg-[white] px-[10vw]" style={{alignItems:"center"}}>
        {Content()}
        {Selection()}
        
    </div>)
} 

function Image(src: string, width: string){
    return (
        <div className={`flex justify-center ml-[2vw]`}  style={{alignItems:"center"}}>
            <img src={src} width={width} />
        </div>
    
    )
}

function Content (){
    return (
        <div className="flex mt-[5vw]">
            <div className="w-[70%] flex-col justify-between "> 
                <h5 className="text-left mb-[4vw]">Nossos Produtos</h5>
                <h1 className="text-[black] text-left mb-[4vw]"> Todos os nossos produtos são embaladas a vácuo e ultracongeladas para você levar para casa. Nossos cortes 
                são ideais para o seu churrasco, refeição do dia a dia e 
                lanche.</h1>
                <div className="flex w-full items-center justify-start">
                    <div>
                        {Image(suine, "80%")}
                        <h1 className="text-[black] mt-[1vw] ml-[1.5vw]">Cortes suínos</h1>
                    </div>
                    <div>
                        {Image(ovine, "80%")}
                        <h1 className="text-[black] mt-[1vw] ml-[1.5vw]">Cortes ovinos</h1>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center ml-[2vw] w-[50vw]`}  style={{alignItems:"center"}}>
                <img src={embImg} width={"100%"} />
            </div>
        </div>
       
    )
}

function Selection(){
    const [text, setText] = useState("Quando pensamos em um churrasco perfeito, a escolha dos cortes de carne é crucial. Existem certos cortes que são ideais para o seu churrasco, que irão garantir um sabor inigualável e uma experiência gastronômica memorável para você e seus convidados.")
    const [type, setType] = useState("01")
    const productsOvine : Lista[]=  type == "01" ? churrascoListOvine : type == "02" ? refeicaoOvine : type == "03" ? lanche : []
    const productsSuine : Lista[]=  type == "01" ? churrascoListSuine : type == "02" ? refeicaoSuine : []

    return(
        <div>
            <div className="w-full bg-[black] px-[10vw] h-[4vw] rounded-[1vw] flex items-center mt-[5vw]">
                <div className="w-[100%]  flex row-auto justify-between">
                    <button onClick={()=>{setText("Quando pensamos em um churrasco perfeito, a escolha dos cortes de carne é crucial. Existem certos cortes que são ideais para o seu churrasco, que irão garantir um sabor inigualável e uma experiência gastronômica memorável para você e seus convidados."), setType("01")}} className="bg-black"><h1>PARA CHURRASCO</h1></button>
                    <button onClick={()=>{setText("A refeição do dia a dia é algo que muitas vezes não damos a devida atenção, mas ela desempenha um papel crucial em nossas vidas. Ela nos proporciona a energia necessária para enfrentar o dia, além de ser um momento de pausa e relaxamento em nossa rotina agitada. Portanto, é importante ter uma dieta balanceada e nutritiva para manter a saúde e o bem-estar.."), setType("02")}} className="bg-black"><h1>REFEIÇÃO DO DIA A DIA</h1></button>
                    <button onClick={()=>{setText("A hora do lanche também é hora de qualidade e sabor de verdade. Oferecemos para você espetinhos e carne de hamburguer prontas para o preparo."), setType("03")}} className="bg-black"><h1>HORA DO LANCHE</h1></button>
                </div>
            </div>
            
            <div className="w-[70%] mt-[5%] ml-[5%]">
                <h1 className="text-black text-left ">{text}</h1>
            </div>

            {type == "03" ? null : <h2 className="text-black text-left text-[2vw] mt-[5%]">OVINOS</h2>}
            {Products(productsOvine)}
            {type == "03" ? null : <h2 className="text-black text-left text-[2vw] mt-[5%]">SUÍNOS</h2>}
            {Products(productsSuine)}
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
            <Carousel  removeArrowOnDeviceType={["tablet", "mobile"]}  responsive={responsive} className="w-full h-full">
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