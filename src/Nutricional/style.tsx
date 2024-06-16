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
    descricao: "A Paleta ovina é um corte com uma boa mistura de carne e gordura, que confere umidade e sabor durante o cozimento. Ideal para assados, cozidos e churrascos, a paleta se destaca por sua carne macia e saborosa, que se desfaz facilmente, sendo uma escolha excelente para refeições que buscam um equilíbrio entre sabor e textura."
},
{ 
    nome: "Paleta Desossada Ovino",
    descricao: "Com a remoção dos ossos, a Paleta Desossada ovina torna-se extremamente versátil, facilitando o corte e o preparo. Ideal para rolos recheados, assados ou cozidos lentos, essa versão da paleta oferece uma textura macia e um sabor profundo, enriquecido pelos temperos que permeiam facilmente a carne durante o cozimento."
},
{ 
    nome: "Sarapatel Ovino",
    descricao: "O Sarapatel ovino é um prato tradicional que utiliza miúdos e partes internas do animal, como fígado, coração e pulmões, entre outros. Conhecido por seu sabor característico, é rico em nutrientes e oferece uma experiência culinária única. Preparado com uma variedade de temperos, resulta em um prato intenso e aromático, apreciado por seu sabor autêntico e profundidade."
},
{ 
    nome: "Espetinho Ovino",
    descricao: "Espetinho Ovino é uma opção deliciosa para churrascos e grelhados. Com pedaços suculentos de carne de cordeiro enfiados em espetos, este prato é uma escolha popular para festas e eventos ao ar livre."
},
{ 
    nome: "Hamburguer Ovino",
    descricao: "Criar um blend perfeito para hambúrguer ovino envolve a combinação de diferentes cortes de carne para alcançar um equilíbrio ideal entre sabor, textura e suculência. Por isso a D’Corthes trouxe para você o blend ovino, com uma ótima porcentagem de carne gordurosa e magra. Burguers artesanais sem tempero (sem sal e sem glúten) e produzidos sem conservantes artificiais com o tamanho ideal para sua fome. Prepare na brasa, na frigideira ou grelha mais essa opção para seu churrasco ou lanche  com carnes artesanais que antes você só encontrava em restaurantes."
},
{ 
    nome: "Alcatra Completa Ovino",
    descricao: "Nossa peça de alcatra completa é composta da picanha, maminha e alcatra do ovino. Seja grelhada, assada ou preparada no churrasco, ela promete entregar um resultado que é sempre tenro e incrivelmente saboroso. Este corte não apenas satisfaz os paladares mais exigentes, mas também se torna o centro das atenções em qualquer mesa. Localizada na parte privilegiada do animal, a Alcatra Completa Ovina é sinônimo de versatilidade e sabor. Esse corte se destaca por sua capacidade de transformar qualquer refeição em uma celebração de sabores."
},
{ 
    nome: "Carré Francês Ovino",
    descricao: "Com seus ossos longos, uma delicada capa de gordura e aparência elegante, é perfeito para apresentações refinadas. A carne é suave, saborosa e cheia de umidade proporcionada pela gordura delicada do corte. Ideal para assados ou para ser preparado no forno, destacando-se em ocasiões especiais. Localizada na região dorsal é um corte feito perpendicularmente a coluna vertebral do cordeiro, um dos cortes mais nobre do animal."
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
    descricao: "Semelhante ao Carré Francês, porém com ossos mais curtos, o Carré Short é tenro e saboroso, com uma textura que derrete na boca. Excelente para grelhar ou assar, sua gordura marmorizada infunde sabor e suculência, ideal para pratos que buscam uma experiência gustativa rica e memorável. Localizada na região dorsal é um corte feito perpendicularmente a coluna vertebral do cordeiro."
},
{ 
    nome: "Coxão Mole Ovino",
    descricao: "Conhecido por sua maciez e menor teor de gordura, o Coxão Mole é ideal para preparos rápidos, como bifes e escalopes. Sua textura suave e sabor delicado o tornam uma escolha popular para pratos leves, porém saborosos! Parte traseira do animal"
},
{ 
    nome: "Filé Mignon Ovino",
    descricao: "O Filé Mignon ovino é extremamente macio e considerado uma iguaria em qualquer menu gourmet. Com pouco ou nenhum marmoreio, é ideal para pratos que requerem uma carne de textura fina e sabor suave. Perfeito para ser servido em medalhões ou assado inteiro. Região lombar, sob as costelas do cordeiro"
},
{ 
    nome: "Lagarto Coxão Duro Ovino",
    descricao: "Este corte combinamos os já conhecidos Coxão Duro e Lagarto,  oferecendo uma mistura de texturas e sabores que combinam. Ideal para cozidos, ensopados e moquecas, onde o longo cozimento transforma sua textura robusta em uma carne macia e saborosa, cheia de aroma. Parte traseira superior do animal"
},
{ 
    nome: "Ossobuco Ovino",
    descricao: "Rico em colágeno, o Ossobuco é perfeito para cozimentos lentos e úmidos. A carne, ao ser cozida lentamente, torna-se extremamente macia, enquanto o tutano confere um sabor único e uma textura cremosa ao prato. Parte inferior da perna do cordeiro."
},
{ 
    nome: "Patinho Ovino",
    descricao: "O Patinho é um corte magro, ideal para bifes finos, escalopes e estrogonofes. Sua textura firme e sabor suavemente acentuado permitem que se adapte bem a marinadas e temperos diversos, sendo uma escolha versátil para várias preparações. Parte dianteira da coxa do animal"
},
{ 
    nome: "Pernil Dessosado Ovino",
    descricao: "O Pernil Desossado oferece uma carne rica e saborosa, ideal para assados e preparações que exigem uma peça inteira. Sem os ossos, torna-se mais fácil de levar para travessa e serve bem em ocasiões festivas, onde o sabor intenso e a textura macia são apreciados. Localizada na parte traseira do animal"
},
{ 
    nome: "Prime Rib Ovino",
    descricao: "O Prime Rib ovino é sinônimo de sofisticação e sabor. Com uma generosa camada de gordura, que mantém a carne suculenta durante o cozimento, é ideal para aquela refeição que quer se destacar pelo aroma e pela textura macia. Serve como peça central em jantares especiais, onde seu sabor rico e presença marcante são celebrados. Corte localizado na parte superior da costela"
},
{ 
    nome: "Sela Inglesa Ovino",
    descricao: "A Sela Inglesa é o corte da parte traseira do lombo, incluindo o filé mignon. É um corte especial que oferece tanto apresentação quanto sabor excepcionais. Ideal para assados de forno, onde a carne pode ser apresentada inteira, destacando-se pela sua suculência e sabor delicado, mas rico. Sua textura é super macia e tem o sabor rico e suculento, com textura amanteigada. É ideal para grelhar e permite diversas combinações com molhos e acompanhamentos. Corte localizado na região lombar do cordeiro."
},
{ 
    nome: "Stinko Ovino",
    descricao: "Stinko Ovino é um corte saboroso e suculento, perfeito para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "T-Bone Ovino",
    descricao: "O T-Bone ovino combina o filé mignon com o contrafilé, separados por um osso em T. Este corte oferece o melhor de dois mundos: a maciez do filé e o sabor intenso do contrafilé. Ideal para grelhar, proporciona uma experiência culinária rica e diversificada, perfeita para os amantes de carne que apreciam variedade e profundidade de sabor em um único corte. Região lombar do ovino."
},
{ 
    nome: "Carré da Bisteca",
    descricao: "Carré da Bisteca é um corte suculento e saboroso, conhecido por sua carne macia e suculenta. Ideal para grelhados e assados, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Pernil com Osso",
    descricao: "O Pernil Com Osso ovino é um corte majestoso, ideal para assados festivos e ocasiões especiais. O osso contribui para um sabor mais intenso e uma apresentação impressionante. A carne, quando assada lentamente, torna-se incrivelmente suculenta, com uma textura que desmancha na boca.  Ideal para temperar com ervas aromáticas! Localizada na parte traseira do animal, esse corte se torna o centro das atenções em qualquer mesa."
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




