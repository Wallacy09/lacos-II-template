// --------------- PRÁTICA GUIADA ---------------

// const bimestre1 = [10, 4, 3, 8]
// const bimestre2 = [2, 6, 10, 3]
// const bimestre3 = [3, 6, 8, 10]
// const bimestre4 = [5, 2, 7, 8]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// console.table(notasDoAno);

// for(let indiceBimestre = 0; indiceBimestre < notasDoAno.length; indiceBimestre++){
//    let soma = 0

//    for(let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++){

//     soma = soma + notasDoAno[indiceBimestre][indiceNota]

//    }

// console.log(`Soma do bimestre`, soma);

// let mediaBimestre = soma / notasDoAno[indiceBimestre].length

// console.log(`A soma das notas do bimestre ${indiceBimestre + 1} é: ${soma} \nA média do bimestre ${indiceBimestre + 1} é ${mediaBimestre}`);
// }

// for(let indice in array){
//   codígo
// }


// for(let elemento of array){
//   codígo
// }


// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻


// for(let i = 0; i < filmes.length; i++){
//     console.log(`Título do filmes :${filmes[i].titulo}, de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor} `);
  
//   for(let j = 0; j < [filmes].elenco.length; j++){
//     console.log(`Ator / Atriz ${filmes[i].elenco[j]}`);
  
//   }

//}


//for in

// for(let i in filmes){
//   console.log(`Título do filmes :${filmes[i].titulo}, de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor} `);

//   for(let j in filmes[i].elenco){
//     console.log(`Ator / Atriz: ${filmes[i].elenco[j]}`);

//   }

// }

//for of

// for(let i in filmes){
//   console.log(`Título do filmes :${filmes[i].titulo}, de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor} `);

//   for(let ator of filmes[i].elenco){
//     console.log(`Ator / Atriz ${ator}`);
//   }

// }