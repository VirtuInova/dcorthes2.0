import React from "react";
import { bg02mapa, bgmapa, catalogo, mapa, } from "../assets"
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';
import { Formik } from "formik";
import emailjs from '@emailjs/browser';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


export function Container (){
    const bg2 = `url(${bg02mapa})`;
    const h01 = `url(${bgmapa})`;
    const h02 = `url(${mapa})`;

    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [sending, setSending] = React.useState(false);

    
    return (
        <>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >  
                <div className="flex w-[90%] justify-center mt-[2vw]">
                    <h2 className="text-black text-[2vw]">Entre em contato com a D'Corthes</h2>
                </div>
                <Formik
                            initialValues={{"Nome": "",
                            "Idade": "",
                            "Celular": "",
                            "CPF": "",
                            "Estado": "",
                            "E-mail": "",
                        }}
                            onSubmit={async function send (values){
                                 setSending(true)
                                 const params = {
                                    message: `Nome: ${values.Nome}, 
                                    Telefone: ${values.Celular}, 
                                    Email: ${values["E-mail"]} , 
                                    CPF: ${values.CPF}, 
                                    Idade: ${values.Idade}, 
                                    Estado: ${values.Estado}`
                                }
                                    emailjs.send('service_xkzbnlg', 'template_v6s9ybk', params, '50tNXyTFF0JinzHnv').then(()=>{setSending(false)}).catch(()=>{setSending(false)})

                                }
                            
                               
                            }
                        >{({handleChange, handleSubmit, handleReset}) =>
                        
                        <div className="flex justify-center my-[5vw]">
                            <div id="info" className="flex-wrap w-[50%]">
                            <input required onChange={handleChange("Nome")} placeholder="Nome"  className="w-[50%] placeholder-black text-black max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] max-[425px]:w-[60%] text-[1vw] px-[2vw] mr-[2vw] mb-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300"></input>
                        <input required type="number" onChange={handleChange("Idade")} placeholder="Idade" className="w-[20%] placeholder-black text-black max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input required type="number" onChange={handleChange("Celular")} placeholder="Celular" className="w-[26%] placeholder-black text-black max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] max-[425px]:w-[60%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input required type="number" onChange={handleChange("CPF")} placeholder="CPF" className="w-[20%] placeholder-black text-black max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input required onChange={handleChange("Estado")} placeholder="Estado" className="w-[20%] placeholder-black text-black  text-[1vw] max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <input required type="email" onChange={handleChange("E-mail")} placeholder="E-mail" className="w-[44%] placeholder-black text-black  max-[425px]:max-[425px]:text-[3vw] max-[425px]:h-[4vw] max-[425px]:w-[60%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                        <button style={{display:`${sending ? "" : "none"}`}} className="w-[30%] bg-blue h-[3vw] placeholder-black text-black max-[425px]:pb-[4vw]"><h1 className="text-[1vw] max-[425px]:max-[425px]:text-[3vw]">Aguarde...</h1></button>
                        <button style={{display:`${sending ? "none" : ""}`}} onClick={()=>{handleSubmit()}} className="w-[30%] bg-black h-[3vw] max-[425px]:pb-[4vw]"><h1 className="text-[1vw] max-[425px]:max-[425px]:text-[3vw]">Cadastrar</h1></button>
                                    <button className="w-[30%] bg-black h-[3vw]"><h1 className="text-[1vw]">Cadastrar</h1></button>
                            </div>
                        </div>
                        }</Formik>
                
                
            </Modal>

            <div className="w-full min-h-[100vh]" style={{alignItems:"center"}}>
                <div className={`w-full h-[34vw] items-center flex px-[10vw]`} style={{backgroundImage:h01, backgroundSize: 'cover'}}>
                </div>
                <div className={`w-full h-[79vw] flex justify-center items-center  max-[425px]:h-[110vw]`} style={{backgroundImage:h02, backgroundSize: 'cover'}}>
                        
                </div>
                <div className={`w-full h-[50vw] max-[425px]:h-[160vw] flex justify-start p-[10vw] items-start`} style={{backgroundImage:bg2, backgroundSize: 'cover'}}>
                        <div className="w-[50%] max-[425px]:w-full  max-[425px]:mt-[10vw]">
                            <h2 className="text-black text-left text-[3vw] max-[425px]:text-[5vw]">Quer montar um menu com qualidade e produtos de excelência?</h2>
                            <h1 className="text-black text-left text-[1.5vw] mt-[2vw] max-[425px]:text-[3vw]">Contamos com a experiência da Chef e consultoda gastronômica Rose Mardoll. Todos os restaurantes que estamos hoje tem seu menu assinados
                                completamente pela Chef.
                            </h1>
                            <div className="mt-[2vw] w-full flex justify-between max-[425px]:mt-[10vw]">
                                <button onClick={openModal} className="bg-black w-[18vw] h-[3vw] mr-[2%] max-[425px]:h-[12vw] max-[425px]:w-[30vw]"><h2 className="text-[0.8vw] max-[425px]:text-[2vw]" >PRECISO DE UM ESPECIALISTA</h2></button>
                                <button onClick={()=>{window.open(catalogo)}} className="bg-white w-[18vw] h-[3vw] max-[425px]:h-[12vw] max-[425px]:w-[30vw]"><h2 className="text-[0.8vw] text-black max-[425px]:text-[2vw] ">CATÁLOGO DE CORTES</h2></button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
} 

