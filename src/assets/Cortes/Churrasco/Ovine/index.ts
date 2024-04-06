import alcatra from './Alcatra-completa-Ovino.jpg'
import carre from './Carré-Francês-Ovino.jpg'
import costela from './Costela-Prime-Ovino.jpg'
import costelaripa from './Costela-Ripa-Ovino.jpg'
import carreShort from './Carré-Short-Ovino.jpg'
import coxaoMole from './Coxão-Mole-Ovino.jpg'
import file from './Filé-Mignon-Ovino.jpg'
import lagarto from './Lagarto-Coxão-Duro-Ovino.jpg'
import ossobuco from './Ossobuco-Ovino.jpg'
import patinho from './Patinho-Ovino.jpg'
import pernil from './Pernil-Dessosado-Ovino.jpg'
import primeRib from './Prime-Rib-Ovino.jpg'
import selaInglesa from './Sela-Inglesa-Ovino.jpg'
import stinko from './Stinko-Ovino.jpg'
import tbone from './T-Bone-Ovino.jpg'

type Lista = {
    nome: string
    src: string
}
const lista: Lista[] = [
    {nome: "Alcatra Completa" , src: alcatra},
    {nome: "Carré Francês", src:carre}, 
    {nome:"Costela Prime", src:costela},
    {nome:"Costela Ripa", src:costelaripa},
    {nome:"Carré Short", src:carreShort},
    {nome:"Coxão Mole", src:coxaoMole},
    {nome:"Filé Mignon", src:file},
    {nome:"Lagarto Coxão Duro", src:lagarto},
    {nome:"Ossobuco", src:ossobuco},
    {nome:"Patinho", src:patinho},
    {nome:"Pernil Dessosado", src:pernil},
    {nome:"Prime Rib", src:primeRib},
    {nome:"Sela Inglesa", src:selaInglesa},
    {nome:"Stinko", src:stinko},
    {nome:"T-Bone", src:tbone},
]
export default lista