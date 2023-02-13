const listaNotas = [1.2, 2.9, 3.5, 2.5];

function retornaMedia(array){
    let media = 0;
    let bimestre = 1;
    for(let nota of array){
        console.log(`nota do ${bimestre}° bimestre: ${nota}`);
        media += nota;
        bimestre++;
    }
    let mediaFinal = (media / array.length).toFixed(2);
    if(mediaFinal >= 7.0){
        return `Parabéns você passou!! Sua nota foi: ${mediaFinal}`;
    } else {
        return `Uma pena você não passou! Sua nota foi: ${mediaFinal}`;
    }
}
let mediaNotas = retornaMedia(listaNotas);
console.log(mediaNotas);