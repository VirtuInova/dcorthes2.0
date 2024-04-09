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
    <div className="w-full min-h-[100vh] bg-[white] px-[10vw]" style={{alignItems:"center"}}>
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
        <div className="flex pt-[5vw] ">
            <div className="w-[70%] flex-col justify-between max-[425px]:w-full"> 
                <h5 className="text-left mb-[4vw] max-[425px]:text-[5vw]">Nossos Produtos</h5>
                <h1 className="text-[black] text-left mb-[4vw] max-[425px]:text-[3vw]"> Todos os nossos produtos são embaladas a vácuo e ultracongeladas para você levar para casa. Nossos cortes 
                são ideais para o seu churrasco, refeição do dia a dia e 
                lanche.</h1>
                <div className="flex w-full items-center justify-start">
                    <div>
                        {Image(suine, "80%")}
                        <h1 className="text-[black] mt-[1vw] ml-[1.5vw] max-[425px]:text-[2vw]">Cortes suínos</h1>
                    </div>
                    <div>
                        {Image(ovine, "80%")}
                        <h1 className="text-[black] mt-[1vw] ml-[1.5vw] max-[425px]:text-[2vw]">Cortes ovinos</h1>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center ml-[2vw] w-[50vw] max-[425px]:w-[0vw] max-[425px]:h-[0vw]`}  style={{alignItems:"center"}}>
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
            <div className="w-full bg-[black] px-[10vw] max-[425px]:p-[0vw] h-[4vw] rounded-[1vw] flex items-center mt-[5vw]">
                <div className="w-[100%]  flex row-auto justify-between">
                    <button onClick={()=>{setText("Quando pensamos em um churrasco perfeito, a escolha dos cortes de carne é crucial. Existem certos cortes que são ideais para o seu churrasco, que irão garantir um sabor inigualável e uma experiência gastronômica memorável para você e seus convidados."), setType("01")}} className="bg-black "><h1 className="max-[425px]:text-[1.4vw]">PARA CHURRASCO</h1></button>
                    <button onClick={()=>{setText("A refeição do dia a dia é algo que muitas vezes não damos a devida atenção, mas ela desempenha um papel crucial em nossas vidas. Ela nos proporciona a energia necessária para enfrentar o dia, além de ser um momento de pausa e relaxamento em nossa rotina agitada. Portanto, é importante ter uma dieta balanceada e nutritiva para manter a saúde e o bem-estar.."), setType("02")}} className="bg-black"><h1 className="max-[425px]:text-[1.4vw]">REFEIÇÃO DO DIA A DIA</h1></button>
                    <button onClick={()=>{setText("A hora do lanche também é hora de qualidade e sabor de verdade. Oferecemos para você espetinhos e carne de hamburguer prontas para o preparo."), setType("03")}} className="bg-black"><h1 className="max-[425px]:text-[1.4vw]">HORA DO LANCHE</h1></button>
                </div>
            </div>
            
            <div className="w-[70%] mt-[5%] ml-[5%] max-[425px]:w-full">
                <h1 className="text-black text-left max-[425px]:text-[2vw]">{text}</h1>
            </div>

            {type == "03" ? null : <h2 className="text-black text-left text-[2vw] mt-[5%] max-[425px]:text-[4vw]">OVINOS</h2>}
            {Products(productsOvine)}
            {type == "03" ? null : <h2 className="text-black text-left text-[2vw] mt-[5%] max-[425px]:text-[4vw]">SUÍNOS</h2>}
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
      items: 2
    }
  };

  function Products(lista: Lista[]){
    return (
        <div className="w-[100%] mt-[2vw] pb-[2vw] h-[20vw] max-[425px]:h-[40vw] flex items-center">
            <Carousel autoPlay={true} infinite={true}  removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className="w-full h-full">
                {
                    lista.map((index) => (
                        <div key={index.nome} className="w-[50%]">
                            <div className="h-[15vw] w-[20vw] max-[425px]:h-[30vw] max-[425px]:w-[37vw]  overflow-hidden">
                                <div className={`flex h-full`}  style={{alignItems:"center"}}>
                                    <a href={`/nutricional/${index.nome}`} className="h-full w-full"><img src={index.src} className="object-cover h-full w-full rounded-[2vw]" /></a>
                                </div>
                            </div>
                            <div className="w-[20vw] max-[425px]:w-[37vw] max-[425px]:h-[4vw] rounded-[2vw] mt-[1vw] bg-black p-[0.4vw] flex justify-center items-center"><h1 className="max-[425px]:text-[2vw]">{index.nome}</h1></div>
                        </div>
                    ))
                }
            </Carousel>
            
        </div>
    )
}