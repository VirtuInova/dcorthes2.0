import costela from './Costela-Especial-Ovino.webp'
import guisado from './Guisado-Pescoço-Ovino..webp'
import paleta from './Paleta-Ovino.webp'
import sarapatel from './Sarapatel-Ovino.webp'

type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
    {nome: "Costela Especial Ovino" , src: costela},
    {nome: "Guisado Pescoço Ovino", src:guisado}, 
    {nome:"Paleta Ovino", src:paleta},
    {nome:"Sarapatel Ovino", src:sarapatel}
]
export default lista