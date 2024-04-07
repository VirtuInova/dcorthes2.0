import esp from './Espetinho-Ovino.jpg'
import ham from './Hamburguer-Ovino.jpg'
import alcatra from './Alcatra-completa-Ovino.jpg'
import carre from './Carré-Francês-Ovino.jpg'
import costela from './Costela-Prime-Ovino.jpg'
import costelaripa from './Costela-Ripa-Ovino.jpg'
import carreShort from './Carré-Short-Ovino.jpg'
import coxaoMole from './Coxão-Mole-Ovino.jpg'
import file from './Filé-Mignon-Ovino.jpg'
import lagarto from './Lagarto-Coxão-Duro-Ovino.jpg'
import ossobuco from './Ossobuco-Ovino.jpg'
import patinho from './Patinho-Ovino.jpg'
import pernil from './Pernil-Dessosado-Ovino.jpg'
import primeRib from './Prime-Rib-Ovino.jpg'
import selaInglesa from './Sela-Inglesa-Ovino.jpg'
import stinko from './Stinko-Ovino.jpg'
import tbone from './T-Bone-Ovino.jpg'
import cEspecial from './Costela-Especial-Ovino.jpg'
import guisadoP from './Guisado-Pescoço-Ovino..jpg'
import paleta from './Paleta-Ovino.jpg'
import paletaD from './Paleta-Desossada-Ovino.jpg'
import sarapatel from './Sarapatel-Ovino.jpg'

type Lista = {
    nome: string
    src: string
}

const lista: Lista[] = [
    {nome: "Costela Especial Ovino", src:cEspecial}, 
    {nome: "Guisado Pescoço Ovino", src:guisadoP}, 
    {nome: "Paleta Ovino", src:paleta}, 
    {nome: "Paleta Desossada Ovino", src:paletaD}, 
    {nome: "Sarapatel Ovino", src:sarapatel}, 
    {nome: "Espetinho Ovino", src:esp}, 
    {nome:"Hamburguer Ovino", src:ham},
    {nome: "Alcatra Completa Ovino" , src: alcatra},
    {nome: "Carré Francês Ovino", src:carre}, 
    {nome:"Costela Prime Ovino", src:costela},
    {nome:"Costela Ripa Ovino", src:costelaripa},
    {nome:"Carré Short Ovino", src:carreShort},
    {nome:"Coxão Mole Ovino", src:coxaoMole},
    {nome:"Filé Mignon Ovino", src:file},
    {nome:"Lagarto Coxão Duro Ovino", src:lagarto},
    {nome:"Ossobuco Ovino", src:ossobuco},
    {nome:"Patinho Ovino", src:patinho},
    {nome:"Pernil Dessosado Ovino", src:pernil},
    {nome:"Prime Rib Ovino", src:primeRib},
    {nome:"Sela Inglesa Ovino", src:selaInglesa},
    {nome:"Stinko Ovino", src:stinko},
    {nome:"T-Bone Ovino", src:tbone},
]
export default lista