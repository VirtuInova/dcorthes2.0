import alcatra from './Alcatra-completa-Ovino.webp'
import carre from './Carré-Francês-Ovino.webp'
import costela from './Costela-Prime-Ovino.webp'
import costelaripa from './Costela-Ripa-Ovino.webp'
import carreShort from './Carré-Short-Ovino.webp'
import coxaoMole from './Coxão-Mole-Ovino.webp'
import file from './Filé-Mignon-Ovino.webp'
import lagarto from './Lagarto-Coxão-Duro-Ovino.webp'
import ossobuco from './Ossobuco-Ovino.webp'
import patinho from './Patinho-Ovino.webp'
import pernil from './Pernil-Dessosado-Ovino.webp'
import primeRib from './Prime-Rib-Ovino.webp'
import selaInglesa from './Sela-Inglesa-Ovino.webp'
import stinko from './Stinko-Ovino.webp'
import tbone from './T-Bone-Ovino.webp'

type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
    {nome: "Alcatra Completa Ovino", src: alcatra},
    {nome: "Carré Francês Ovino", src:carre}, 
    {nome:"Costela Prime Ovino", src:costela},
    {nome:"Costela Ripa Ovino", src:costelaripa},
    {nome:"Carré Short Ovino", src:carreShort},
    {nome:"Coxão Mole Ovino", src:coxaoMole},
    {nome:"Filé Mignon Ovino", src:file},
    {nome:"Lagarto Coxão Duro Ovino", src:lagarto},
    {nome:"Ossobuco Ovino", src:ossobuco},
    {nome:"Patinho Ovino", src:patinho},
    {nome:"Pernil Dessosado Ovino", src:pernil},
    {nome:"Prime Rib Ovino", src:primeRib},
    {nome:"Sela Inglesa Ovino", src:selaInglesa},
    {nome:"Stinko Ovino", src:stinko},
    {nome:"T-Bone Ovino", src:tbone},
]
export default lista