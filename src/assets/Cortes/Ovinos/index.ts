import esp from './Espetinho-Ovino.webp'
import ham from './Hamburguer-Ovino.webp'
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
import cEspecial from './Costela-Especial-Ovino.webp'
import guisadoP from './Guisado-Pescoço-Ovino..webp'
import paleta from './Paleta-Ovino.webp'
import paletaD from './Paleta-Desossada-Ovino.webp'
import sarapatel from './Sarapatel-Ovino.webp'

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
    {nome: "Costela Especial Ovino", src:cEspecial, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Carboidratos(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Açucares totais(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Açucares Adicionados(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Proteínas(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Gorduras Totais(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Gorduras Saturadas(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Gorduras Trans(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Fibras Alimentares(g)",
        valor: 213
    },
    {
        porcentagem: "11%",
        tipo:"Sódio(mg)",
        valor: 213
    }] }, 
    {nome: "Guisado Pescoço Ovino", src:guisadoP, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome: "Paleta Ovino", src:paleta, nutri:  [{
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
    {nome: "Paleta Desossada Ovino", src:paletaD, nutri:  [{
        porcentagem: "6%",
        tipo:"Valor Energético(g)",
        valor: 125
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
        porcentagem: "38%",
        tipo:"Proteínas(g)",
        valor: 19
    },
    {
        porcentagem: "13%",
        tipo:"Gorduras Totais(g)",
        valor: 8.6
    },
    {
        porcentagem: "28%",
        tipo:"Gorduras Saturadas(g)",
        valor: 5.5
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
    {nome: "Sarapatel Ovino", src:sarapatel, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome: "Espetinho Ovino", src:esp, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]}, 
    {nome:"Hamburguer Ovino", src:ham, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Alcatra Completa Ovino" , src: alcatra, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome: "Carré Francês Ovino", src:carre, nutri:  [{
        porcentagem: "9%",
        tipo:"Valor Energético(g)",
        valor: 186
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
        porcentagem: "42%",
        tipo:"Proteínas(g)",
        valor: 21
    },
    {
        porcentagem: "17%",
        tipo:"Gorduras Totais(g)",
        valor: 12
    },
    {
        porcentagem: "32%",
        tipo:"Gorduras Saturadas(g)",
        valor: 6.3
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
        valor: 57
    }]}, 
    {nome:"Costela Prime Ovino", src:costela, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},

    {nome:"Costela Ripa Ovino", src:costelaripa, nutri: 
    [{
        porcentagem: "12%",
        tipo:"Valor Energético(g)",
        valor: 230
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
        porcentagem: "26%",
        tipo:"Gorduras Totais(g)",
        valor: 17
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
        porcentagem: "4%",
        tipo:"Sódio(mg)",
        valor: 70
    }]},

    {nome:"Carré Short Ovino", src:carreShort, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Coxão Mole Ovino", src:coxaoMole, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Filé Mignon Ovino", src:file, nutri:  [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 210
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
        porcentagem: "20%",
        tipo:"Proteínas(g)",
        valor: 15
    },
    {
        porcentagem: "30%",
        tipo:"Gorduras Totais(g)",
        valor: 17
    },
    {
        porcentagem: "36%",
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
        valor: 70
    }]},
    {nome:"Lagarto Coxão Duro Ovino", src:lagarto, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Ossobuco Ovino", src:ossobuco, nutri: [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 206
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
        porcentagem: "38%",
        tipo:"Proteínas(g)",
        valor: 19
    },
    {
        porcentagem: "22%",
        tipo:"Gorduras Totais(g)",
        valor: 14
    },
    {
        porcentagem: "33%",
        tipo:"Gorduras Saturadas(g)",
        valor: 6.5
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
    {nome:"Patinho Ovino", src:patinho, nutri: [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 213
    },]},
    {nome:"Pernil Dessosado Ovino", src:pernil, nutri:  [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 203
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
        porcentagem: "40%",
        tipo:"Proteínas(g)",
        valor: 20
    },
    {
        porcentagem: "26%",
        tipo:"Gorduras Totais(g)",
        valor: 17
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
        valor: 65
    }]},
    {nome:"Prime Rib Ovino", src:primeRib, nutri:  [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 200
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
        porcentagem: "18%",
        tipo:"Gorduras Totais(g)",
        valor: 12
    },
    {
        porcentagem: "20%",
        tipo:"Gorduras Saturadas(g)",
        valor: 4
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
        valor: 55
    }]},
    {nome:"Sela Inglesa Ovino", src:selaInglesa, nutri:  [{
        porcentagem: "12%",
        tipo:"Valor Energético(g)",
        valor: 238
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
        porcentagem: "38%",
        tipo:"Proteínas(g)",
        valor: 19
    },
    {
        porcentagem: "28%",
        tipo:"Gorduras Totais(g)",
        valor: 18
    },
    {
        porcentagem: "50%",
        tipo:"Gorduras Saturadas(g)",
        valor: 10
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
        porcentagem: "4%",
        tipo:"Sódio(mg)",
        valor: 74
    }]},
    {nome:"Stinko Ovino", src:stinko, nutri:  [{
        porcentagem: "10%",
        tipo:"Valor Energético(g)",
        valor: 203
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
        porcentagem: "40%",
        tipo:"Proteínas(g)",
        valor: 20
    },
    {
        porcentagem: "26%",
        tipo:"Gorduras Totais(g)",
        valor: 17
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
        valor: 65
    }]},
    {nome:"T-Bone Ovino", src:tbone, nutri:  [{
        porcentagem: "11%",
        tipo:"Valor Energético(g)",
        valor: 210
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
        valor: 15
    },
    {
        porcentagem: "26%",
        tipo:"Gorduras Totais(g)",
        valor: 17
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
        porcentagem: "4%",
        tipo:"Sódio(mg)",
        valor: 70
    }]},
]
export default lista