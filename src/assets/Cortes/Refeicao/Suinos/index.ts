import carre from './Carré-da-bisteca-Suíno.jpg'
import costela from './Costela-Suína.jpg'
import joelho from './Joelho-Suíno.jpg'
import paleta from './Paleta-Suína.jpg'
import pes from './Pés-Suíno.jpg'
import toucinho from './Toucinho-Suíno.jpg'

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