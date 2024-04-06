import costela from './Costela-Especial-Ovino.jpg'
import guisado from './Guisado-Pescoço-Ovino..jpg'
import paleta from './Paleta-Ovino.jpg'
import sarapatel from './Sarapatel-Ovino.jpg'

type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
    {nome: "Costela-Especial" , src: costela},
    {nome: "Guisado-Pescoço", src:guisado}, 
    {nome:"Paleta", src:paleta},
    {nome:"Sarapatel", src:sarapatel}
]
export default lista