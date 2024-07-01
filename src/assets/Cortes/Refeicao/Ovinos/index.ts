import costela from './COSTELA-PRIME-OVINO-EMBALADO.png'
import guisado from './GUISADO-ENSOPADO-OVINO.png'
import paleta from './PALETA-OVINA-EMBALADA-1.png'
import sarapatel from './SARAPATEL-OVINO-EMBALADO.png'

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