import alcatra from './Alcatra-Suína.jpg'
import bife from './Bife-Ancho-Suíno.jpg'
import carre from './Carré-Francês-Suíno.jpg'
import coxao from './Coxão-Duro-Suíno.jpg'
import coxaoMole from './Coxão-Mole-Suíno.jpg'
import file from './Filé-Mignon-Suíno.jpg'
import lagarto from './Lagarto-Suíno.jpg'
import maminha from './Maminha-Suína.jpg'
import ossobuco from './Ossobuco-Suíno.jpg'
import pancheta from './Panceta-Suíno.jpg'
import patinho from './Patinho-Suíno.jpg'
import porqueta from './Porqueta-Suíno.jpg'
import primeRib from './Prime-Rib-Suíno.jpg'
import shortRib from './Short-Rib-Suíno.jpg'
import suan from './Suan-Suíno.jpg'
import tbone from './T-Bone-Suíno.jpg'
import tomahawk from './Tomahawk-Suíno.jpg'
import costela from './Costela-Suína.jpg'
import joelho from './Joelho-Suíno.jpg'
import paleta from './Paleta-Suína.jpg'
import pes from './Pés-Suíno.jpg'
import toucinho from './Toucinho-Suíno.jpg'
import espSuino from './Espetinho-Suíno.jpg'
import carreB from './Carré-da-bisteca-Suíno.jpg'
import pernil from './Pernil-com-osso-Suíno.jpg'
import picanha from './Picanha-Suíno.jpg'
type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
    {nome: "Carré da Bisteca" , src: carreB},
    {nome: "Pernil com Osso" , src: pernil},
    {nome: "Picanha" , src: picanha},
    {nome: "Alcatra Suína" , src: alcatra},
    {nome: "Bife Ancho", src:bife}, 
    {nome:"Coxão Duro", src:coxao},
    {nome:"Coxão Mole", src:coxaoMole},
    {nome:"Filé Mignon", src:file},
    {nome:"Maminha", src:maminha},
    {nome:"Ossobuco", src:ossobuco},
    {nome:"Panceta", src:pancheta},
    {nome:"Patinho", src:patinho},
    {nome:"Porqueta", src:porqueta},
    {nome:"Prime Rib", src:primeRib},
    {nome:"Short-Rib", src:shortRib},
    {nome:"Suan", src:suan},
    {nome:"T-Bone", src:tbone},
    {nome:"Tomahawk", src:tomahawk},
    {nome:"Lagarto", src:lagarto},
    {nome:"Carré Francês", src:carre},
    {nome: "Espetinho Suíno" , src: espSuino},
    {nome: "Carré-da-bisteca" , src: carre},
    {nome: "Costela", src:costela}, 
    {nome: "Paleta", src:paleta}, 
    {nome:"Joelho", src:joelho},
    {nome:"Pés", src:pes},
    {nome:"Toucinho", src:toucinho}
]
export default lista