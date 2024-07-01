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
    srcEmbalado: string;
    nutri: NutritionalInfo[];
};

const lista: Lista[] = [
    {nome: "Carré da Bisteca" ,srcEmbalado:'', src: carreB, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Pernil com Osso" ,srcEmbalado:'', src: pernil, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Picanha" , src: picanha, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Alcatra Suína" , src: alcatra,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Bife Ancho", src:bife, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome:"Coxão Duro", src:coxao, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Coxão Mole", src:coxaoMole, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Filé Mignon", src:file, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Maminha", src:maminha, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Ossobuco", src:ossobuco, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Panceta", src:pancheta, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Patinho", src:patinho,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Porqueta", src:porqueta,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Prime Rib", src:primeRib,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Short-Rib", src:shortRib,srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Suan", src:suan, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"T-Bone", src:tbone, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Tomahawk", src:tomahawk, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Lagarto", src:lagarto,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Carré Francês", src:carre,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Espetinho Suíno" , srcEmbalado:'',src: espSuino, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Carré-da-bisteca" , srcEmbalado:'',src: carre, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Costela", src:costela,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome: "Paleta", src:paleta, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome:"Joelho", src:joelho, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Pés", src:pes,srcEmbalado:'', nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Toucinho", src:toucinho, srcEmbalado:'',nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}
]
export default lista