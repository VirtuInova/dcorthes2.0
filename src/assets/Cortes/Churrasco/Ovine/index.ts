import alcatra from './ALCATRACOMPLETA-PICANHA-OVINO-EMBALADO.png'
import carre from './CARRÉ-FRANCÊS-OVINO-EMBALADO.png'
import costela from './COSTELA-PRIME-OVINO-EMBALADO.png'
import costelaripa from './COSTELA-RIPA-OVINO-EMBALADO.png'
import carreShort from './CARRÉ-FRANCÊS-OVINO-EMBALADO.png'
import coxaoMole from './COXÃO-MOLE-OVINO-EMBALADO.png'
import file from './FILÉ-MIGNON-OVINO-EMBALADO.png'
import lagarto from './COXÃO-DURO-COM-LAGARTO-OVINO-EMBALADO.png'
// import ossobuco from './Ossobuco-Ovino.webp'
import patinho from './PATINHO-OVINO-EMBALADO.png'
import pernil from './PERNIL-DESSOSADO-OVINO-EMBALADO.png'
import primeRib from './PRIMERIB-OVINO-EMBALADO-2.png'
import selaInglesa from './SELA-INGLESA-OVINO-EMBALADO.png'
import stinko from './STINCO-OVINO-EMBALADO-1.png'
// import tbone from './T-Bone-Ovino.webp'

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
    // {nome:"Ossobuco Ovino", src:ossobuco},
    {nome:"Patinho Ovino", src:patinho},
    {nome:"Pernil Dessosado Ovino", src:pernil},
    {nome:"Prime Rib Ovino", src:primeRib},
    {nome:"Sela Inglesa Ovino", src:selaInglesa},
    {nome:"Stinko Ovino", src:stinko},
    // {nome:"T-Bone Ovino", src:tbone},
]
export default lista