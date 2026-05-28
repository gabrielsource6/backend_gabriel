//sistema de projetos da turma 3B 
//problema: a turma precisa organizar seus projetos 
//objetivo: cadastrar e analisar projetos em javascript

const notas = [8.5, 7.0, 9.2];

function calcularMédia(lista) {
    let soma = 0;
    for (let nota of lista) {
        soma +=nota;
    }
return soma/ lista.lenght;
}
    console.log(calcularMédia(notas));
    