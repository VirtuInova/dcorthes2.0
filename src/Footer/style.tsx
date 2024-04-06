import { buttonHeader, insta, logoFoot, spotify, yt } from "../assets"

type informations = {
    nome: string
    url: string
}
const list01: informations[] = [{nome:"Quem somos", url:""}, {nome:"Nossa história", url:""}, {nome:"Missão, Visão e valores", url:""}, {nome:"FAQ", url:""} ]
const list02: informations[] = [{nome:"Suínos", url:""}, {nome:"Ovinos", url:""}, {nome:"Pescados", url:""}, {nome:"Todos os produtos", url:""} ]
const list03: informations[] = [{nome:"Receitas", url:""}, {nome:"Temporadas", url:""}]
const list04: informations[] = [{nome:"Nossos contatos", url:""}, {nome:"Experiências dos clientes", url:""}, {nome:"Nossos parceiros", url:""}, {nome:"Seja um revendedor", url:""} , {nome:"Trabalhe conosco", url:""}, {nome:"Política de cookies", url:""}, {nome:"Política de cookies", url:""}, {nome:"Política de privacidade", url:""}, {nome:"Política de inspeção de produtos de origem animal", url:""}, {nome:"Imprensa", url:""}]

export function Container (){
    return (
    <div className="w-full h-[40vw] bg-[black] flex px-[5%]" style={{alignItems:"center"}}>
        
        <div className="flex">
            {RedesSociais()}
            {Options("SOBRE NÓS", list01)}
            {Options("NOSSOS CORTES", list02)}
            {Options("COZINHA NOBRE", list03)}
            {Options("INFORMAÇÕES ÚTEIS", list04)}
        </div>
    </div>)
} 

function Image(src: string, width: string){
    return (
        <div className={`flex justify-center ml-[2vw]`}  style={{alignItems:"center"}}>
            <img src={src} width={width}/>
        </div>
    
    )
}

function Options(title: string, list: informations[]){
    return ( 
        <div className="w-[35%] ml-[2%] flex-col justify-start" style={{alignItems:"start"}}>
            <h2 className="text-left">{title}</h2>
            {list.map((index)=>(
                <h3 className="text-left mt-[5%]">{index.nome}</h3>
            ))}
            
        </div>
    )
}


function RedesSociais(){
    return (
        <div className="w-[50%] h-[20vw] flex-col justify-center mr-[5%]" style={{alignItems:"center"}}>
            <div className="w-[100%] flex-col justify-center mb-[5%]">
                {Image(logoFoot, "80%")}
                <h1 className="mt-[25%] ml-[5%]">Acompanhe nossas redes sociais</h1>
            </div>
           
            <div className="flex justify-center w-[100%]">
                {Image(insta, "70%")}
                {Image(spotify, "70%")}
                {Image(yt, "70%")}
            </div>
            
        </div>
    )
}