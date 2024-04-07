import alcatra from './Alcatra-Suína.webp'
import bife from './Bife-Ancho-Suíno.webp'
import carre from './Carré-Francês-Suíno.webp'
import coxao from './Coxão-Duro-Suíno.webp'
import coxaoMole from './Coxão-Mole-Suíno.webp'
import file from './Filé-Mignon-Suíno.webp'
import lagarto from './Lagarto-Suíno.webp'
import maminha from './Maminha-Suína.webp'
import ossobuco from './Ossobuco-Suíno.webp'
import pancheta from './Panceta-Suíno.webp'
import patinho from './Patinho-Suíno.webp'
import porqueta from './Porqueta-Suíno.webp'
import primeRib from './Prime-Rib-Suíno.webp'
import shortRib from './Short-Rib-Suíno.webp'
import suan from './Suan-Suíno.webp'
import tbone from './T-Bone-Suíno.webp'
import tomahawk from './Tomahawk-Suíno.webp'
import costela from './Costela-Suína.webp'
import joelho from './Joelho-Suíno.webp'
import paleta from './Paleta-Suína.webp'
import pes from './Pés-Suíno.webp'
import toucinho from './Toucinho-Suíno.webp'
import espSuino from './Espetinho-Suíno.webp'
import carreB from './Carré-da-bisteca-Suíno.webp'
import pernil from './Pernil-com-osso-Suíno.webp'
import picanha from './Picanha-Suíno.webp'
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