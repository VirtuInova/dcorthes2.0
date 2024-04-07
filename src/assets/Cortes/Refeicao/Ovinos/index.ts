import costela from './Costela-Especial-Ovino.jpg'
import guisado from './Guisado-Pescoço-Ovino..jpg'
import paleta from './Paleta-Ovino.jpg'
import sarapatel from './Sarapatel-Ovino.jpg'

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