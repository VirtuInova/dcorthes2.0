import carre from './Carré-da-bisteca-Suíno.webp'
import costela from './Costela-Suína.webp'
import joelho from './Joelho-Suíno.webp'
import paleta from './Paleta-Suína.webp'
import pes from './Pés-Suíno.webp'
import toucinho from './Toucinho-Suíno.webp'

type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
    {nome: "Carré-da-bisteca" , src: carre},
    {nome: "Costela", src:costela}, 
    {nome: "Paleta", src:paleta}, 
    {nome:"Joelho", src:joelho},
    {nome:"Pés", src:pes},
    {nome:"Toucinho", src:toucinho}
]
export default lista