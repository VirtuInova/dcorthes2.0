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
    srcNutricional: string;
    nutri: NutritionalInfo[];
};

const lista: Lista[] = [
    {nome: "Carré da Bisteca" ,srcEmbalado:'', src: carreB, srcNutricional:"", nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "30%",
        tipo:"Proteínas(g)",
        valor: 22
    },
    {
        porcentagem: "21%",
        tipo:"Gorduras Totais(g)",
        valor: 15
    },
    {
        porcentagem: "42%",
        tipo:"Gorduras Saturadas(g)",
        valor: 9
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "3%",
        tipo:"Sódio(mg)",
        valor: 59
    }]},
    {nome: "Pernil com Osso" ,srcEmbalado:'', src: pernil,srcNutricional:"", nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },]},
    {nome: "Picanha" , src: picanha, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "15%",
        tipo:"Valor Energético(g)",
        valor: 297  
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "36%",
        tipo:"Proteínas(g)",
        valor: 18
    },
    {
        porcentagem: "38%",
        tipo:"Gorduras Totais(g)",
        valor: 25
    },
    {
        porcentagem: "43%",
        tipo:"Gorduras Saturadas(g)",
        valor: 8.5
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "3%",
        tipo:"Sódio(mg)",
        valor: 53
    }]},
    {nome: "Alcatra Suína" , src: alcatra,srcEmbalado:'', srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 194
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "46%",
        tipo:"Proteínas(g)",
        valor: 23
    },
    {
        porcentagem: "29%",
        tipo:"Gorduras Totais(g)",
        valor: 19
    },
    {
        porcentagem: "55%",
        tipo:"Gorduras Saturadas(g)",
        valor: 11   
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "6%",
        tipo:"Sódio(mg)",
        valor: 116
    }]},
    {nome: "Bife Ancho", src:bife, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
    ]}, 
    {nome:"Coxão Duro", src:coxao, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 194  
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "46%",
        tipo:"Proteínas(g)",
        valor: 23
    },
    {
        porcentagem: "29%",
        tipo:"Gorduras Totais(g)",
        valor: 19
    },
    {
        porcentagem: "55%",
        tipo:"Gorduras Saturadas(g)",
        valor: 11
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "6%",
        tipo:"Sódio(mg)",
        valor: 116
    }]},
    {nome:"Coxão Mole", src:coxaoMole, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "15%",
        tipo:"Valor Energético(g)",
        valor: 297
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "36%",
        tipo:"Proteínas(g)",
        valor: 18
    },
    {
        porcentagem: "38%",
        tipo:"Gorduras Totais(g)",
        valor: 25
    },
    {
        porcentagem: "40%",
        tipo:"Gorduras Saturadas(g)",
        valor: 8
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "3%",
        tipo:"Sódio(mg)",
        valor: 53
    }]},
    {nome:"Filé Mignon", src:file, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "6%",
        tipo:"Valor Energético(g)",
        valor: 110
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "44%",
        tipo:"Proteínas(g)",
        valor: 22   
    },
    {
        porcentagem: "4%",
        tipo:"Gorduras Totais(g)",
        valor: 2.5
    },
    {
        porcentagem: "4%",
        tipo:"Gorduras Saturadas(g)",
        valor: 0.8
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "3%",
        tipo:"Sódio(mg)",
        valor: 56
    }]},
    {nome:"Maminha", src:maminha, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]},
    {nome:"Ossobuco", src:ossobuco, srcEmbalado:'',srcNutricional:"",nutri:[{
        porcentagem: "9%",
        tipo:"Valor Energético(g)",
        valor: 186
    },
   ]},
    {nome:"Panceta", src:pancheta, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]},
    {nome:"Patinho", src:patinho,srcEmbalado:'',srcNutricional:"", nutri: [{
        porcentagem: "7%",
        tipo:"Valor Energético(g)",
        valor: 138
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "44%",
        tipo:"Proteínas(g)",
        valor: 22
    },
    {
        porcentagem: "8%",
        tipo:"Gorduras Totais(g)",
        valor: 5.5
    },
    {
        porcentagem: "10%",
        tipo:"Gorduras Saturadas(g)",
        valor: 1.9  
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "3%",
        tipo:"Sódio(mg)",
        valor: 64
    }]},
    {nome:"Porqueta", src:porqueta,srcEmbalado:'', srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]},
    {nome:"Prime Rib", src:primeRib,srcEmbalado:'',srcNutricional:"", nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 209
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "44%",
        tipo:"Proteínas(g)",
        valor: 22
    },
    {
        porcentagem: "22%",
        tipo:"Gorduras Totais(g)",
        valor: 14
    },
    {
        porcentagem: "23%",
        tipo:"Gorduras Saturadas(g)",
        valor: 4.6
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "2%",
        tipo:"Sódio(mg)",
        valor: 46
    }]},
    {nome:"Short-Rib", src:shortRib,srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]},
    {nome:"Suan", src:suan, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]},
    {nome:"T-Bone", src:tbone, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
 ]},
    {nome:"Tomahawk", src:tomahawk, srcEmbalado:'',srcNutricional:"",nutri:[{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
  ]},
    {nome:"Lagarto", src:lagarto,srcEmbalado:'', srcNutricional:"",nutri: [{
        porcentagem: "15%",
        tipo:"Valor Energético(g)",
        valor: 297
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "36%",
        tipo:"Proteínas(g)",
        valor: 18
    },
    {
        porcentagem: "38%",
        tipo:"Gorduras Totais(g)",
        valor: 25
    },
    {
        porcentagem: "40%",
        tipo:"Gorduras Saturadas(g)",
        valor: 8
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "3%",
        tipo:"Sódio(mg)",
        valor: 53
    }]},
    {nome:"Carré Francês", src:carre,srcEmbalado:'', srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 201
    },
 ]},
    {nome: "Espetinho Suíno" , srcEmbalado:'',src: espSuino, srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]},
    {nome: "Carré-da-bisteca" , srcEmbalado:'',src: carre, srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
  ]},
    {nome: "Costela", src:costela,srcEmbalado:'', srcNutricional:"",nutri: [{
        porcentagem: "20%",
        tipo:"Valor Energético(g)",
        valor: 397
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "58%",
        tipo:"Proteínas(g)",
        valor: 29
    },
    {
        porcentagem: "48%",
        tipo:"Gorduras Totais(g)",
        valor: 31
    },
    {
        porcentagem: "55%",
        tipo:"Gorduras Saturadas(g)",
        valor: 11
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "5%",
        tipo:"Sódio(mg)",
        valor: 93
    }]}, 
    {nome: "Paleta", src:paleta, srcEmbalado:'',srcNutricional:"",nutri:[{
        porcentagem: "7%",
        tipo:"Valor Energético(g)",
        valor: 138
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "44%",
        tipo:"Proteínas(g)",
        valor: 22
    },
    {
        porcentagem: "8%",
        tipo:"Gorduras Totais(g)",
        valor: 5.5
    },
    {
        porcentagem: "10%",
        tipo:"Gorduras Saturadas(g)",
        valor: 1.9
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "3%",
        tipo:"Sódio(mg)",
        valor: 64
    }]}, 
    {nome:"Joelho", src:joelho, srcEmbalado:'',srcNutricional:"",nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]},
    {nome:"Pés", src:pes,srcEmbalado:'', srcNutricional:"",nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 212
    },
    {
        porcentagem: "0%",
        tipo:"Carboidratos(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares totais(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Açucares Adicionados(g)",
        valor: 0
    },
    {
        porcentagem: "46%",
        tipo:"Proteínas(g)",
        valor: 23
    },
    {
        porcentagem: "20%",
        tipo:"Gorduras Totais(g)",
        valor: 13
    },
    {
        porcentagem: "18%",
        tipo:"Gorduras Saturadas(g)",
        valor: 3.5
    },
    {
        porcentagem: "0%",
        tipo:"Gorduras Trans(g)",
        valor: 0
    },
    {
        porcentagem: "0%",
        tipo:"Fibras Alimentares(g)",
        valor: 0
    },
    {
        porcentagem: "5%",
        tipo:"Sódio(mg)",
        valor: 105
    }]},
    {nome:"Toucinho", src:toucinho, srcEmbalado:'',srcNutricional:"",nutri:[{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 205
    },
   ]}
]
export default lista