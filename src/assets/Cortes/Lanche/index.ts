import espSuino from './Espetinho-Suíno.jpg'
import esp from './Espetinho-Ovino.jpg'
import ham from './Hamburguer-Ovino.jpg'

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