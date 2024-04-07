import { buttonHeader, logoHeader } from "../assets"

export function Container (){
    return (
    <div className="w-full h-[10vw] bg-[black] flex" style={{alignItems:"center"}}>
        {Image()}
        {Options()}
        {ButtonHeader()}
    </div>)
} 

function Image(){
    return (
        <div className="w-[20%] h-[10vw] flex justify-center ml-[2vw]" style={{alignItems:"center"}}>
            <a href="/"><img src={logoHeader} /></a>
        </div>
    
    )
}

function Options(){
    return ( 
        <div className="w-[50%] ml-[2%] flex row-auto justify-between">
            <a href="/sobre"><h1 >Sobre</h1></a>
            <a href="/cortes"><h1>Nossos Cortes</h1></a>
            {/* <h1>Cozinha Nobre</h1> */}
            <a href="/produtos"><h1>Produtos</h1></a>
            {/* <h1>Parcerias</h1> */}
            <h1>Contato</h1>
        </div>
    )
}

function ButtonHeader(){
    return (
        <div className="w-[20%] h-[10vw] flex justify-center ml-[2%]" style={{alignItems:"center"}}>
            <img src={buttonHeader}/>
        </div>
    
    )
}