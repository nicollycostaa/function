//Aqui é uma Arry com seus objetos.
const alunosA = [
    {
        nome: "Nicolly",
        nota: 9  
    },
    {
        nome: "Gabrela",
        nota: 10
    },
    {
        nome: "Ana",
        nota: 8
    }
]
//Aqui é uma Arry com seus objetos.

const alunosB = [
    {
        nome: "Nick",
        nota: 2  
    },
    {
        nome: "Gabi",
        nota: 2
    },
    {
        nome: "Anne",
        nota: 2
    }
]
    
function calcularMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calcularMedia(alunosA)
const media2 = calcularMedia(alunosB)

function enviaMensagem(media, turma) {
    if(media > 5){
        console.log(`A média da turma ${turma} foi de : ${media}. Parabéns`)
    } else{
        console.log(`A média da turma ${turma} deve ser maior que 5.`)
    }
}

enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "turmaB")

