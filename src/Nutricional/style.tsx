import 'react-multi-carousel/lib/styles.css';
import listaOvino from "../assets/Cortes/Ovinos";
import listaSuino from "../assets/Cortes/Suinos";
import Modal from 'react-modal';

import { useParams } from 'react-router-dom';
import React from 'react';

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
    descricao: "Retirada da parte traseira do suíno, a picanha suína é um corte suculento e macio, com um sabor suave e levemente adocicado. Ideal para grelhar ou assar, pode ser acompanhada por legumes grelhados e um bom vinho tinto. Um corte que vai elevar seu churrasco a outro nível!"
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
    descricao: "Extraído da parte traseira, o coxão duro é um corte mais firme, ideal para cozidos e ensopados. Seu sabor robusto combina bem com legumes e ervas aromáticas, além de um bom vinho tinto. Perfeito para aqueles dias em que você quer um prato reconfortante e cheio de sabor!"
},
{ 
    nome: "Coxão Mole",
    descricao: "Extraído da parte traseira, o coxão mole é mais macio e suculento. Perfeito para bifes e assados, pode ser acompanhado por arroz de forno e saladas variadas. Um corte versátil que vai agradar a todos os paladares!"
},
{ 
    nome: "Filé Mignon",
    descricao: "Extraído do lombo, o filé mignon é o corte mais macio do suíno, com sabor suave e textura delicada. Ideal para grelhar ou assar, pode ser servido com molhos cremosos e legumes assados. Um corte que vai derreter na boca e impressionar seus convidados!"
},
{ 
    nome: "Maminha",
    descricao: "Maminha Suína é um corte suculento e saboroso, ideal para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e refeições em família."
},
{ 
    nome: "Ossobuco",
    descricao: "Retirado da perna do suíno, o ossobuco é um corte com osso e tutano, ideal para cozidos e ensopados. Seu sabor intenso e textura macia combinam bem com polenta cremosa e legumes cozidos. Um prato que vai aquecer seu coração e sua alma!"
},
{ 
    nome: "Panceta",
    descricao: "Esse clássico é extraído da barriga do suíno, a panceta é um corte suculento e saboroso, com uma textura crocante quando assada. Ideal para grelhar ou assar, pode ser acompanhada por saladas frescas e molhos à base de vinagre. Um corte que vai fazer você se apaixonar pelo sabor do suíno!"
},
{ 
    nome: "Patinho",
    descricao: "Extraída da parte traseira, o patinho é um corte magro e macio, ideal para bifes e assados. Seu sabor suave combina bem com molhos à base de vinho e acompanhamentos como batatas assadas e saladas verdes. Um corte versátil que vai agradar a todos os paladares!"
},
{ 
    nome: "Porqueta",
    descricao: "Porqueta é um prato tradicional italiano feito com carne de porco assada lentamente. Com sua pele crocante e carne suculenta, este prato é uma iguaria apreciada em todo o mundo."
},
{ 
    nome: "Prime Rib",
    descricao: "Proveniente da parte superior da costela, o prime rib é um corte suculento e saboroso, com uma textura macia e marmorizada. Ideal para grelhar ou assar, pode ser acompanhado por batatas rústicas e chimichurri. Um corte que vai fazer você se sentir em um autêntico churrasco argentino!"
},
{ 
    nome: "Short-Rib",
    descricao: "Retirado da parte inferior da costela, o short rib é um corte suculento e saboroso, com uma textura macia e marmorizada. Ideal para grelhar ou assar, pode ser acompanhado por batatas rústicas e chimichurri. Um corte que vai fazer você se sentir em um autêntico churrasco argentino!"
},
{ 
    nome: "Suan",
    descricao: "Suan Suíno é um corte suculento e saboroso, perfeito para grelhados e assados rápidos. Com sua carne macia e suculenta, este corte é uma escolha popular para churrascos e eventos ao ar livre."
},
{ 
    nome: "T-Bone",
    descricao: "Proveniente da parte traseira do suíno, o T-Bone é um corte suculento e saboroso, com uma textura macia e marmorizada. Ideal para grelhar ou assar, pode ser acompanhado por batatas rústicas e chimichurri. Um corte que vai fazer você se sentir em um autêntico churrasco argentino!"
},
{ 
    nome: "Tomahawk",
    descricao: "Retirado da parte superior da costela, o tomahawk é um corte suculento e saboroso, com uma textura macia e marmorizada. É o prime rib e ancho junto com o maior dos ossos da costela. Ideal para grelhar ou assar, pode ser acompanhado por batatas rústicas e chimichurri. Um corte que pode abrilhantar sua ceia ou aquele churrasco especial."
},
{ 
    nome: "Lagarto",
    descricao: "Extraída da parte traseira, a maminha é um corte suculento e macio, com um sabor suave e levemente adocicado. Ideal para grelhar ou assar, pode ser acompanhada por legumes grelhados e um bom vinho tinto. Um corte que vai elevar seu churrasco a outro nível!"
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
    descricao: "Extraído da mesma região do carré francês (parte superior do lombo), esse corte tem maior extensão e é feito com uma finalização em formato de bisteca. O carré da bisteca é um corte suculento e saboroso, com uma textura macia e marmorizada. Ideal para grelhar ou assar, pode ser acompanhado por batatas rústicas e chimichurri."
},
{ 
    nome: "Costela",
    descricao: "Retirada da parte central do suíno, a costela em ripa é rica em sabor e possui uma textura suculenta. Ideal para churrascos, combina bem com farofa e vinagrete. Prepare-se para um churrasco inesquecível com esse corte clássico!"
},
{ 
    nome: "Paleta",
    descricao: "Proveniente da parte dianteira do suíno, a paleta é um corte suculento e saboroso, ideal para assados e cozidos. Seu sabor intenso e textura macia combinam bem com farofa e vinagrete. Um corte clássico que nunca sai de moda!"
},
{ 
    nome: "Joelho",
    descricao: "Extraído da parte traseira do suíno, o joelho é um corte suculento e saboroso, ideal para cozidos e ensopados. Seu sabor intenso e textura macia combinam bem com polenta cremosa e legumes cozidos.  Um prato que vai aquecer seu coração e sua alma!"
},
{ 
    nome: "Pés",
    descricao: "O pé é um corte suculento e saboroso, ideal para cozidos e ensopados. Seu sabor intenso e textura macia combinam bem com polenta cremosa e legumes cozidos. Um prato que vai aquecer seu coração e sua alma!"
},
{ 
    nome: "Toucinho",
    descricao: "Retalhos de couro/pele in natura extraídos do suíno ideal para temperar e fazer o tira-gosto mais tradicional do barzinho, a pururuca. Combinam bem com farofa e vinagrete, um clássico que nunca sai de moda!"
}
] 

export function Container (){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [image, setImage] = React.useState('');

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
    
    function setImageProps(image) {
        setImage(image);
    }

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
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><h1>X</h1></button>
        <div className='w-full flex justify-center items-center h-[35rem]'>
            <img src={image} className="object-cover min-h-[25rem] w-[25rem] rounded-[2vw] hover:border-black"/>   
        </div>
      </Modal>
      <div className="w-full bg-[white] min-h-[100vh]" style={{alignItems:"center"}}>
        
        <div className="h-[100vw] max-[425px]:h-[200vw] p-[8rem]">
            <div className={`w-full h-[40vw]`}> 
                <div className="flex justify-between px-[5rem] pt-[5%] max-[425px]:flex-wrap ">
                    <div className='h-[30vw] flex mr-[2vw] w-[30rem] max-[425px]:w-[50vw] max-[425px]:h-[50vw]'>
                    <button onClick={()=>{openModal(); setImageProps(corte?.src)}} className='h-[20rem] p-0 rounded-[2vw] w-[30rem] bg-white flex justify-center items-center'><img src={corte?.src} className="object-cover h-full w-full rounded-[2vw]"/></button>
                        <div className='ml-[1rem]'>
                            {corte?.srcEmbalado ? <button onClick={()=>{openModal(); setImageProps(corte?.srcEmbalado)}} className='h-[10rem] p-0  w-[10rem] bg-white  flex justify-center items-center'><img src={corte?.srcEmbalado} className="object-cover h-[10rem] w-[10rem] rounded-[2vw] hover:border-black"/></button> : null}
                            {corte?.srcNutricional ? <button onClick={()=>{openModal(); setImageProps(corte?.srcNutricional)}}className='h-[10rem] p-0  w-[10rem] bg-white flex justify-center items-center'><img src={corte?.srcNutricional} className="object-cover h-[10rem] w-[10rem] rounded-[2vw] hover:border-black"/></button>:null}
                        </div>
                    </div>
                        <div className="w-[40%] max-[425px]:w-full max-[425px]:mt-[3vw]">
                                <h2 className="text-black text-left text-[2.5vw] mb-[7%] max-[425px]:text-[4vw]">{nome}</h2>
                                <h1 className="text-black text-justify mt-[2%] max-[425px]:text-[3vw]">{corteSelecionado?.descricao}</h1>
                        </div>

                    
                </div>
            
                <div className="w-full mt-[4rem] pl-[5rem]">
                {corte?.nutri[3] &&
                    <>
                        <div>
                            <h1 className='text-left text-black max-[425px]:text-[3vw]'>INFORMAÇÃO NUTRICIONAL</h1>
                            <h1 className='text-left text-black mt-[1vw] max-[425px]:text-[3vw]'>Porção de 100g. Quantidade por porção %VD(*)</h1>
                        </div>

                        <div className="flex flex-wrap w-full  mt-[2vw] ">
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

    </div>
    </>
    
    )
} 




