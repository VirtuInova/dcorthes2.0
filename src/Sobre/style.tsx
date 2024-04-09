import { faq, heroSobre, infancia, linhaTempo, porco} from "../assets"
import 'react-multi-carousel/lib/styles.css';
import Faq from "react-faq-component";

const data = {
    title: "Perguntas frequentes",
    rows: [
        {
            title: "Onde a D’Corthes atua?",
            content: `O SISBI (Sistema Brasileiro de Inspeção de Produtos de Origem Animal) responsável pela emissão do S.I.E (selo de inspeção estadual) regulamenta a comercialização dos nossos cortes dentro do Estado do Piauí. A D'Corthes Carnes Nobres possui o registro do selo de inspeção estadual emitido pela ADAPI (Agência de Defesa Agropecuária do Piauí). Portanto, todos os produtos podem ser comercializados em todo o estado do Piauí.`,
        },
        {
            title: "Vocês fazem entrega à domicílio?",
            content:
                "Ainda não fazemos entrega a domicílio, mas já temos um leque de pontos de venda que trabalham com entrega a domicílio. Alguns pontos de vendas tem app próprio e realizam entrega.",
        },
        {
            title: "Como faço para ser um revendedor (atacado)?",
            content: `Pedimos que você preencha o formulário que se encontra nesse site! Iremos tirar todas as suas dúvidas para consolidarmos uma parceria especial. Conheça e leve a excelência de cortes de cordeiro e de suíno de qualidade para seu empreendimento.`,
        },
        {
            title: "Como faço para ser um representante comercial?",
            content: "Pedimos que você preencha o formulário que se encontra nesse site! Iremos responder e apresentar um plano de trabalho de representação comercial.",
        },
        {
            title: "Como funciona o fornecimento para restaurantes?",
            content: "Pedimos que você preencha o formulário que se encontra nesse site! Iremos responder imediatamente.  Conheça e leve a excelência de cortes de cordeiro e de suíno de qualidade para seu empreendimento.",
        },
        {
            title: "Em quais restaurantes posso consumir os cortes?",
            content: "No momento você nos encontra nos seguintes locais:Armazém Dom Severino - Av. Dom Severino, 2190 - Horto Florestal, Teresina - PI, 64051-160 WCarnes - Av. Jóquei Clube, 1473 - Jóquei, Teresina - PI, 64049-240 JM Frigorífico - Av. Prof. Camilo Filho, 8046 - Todos Os Santos, Teresina - PI, 64091-095",
        },
        {
            title: "Como faço para ser um representante comercial?",
            content: "Estamos em alguns cardápios pela cidade: Boteco do Zé -  Rua Professor Joca Vieira, 1401 - Fátima, Teresina - PI, 64049-514 Mangangá Leste -  Rua Professor Joca Vieira, 909 - Jóquei, Teresina - PI, 64049-514 Mangangá Sul -  Av. Prof. Valter Alencar, 2021 - Monte Castelo, Teresina - PI, 64017-425 Vila Rodeio - R. Rui Barbosa, 2350 - Pirajá, Teresina - PI, 64001-090",
        },
        {
            title: "Como agendar uma visita na Unidade de Beneficiamento?",
            content: "Envie um e-mail para administrativo@dcorthes.com.br com o assunto 'SOLICITAÇÃO - EMAIL DE VISITA NA UBC D'CORTHES'. Encaminharemos um formulário com as perguntas necessárias para agendar a visita!",
        },
        {
            title: "Quero participar do cozinha nobre.",
            content: "Para participar do nosso programa de receitas 'Cozinha Nobre' basta entrar em contato com nosso e-mail instiucional@dcorthes.com.br",
        },
        {
            title: "Quais as opções de carnes?",
            content: "Baixe no nosso site nosso catálogo ou consulte a aba “Nossos Cortes” ",
        },
        {
            title: "Quero trabalhar com a empresa.",
            content: "Envie um e-mail para administrativo@dcorthes.com.br com o assunto “VAGA DE TRABALHO”. Encaminharemos um formulário de coleta de dados.",
        },

    ],
};

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    titleTextSize: "3vw",
    rowContentTextSize:"3vw",
    rowTitleTextSize: "3vw"
};


export function Container (){
    const hs = `url(${heroSobre})`; 
    
    return (
    <div className="w-full bg-[white]" style={{alignItems:"center"}}>
        <div className={`w-full h-[45vw] px-[10vw]  max-[425px]:h-[110vw]`} style={{backgroundImage:hs, backgroundSize: 'cover'}}>
            <div className="pl-[6vw] max-[425px]:pl-[0]">
                <h5 className="text-white text-left pt-[8vw] max-[425px]:text-[6vw]">Quem Somos</h5>
                <div className="w-[80%] max-[425px]:w-[90%]">
                    <h1 className="text-left text-[1vw] mt-[5%] max-[425px]:text-[3vw] "> Somos a nova referência em <b>cortes primorosos de ovinos e suínos.</b></h1>
                    <h1 className="text-left text-[1vw] mt-[5%] max-[425px]:text-[3vw]" >  Nossos passos são firmes e guiados pelo cultivo da 
                    excelência. Nossa motivação é trazer produtos
                    impecáveis para o mercado gastronômico nacio
                    nal.</h1>
                    <h1 className="text-left text-[1vw] mt-[5%] max-[425px]:text-[3vw]">  Enraizados no passado, mas com um olhar que 
                    desafia o presente, a D’Corthes Carnes Nobres 
                    convida você a degustar não apenas a carne, mas 
                    a nossa essência – a pura arte de servir bem. </h1>
                    <h1 className="text-left text-[1vw] mt-[5%] max-[425px]:text-[3vw]"> A D’Corthes Carnes Nobres destaca-se, ainda, 
                    pela conformidade de sua Unidade de Beneficia
                    mento de Carnes em apresentar o Selo de Inspe
                    ção Estadual ADAPI/SIE/PI sob nº006/069.</h1>
                </div>
            </div>
            
        </div>
        
        <div className="h-[160vw] max-[425px]:h-[400vw]">
            <div className={`w-full h-[40vw] max-[425px]:h-[60vw]`}>
                <div className="flex justify-between px-[10vw] max-[425px]:pr-[0] mt-[5%] max-[425px]:flex-wrap" >
                        <div className="w-[40%] max-[425px]:w-[80%]">
                                <h5 className="text-black text-left text-[2.5vw] mb-[7%] max-[425px]:text-[6vw]">Nossa história</h5>
                                <h1 className="text-black text-left mt-[2%] max-[425px]:text-[3vw]"> Nós, da D’Corthes Carnes Nobres, temos uma história que nos enche de orgulho! </h1>
                                
                                <h5 className="text-black text-left text-[2.5vw] mb-[7%] mt-[13%] max-[425px]:text-[6vw]">1991 - O começo</h5>
                                <h1 className="text-black text-left mt-[2%] max-[425px]:text-[3vw] max-[425px]:text-justify"> Anterior à nossa história e essencial para nosso sucesso, a Duporco 
                                Agronegócio foi fundada em 1991, oriunda de uma pequena criação 
                                de suínos no Povoado São Domingos, zona rural de Teresina (PI).</h1>

                                <h2 className="text-black text-left mt-[2%] max-[425px]:text-[3vw] max-[425px]:text-justify" >A D'Cortes é fruto de uma jornada inspiradora que começou há dé
                                cadas, quando nossos fundadores perceberam a necessidade de 
                                elevar os padrões da indústria de cortes de carne.</h2>
                        </div>

                    <div>
                        <img src={infancia} className="h-[30vw] max-[425px]:h-[70vw] max-[425px]:mt-[5vw]"></img>
                    </div>
                </div>
            
                <div className="flex w-full max-[425px]:mt-[20vw]">
                    <img src={porco} className="h-[15vw] max-[425px]:h-[25vw]"></img>
                    <div className="flex justify-center w-[50%] max-[425px]:w-[65%]  ml-[2vw]">
                        <img src={linhaTempo} className="object-contain h-[15vw] max-[425px]:h-[25vw] "></img>
                    </div>
                </div>

                <div id="missao" className="bg-black h-[50vw] max-[425px]:h-[130vw]">
                    <h5 className="text-white pt-[3%] max-[425px]:text-[5vw]">Aqui todos os MOMENTOS são nobres!</h5>
                    <div className="flex items-end max-[425px]:items-center h-full max-[425px]:h-[90%] justify-between max-[425px]:mt-[2%] px-[10vw] max-[425px]:flex-wrap">
                        <div className="w-[30%] max-[425px]:w-full px-[2vw] pt-[1vw] border-white bg-white h-[30vw] max-[425px]:h-[35vw] rounded-[1vw]">
                            <h2 className="text-black text-[2w] text-left max-[425px]:text-[4vw]" >Missão</h2>
                            <h1 className="text-black mt-[2vw] text-[1vw] text-justify max-[425px]:text-[3vw]">Oferecer alimentos de origem animal com qualidade, praticidade, confiança e segurança. Ser um elo de conexão entre pessoas que amam compartilhar momentos, conhecimento e inovação. Apoiar o desenvolvimento científico e tecnológico no âmbito da produção animal.</h1>
                        </div>
                        <div className="w-[30%] max-[425px]:w-full max-[425px]:mt-[1%] px-[2vw] pt-[1vw] max-[425px]:h-[35vw] border-white bg-white h-[30vw] rounded-[1vw]">
                            <h2 className="text-black text-[2vw] text-left max-[425px]:text-[4vw]" >Visão</h2>
                            <h1 className="text-black mt-[2vw] text-[1vw] text-justify max-[425px]:text-[3vw] ">Sonhamos grande! Queremos ser o nome 
                            que vem à mente e ao coração quando se 
                            pensa em alimentos de origem animal. 
                            Almejamos ser uma referência, não só 
                            pela qualidade dos nossos produtos e 
                            serviços, mas pela maneira como nos
                            relacionamos com clientes, colaborado
                            res e fornecedores. </h1>
                        </div>
                        <div className="w-[30%] max-[425px]:w-full max-[425px]:mt-[2%] max-[425px]:h-[25vw] px-[2vw] pt-[1vw] border-white bg-white h-[30vw] rounded-[1vw]">
                            <h2 className="text-black text-[2vw] text-left max-[425px]:text-[4vw]" >Valores</h2>
                            <h1 className="text-black mt-[2vw] text-[1vw] text-left max-[425px]:text-[3vw]" >Colaboração, Excelência, Inovação, Capricho, Responsabilidade Socioambiental, Visão Integrada, Referência, Empatia e Simpatia</h1>
                        </div>
                    
                    </div>
                </div>

                <div id="faq" className="bg-white mb-[10%] h-[50vw] flex-wrap justify-between px-[10vw] mt-[5vw]">
                    <img src={faq} className="h-[30%]"></img>
                    <div className="h-[40vw] mt-[2%] overflow-y-scroll">
                        <Faq
                            data={data}
                            styles={styles}
                        />
                    </div>
                    
                </div>
            </div>
      </div>

    </div>)
} 




