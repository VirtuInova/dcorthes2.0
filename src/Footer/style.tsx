import {insta, logoFoot, spotify, yt } from "../assets"

type informations = {
    nome: string
    url: string
}
const list01: informations[] = [{nome:"Quem somos", url:"/sobre"}, {nome:"Missão, Visão e valores", url:"/sobre/#missao"}, {nome:"FAQ", url:"/sobre/#faq"} ]
const list02: informations[] = [{nome:"Suínos", url:"/produtos"}, {nome:"Ovinos", url:"/produtos"} ]
const list03: informations[] = [{nome:"Receitas", url:""}, {nome:"Temporadas", url:""}]
const list04: informations[] = [{nome:"Nossos contatos", url:""}, {nome:"Experiências dos clientes", url:""}, {nome:"Nossos parceiros", url:""}, {nome:"Seja um revendedor", url:""} , {nome:"Trabalhe conosco", url:""}, {nome:"Política de cookies", url:""}, {nome:"Política de cookies", url:""}, {nome:"Política de privacidade", url:""}, {nome:"Política de inspeção de produtos de origem animal", url:""}, {nome:"Imprensa", url:""}]

export function Container (){
    return (
    <div className="w-full px-[15%] h-[40vw] bg-[black] flex " style={{alignItems:"center"}}>
        
        <div className="flex">
            {RedesSociais()}
            {Options("SOBRE NÓS", list01)}
            {Options("NOSSOS CORTES", list02)}
        </div>
    </div>)
} 

function Image(src: string, width: string, link?: string){
    return (
        <div className={`flex justify-center ml-[2vw]`}  style={{alignItems:"center"}}>
            <a href={link}><img src={src} width={width}/></a>
        </div>
    
    )
}

function Options(title: string, list: informations[]){
    return ( 
        <div className="w-[35%] ml-[2%] flex-col justify-start" style={{alignItems:"start"}}>
            <h2 className="text-left max-[425px]:text-[3vw]">{title}</h2>
            {list.map((index)=>(
                <a href={index.url}><h3 className="text-left mt-[5%] max-[425px]:text-[3vw]">{index.nome}</h3></a>
            ))}
            
        </div>
    )
}


function RedesSociais(){
    return (
        <div className="w-[50%] h-[20vw] max-[425px]:w-[30%] flex-col justify-center mr-[5%]" style={{alignItems:"center"}}>
            <div className="w-[100%] flex-col justify-center mb-[5%]">
                {Image(logoFoot, "80%")}
                <h1 className="mt-[25%] ml-[5%] max-[425px]:text-[2vw] max-[425px]:mt-[10%]">Acompanhe nossas redes sociais</h1>
            </div>
           
            <div className="flex justify-center w-[100%] max-[425px]:mt-[10%]">
                {Image(insta, "70%")}
                {Image(spotify, "70%", "https://open.spotify.com/user/31rf43hpg4er3e53xarc7a6oi4aa?si=28464bf0ec414c87")}
                {Image(yt, "70%", "https://www.youtube.com/@DCorTHEs" )}
            </div>
            
        </div>
    )
}