import alcatra from './Alcatra-Suína.webp'
import bife from './Bife-Ancho-Suíno.webp'
import carre from './Carré-Francês-Suíno.webp'
import coxao from './Coxão-Duro-Suíno.webp'
import coxaoMole from './Coxão-Mole-Suíno.webp'
import file from './Filé-Mignon-Suíno.webp'
import lagarto from './Lagarto-Suíno.webp'
import maminha from './Maminha-Suína.webp'
import ossobuco from './Ossobuco-Suíno.webp'
import pancheta from './Panceta-Suíno.webp'
import patinho from './Patinho-Suíno.webp'
import porqueta from './Porqueta-Suíno.webp'
import primeRib from './Prime-Rib-Suíno.webp'
import shortRib from './Short-Rib-Suíno.webp'
import suan from './Suan-Suíno.webp'
import tbone from './T-Bone-Suíno.webp'
import tomahawk from './Tomahawk-Suíno.webp'
import costela from './Costela-Suína.webp'
import joelho from './Joelho-Suíno.webp'
import paleta from './Paleta-Suína.webp'
import pes from './Pés-Suíno.webp'
import toucinho from './Toucinho-Suíno.webp'
import espSuino from './Espetinho-Suíno.webp'
import carreB from './Carré-da-bisteca-Suíno.webp'
import pernil from './Pernil-com-osso-Suíno.webp'
import picanha from './Picanha-Suíno.webp'

type NutritionalInfo = {
    porcentagem: string;
    tipo: string;
    valor: number;
};

type Lista = {
    nome: string;
    src: string;
    nutri: NutritionalInfo[];
};

const lista: Lista[] = [
    {nome: "Carré da Bisteca" , src: carreB, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Pernil com Osso" , src: pernil, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Picanha" , src: picanha, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Alcatra Suína" , src: alcatra, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Bife Ancho", src:bife, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome:"Coxão Duro", src:coxao, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Coxão Mole", src:coxaoMole, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Filé Mignon", src:file, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Maminha", src:maminha, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Ossobuco", src:ossobuco, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Panceta", src:pancheta, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Patinho", src:patinho, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Porqueta", src:porqueta, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Prime Rib", src:primeRib, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Short-Rib", src:shortRib, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Suan", src:suan, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"T-Bone", src:tbone, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Tomahawk", src:tomahawk, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Lagarto", src:lagarto, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Carré Francês", src:carre, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Espetinho Suíno" , src: espSuino, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Carré-da-bisteca" , src: carre, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Costela", src:costela, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome: "Paleta", src:paleta, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome:"Joelho", src:joelho, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Pés", src:pes, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Toucinho", src:toucinho, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}
]
export default lista