import alcatra from './ALCATRA-SUÍNA-EMBALADO.png'
import bife from './Bife-Ancho-Suíno.webp'
import carre from './CARRÉ-FRANCÊS-SUÍNO-EMBALADO,.png'
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
import tomahawk from './Tomahawk-Suíno.webp'
import lombo from './LOMBO-SUÍNO-EMBALADA.png'
import picanha from './PICANHA-SUÍNA-EMBALADA.png'
import tbone from './T-BONE-SUÍNO-EMBALADO.png'
type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
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
    {nome:"Picanha Suína", src:lombo},
    {nome:"T-Bone", src:picanha},
    {nome:"Carré Francês", src:carre},
]
export default lista