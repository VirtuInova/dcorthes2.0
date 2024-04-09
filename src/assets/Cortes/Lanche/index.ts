import espSuino from './Espetinho-Suíno.webp'
import esp from './Espetinho-Ovino.webp'
import ham from './Hamburguer-Ovino.webp'

type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
    {nome: "Espetinho Suíno" , src: espSuino},
    {nome: "Espetinho Ovino", src:esp}, 
    {nome:"Hamburguer Ovino", src:ham}
]
export default lista