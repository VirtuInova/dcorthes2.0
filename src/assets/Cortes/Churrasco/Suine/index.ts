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
    {nome:"Carré Francês", src:carre},
]
export default lista