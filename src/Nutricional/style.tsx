import 'react-multi-carousel/lib/styles.css';
import listaOvino from "../assets/Cortes/Ovinos";
import listaSuino from "../assets/Cortes/Suinos";

import { useParams } from 'react-router-dom';

type nutri = {
    porcentagem: string
    tipo: string
    valor: number
}

const descricoes: {nome: string, descricao: string}[] =[{ 
    nome: "Costela Especial Ovino",
    descricao: "Costela Especial Ovina é um corte saboroso e suculento, ideal para preparações assadas lentamente ou grelhadas. Seu sabor único e sua textura macia tornam este corte uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Guisado Pescoço Ovino",
    descricao: "Guisado Pescoço Ovino é um corte versátil e reconfortante, perfeito para ensopados e cozidos. Com sua carne macia e suculenta, este corte absorve os sabores dos temperos, resultando em pratos cheios de sabor e aroma."
},
{ 
    nome: "Paleta Ovino",
    descricao: "Paleta Ovina é um corte suculento e cheio de sabor, ideal para assados lentos e preparações de panela. Sua carne macia e suculenta é perfeita para absorver os sabores dos temperos, resultando em pratos deliciosos e reconfortantes."
},
{ 
    nome: "Paleta Desossada Ovino",
    descricao: "Paleta Desossada Ovina é um corte prático e versátil, perfeito para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para refeições rápidas e fáceis."
},
{ 
    nome: "Sarapatel Ovino",
    descricao: "Sarapatel Ovino é um prato tradicionalmente preparado com miúdos de cordeiro e temperos aromáticos. Com sua textura macia e sabor rico, este prato é uma iguaria apreciada em muitas culturas."
},
{ 
    nome: "Espetinho Ovino",
    descricao: "Espetinho Ovino é uma opção deliciosa para churrascos e grelhados. Com pedaços suculentos de carne de cordeiro enfiados em espetos, este prato é uma escolha popular para festas e eventos ao ar livre."
},
{ 
    nome: "Hamburguer Ovino",
    descricao: "Hamburguer Ovino é uma alternativa saborosa aos hambúrgueres tradicionais de carne bovina. Feitos com carne moída de cordeiro e temperos aromáticos, esses hambúrgueres são suculentos e cheios de sabor."
},
{ 
    nome: "Alcatra Completa Ovino",
    descricao: "Localizada na parte privilegiada do animal, a Alcatra Completa Ovina é sinônimo de versatilidade e sabor. Esse corte se destaca por sua capacidade de transformar qualquer refeição em uma celebração de sabores. Extraída da região traseira do cordeiro, abrangendo desde a parte superior da coxa até a lombar, a Alcatra Completa Ovina é perfeita para grelhar, assar ou preparar no churrasco, prometendo sempre um resultado tenro e incrivelmente saboroso. Este corte não apenas satisfaz os paladares mais exigentes, mas também se torna o centro das atenções em qualquer mesa."
},
{ 
    nome: "Carré Francês Ovino",
    descricao: "Carré Francês Ovino é um corte suculento e saboroso, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para refeições rápidas e fáceis."
},
{ 
    nome: "Costela Prime Ovino",
    descricao: "Costela Prime Ovina é um corte saboroso e suculento, perfeito para churrascos e grelhados. Com seu sabor rico e sua textura macia, esta costela é uma escolha popular para festas e eventos ao ar livre."
},
{ 
    nome: "Costela Ripa Ovino",
    descricao: "Costela Ripa Ovina é um corte suculento e saboroso, ideal para grelhados e assados lentos. Com sua carne macia e suculenta, esta costela é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Carré Short Ovino",
    descricao: "Carré Short Ovino é um corte suculento e saboroso, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para refeições rápidas e fáceis."
},
{ 
    nome: "Coxão Mole Ovino",
    descricao: "Coxão Mole Ovino é um corte suculento e macio, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Filé Mignon Ovino",
    descricao: "Filé Mignon Ovino é um corte delicado e suculento, perfeito para grelhados e assados rápidos. Com sua carne macia e saborosa, este corte é uma escolha popular para ocasiões especiais e jantares elegantes."
},
{ 
    nome: "Lagarto Coxão Duro Ovino",
    descricao: "Lagarto Coxão Duro Ovino é um corte versátil e saboroso, ideal para assados lentos e preparações de panela. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida e ensopados."
},
{ 
    nome: "Ossobuco Ovino",
    descricao: "Ossobuco Ovino é um corte rico e reconfortante, perfeito para ensopados e cozidos. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida lentamente em molhos aromáticos."
},
{ 
    nome: "Patinho Ovino",
    descricao: "Patinho Ovino é um corte magro e suculento, ideal para assados lentos e preparações de panela"
},
{ 
    nome: "Pernil Dessosado Ovino",
    descricao: "Pernil Dessosado Ovino é um corte suculento e saboroso, perfeito para assados lentos e preparações de panela. Com sua carne macia e suculenta, este corte é uma escolha popular para festas e reuniões familiares."
},
{ 
    nome: "Prime Rib Ovino",
    descricao: "Prime Rib Ovino é um corte suculento e cheio de sabor, perfeito para grelhados e assados. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Sela Inglesa Ovino",
    descricao: "Sela Inglesa Ovina é um corte suculento e macio, perfeito para grelhados e assados rápidos. Com sua carne saborosa e suculenta, este corte é uma escolha popular para churrascos e eventos ao ar livre."
},
{ 
    nome: "Stinko Ovino",
    descricao: "Stinko Ovino é um corte saboroso e suculento, perfeito para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "T-Bone Ovino",
    descricao: "T-Bone Ovino é um corte suculento e cheio de sabor, ideal para grelhados e assados. Com sua carne macia e saborosa, este corte é uma escolha popular para churrascos e ocasiões especiais."
},
{ 
    nome: "Carré da Bisteca",
    descricao: "Carré da Bisteca é um corte suculento e saboroso, conhecido por sua carne macia e suculenta. Ideal para grelhados e assados, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Pernil com Osso",
    descricao: "Pernil com Osso é um corte suculento e cheio de sabor, perfeito para assados lentos e preparações de panela. Com sua carne macia e suculenta, este corte é uma escolha popular para festas e eventos especiais."
},
{ 
    nome: "Picanha",
    descricao: "Picanha Suína é um corte suculento e saboroso, perfeito para churrascos e grelhados. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e reuniões familiares."
},
{ 
    nome: "Alcatra Suína",
    descricao: "Alcatra Suína é um corte versátil e saboroso, perfeito para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para refeições rápidas e fáceis."
},
{ 
    nome: "Bife Ancho",
    descricao: "Bife Ancho Suíno é um corte suculento e saboroso, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Coxão Duro",
    descricao: "Coxão Duro Suíno é um corte versátil e saboroso, perfeito para assados lentos e preparações de panela. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida e ensopados."
},
{ 
    nome: "Coxão Mole",
    descricao: "Coxão Mole Suíno é um corte suculento e macio, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Filé Mignon",
    descricao: "Filé Mignon Suíno é um corte delicado e suculento, perfeito para grelhados e assados rápidos. Com sua carne macia e saborosa, este corte é uma escolha popular para ocasiões especiais e jantares elegantes."
},
{ 
    nome: "Maminha",
    descricao: "Maminha Suína é um corte suculento e saboroso, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Ossobuco",
    descricao: "Ossobuco Suíno é um corte rico e reconfortante, perfeito para ensopados e cozidos. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida lentamente em molhos aromáticos."
},
{ 
    nome: "Panceta",
    descricao: "Panceta Suína é um corte suculento e saboroso, ideal para grelhados e assados lentos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Patinho",
    descricao: "Patinho Suíno é um corte magro e suculento, perfeito para assados lentos e preparações de panela. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida."
},
{ 
    nome: "Porqueta",
    descricao: "Porqueta é um prato tradicional italiano feito com carne de porco assada lentamente. Com sua pele crocante e carne suculenta, este prato é uma iguaria apreciada em todo o mundo."
},
{ 
    nome: "Prime Rib",
    descricao: "Prime Rib Suíno é um corte suculento e saboroso, perfeito para grelhados e assados. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e reuniões familiares."
},
{ 
    nome: "Short-Rib",
    descricao: "Short-Rib Suíno é um corte suculento e saboroso, perfeito para grelhados e assados lentos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Suan",
    descricao: "Suan Suíno é um corte suculento e saboroso, perfeito para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e eventos ao ar livre."
},
{ 
    nome: "T-Bone",
    descricao: "T-Bone Suíno é um corte suculento e cheio de sabor, perfeito para grelhados e assados. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Tomahawk",
    descricao: "Tomahawk Suíno é um corte suculento e saboroso, conhecido por sua apresentação impressionante e sabor rico. Com sua carne macia e suculenta, este corte é uma escolha popular para ocasiões especiais e churrascos."
},
{ 
    nome: "Lagarto",
    descricao: "Lagarto Suíno é um corte versátil e saboroso, ideal para assados lentos e preparações de panela. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida e ensopados."
},
{ 
    nome: "Carré Francês",
    descricao: "Carré Francês Suíno é um corte suculento e saboroso, perfeito para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Espetinho Suíno",
    descricao: "Espetinho Suíno é uma opção deliciosa para churrascos e grelhados. Com pedaços suculentos de carne de porco enfiados em espetos, este prato é uma escolha popular para festas e eventos ao ar livre."
},
{ 
    nome: "Carré-da-bisteca",
    descricao: "Carré-da-bisteca Suíno é um corte suculento e saboroso, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Costela",
    descricao: "Costela Suína é um corte suculento e saboroso, perfeito para churrascos e assados lentos. Com sua carne macia e suculenta, este corte é uma escolha popular para refeições em família e eventos ao ar livre."
},
{ 
    nome: "Paleta",
    descricao: "Paleta Suína é um corte versátil e saboroso, perfeito para assados lentos e preparações de panela. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida e ensopados."
},
{ 
    nome: "Joelho",
    descricao: "Joelho Suíno é um corte suculento e saboroso, ideal para ensopados e cozidos. Com sua carne macia e suculenta, este corte é uma escolha popular para pratos de carne cozida lentamente em molhos aromáticos."
},
{ 
    nome: "Pés",
    descricao: "Pés Suínos são uma iguaria apreciada em muitas cozinhas ao redor do mundo. Com sua carne macia e saborosa, esses pés são ideais para preparações de sopa e cozidos."
},
{ 
    nome: "Toucinho",
    descricao: "Toucinho Suíno é um ingrediente versátil e saboroso, ideal para adicionar sabor e textura a uma variedade de pratos. Com sua gordura rica e sabor intensamente salgado, este ingrediente é uma escolha popular na culinária tradicional."
}
] 

export function Container (){
    const { nome } = useParams();
    let corte = listaOvino.find(index => index.nome === nome);

    if (!corte) {
        corte = listaSuino.find(index => index.nome === nome);
    }
   
    const corteSelecionado = descricoes.find((index)=>index.nome == nome)
    const informacoes: nutri[] = [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Carboidratos(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Açucares totais(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Açucares Adicionados(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Proteínas(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Gorduras Totais(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Gorduras Saturadas(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Gorduras Trans(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Fibras Alimentares(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Sódio(mg)",
        valor: 213
    }] 


    return (
    <div className="w-full bg-[white] min-h-[100vh]" style={{alignItems:"center"}}>
        
        <div className="h-[100vw] max-[425px]:h-[200vw]">
            <div className={`w-full h-[40vw]`}> 
                <div className="flex justify-between px-[10vw] pt-[5%] max-[425px]:flex-wrap ">
                    <div className='h-[30vw] w-[30vw] max-[425px]:w-[50vw] max-[425px]:h-[50vw]'>
                        <img src={corte?.src} className="object-cover h-full w-full rounded-[2vw]"/>
                    </div>
                        <div className="w-[50%] max-[425px]:w-full max-[425px]:mt-[3vw]">
                                <h2 className="text-black text-left text-[2.5vw] mb-[7%] max-[425px]:text-[4vw]">{nome}</h2>
                                <h1 className="text-black text-justify mt-[2%] max-[425px]:text-[3vw]">{corteSelecionado?.descricao}</h1>
                        </div>

                    
                </div>
            
                <div className="w-full mt-[10vw] pl-[10vw]">
                {corte?.nutri[3] &&
                    <>
                        <div>
                            <h1 className='text-left text-black max-[425px]:text-[3vw]'>INFORMAÇÃO NUTRICIONAL</h1>
                            <h1 className='text-left text-black mt-[1vw] max-[425px]:text-[3vw]'>Porção de 100g. Quantidade por porção %VD(*)</h1>
                        </div>
                    
                    
                    
                        <div className="flex flex-wrap w-full pr-[15vw] mt-[2vw] ">
                           { corte?.nutri.map((index) => (
                                <div key={index.tipo} className="rounded-[1vw] p-[1vw] w-[20vw] h-[7vw] mr-[2vw] mb-[2vw] max-[425px]:h-[12vw] max-[425px]:w-[30vw]" style={{ border: "1px solid black" }}>
                                    <h1 className="text-left text-black max-[425px]:text-[2vw]">{index.porcentagem}</h1>
                                    <h1 className="text-left text-black mb-[0.3vw] max-[425px]:text-[2vw]">{index.tipo}</h1>
                                    <hr style={{ border: "1px solid black" }} />
                                    <h1 className="text-left text-black mt-[0.3vw] max-[425px]:text-[2vw]">{index.valor}</h1>
                                </div>
                            ))}
                        </div>
                        <h2 className='text-black text-[1.5vw] mt-[3vw] mb-[2vw] max-[425px]:text-[3vw] max-[425px]:text-left'>Igredientes: <br/> NÃO CONTÉM GLUTÉN</h2>
                    </>
                    }
                </div>

                
            </div>
      </div>

    </div>)
} 




