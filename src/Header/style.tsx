import React, { useState } from "react";
import { buttonHeader, logoHeader } from "../assets"
import Modal from 'react-modal';
import { Pivot as Hamburger } from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'

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
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [open, setOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleOnOpen() {
        setOpen(true);
    }
    function handleOnClose() {
        setOpen(false);
    }

    return (
        <>
        <Menu  disableAutoFocus styles={{bmBurgerButton:{display:"none"}, bmBurgerBars:{display:"none"}}}  width={ 250 } isOpen={open} onOpen={ handleOnOpen } onClose={ handleOnClose } className="pt-[20vw] bg-white">
            <a id="sobre" className="menu-item" href="/"><h1 className="text-black text-[4vw]">Home</h1></a>
            <a id="sobre" className="menu-item" href="/sobre"><h1 className="text-black text-[4vw] mt-[5%]">Sobre</h1></a>
            <a id="produtos" className="menu-item" href="/produtos"><h1 className="text-black text-[4vw] mt-[5%]">Produtos</h1></a>
            <a id="cortes" className="menu-item" href="/cortes"><h1 className="text-black text-[4vw] mt-[5%]">Cortes</h1></a>
            <a id="mapa" className="menu-item" href="/mapa"><h1 className="text-black text-[4vw] mt-[5%]">Mapa</h1></a>
        </Menu>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >  
                <div className="flex w-[90%] justify-center mt-[2vw]">
                    <h2 className="text-black text-[2vw]">Entre em contato com a D'Corthes</h2>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div id="info" className="flex-wrap w-[50%]">
                            <input placeholder="Nome" className="w-[50%] text-[1vw] px-[2vw] mr-[2vw] mb-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300"></input>
                            <input placeholder="Celular" className="w-[26%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="CPF" className="w-[20%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="Cidade" className="w-[20%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="Tipo de negócio" className="w-[30%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <input placeholder="E-mail" className="w-[44%] text-[1vw] px-[2vw] h-[3vw] rounded-[0.5vw] bg-slate-300 mr-[2vw] mb-[2vw]"></input>
                            <button className="w-[30%] bg-black h-[3vw]"><h1 className="text-[1vw]">Cadastrar</h1></button>
                    </div>
                </div>
                
        </Modal>
        <div className="w-full h-[10vw] bg-[black] flex max-[425px]:h-[20vw]" style={{alignItems:"center"}}>
        {Image()}
        {Options()}
        <div className="w-[15vw] h-[10vw] flex justify-center ml-[4%]" style={{alignItems:"center"}}>
            <a href="#" onClick={openModal} className="max-[425px]:hidden"><img src={buttonHeader}/></a>
            <div className="min-[426px]:hidden "><Hamburger onToggle={handleOnOpen} toggled={open} color="white" size={30} hideOutline={true}/></div>
        
        </div>
    </div>
        </>
    )
} 

function Image(){
    return (
        <div className="w-[20%] max-[425px]:w-[30%] h-[10vw] flex justify-center ml-[2vw] max-[425px]:ml-[4vw] max-[425px]:h-[20vw]" style={{alignItems:"center"}}>
            <a href="/" ><img src={logoHeader} className="max-[425px]:h-[20vw]"/></a>
        </div>
    
    )
}

function Options(){
    return ( 
        <div className="w-[50%] ml-[5%] flex row-auto justify-between ">
            <a href="/sobre" className="max-[425px]:hidden"><h1 >Sobre</h1></a>
            <a href="/cortes" className="max-[425px]:hidden"><h1>Nossos Cortes</h1></a>
            {/* <h1>Cozinha Nobre</h1> */}
            <a href="/produtos" className="max-[425px]:hidden"><h1>Produtos</h1></a>
            {/* <h1>Parcerias</h1> */}
        </div>
    )
}