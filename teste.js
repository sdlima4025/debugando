// jogo das frutas
console.log('Bem vindo ao Jogo das Frutas!');

// Função que escolhe uma fruta aleatória
function escolherFruta() {
const frutas = ['Maçã', 'Laranja', 'Bananas', 'Uvas', 'kiwis'];
const frutaEscolhida = frutas[Math.floor(Math.random() * frutas.length)];
console.log('Fruta Escolhida :', frutaEscolhida);
return frutaEscolhida;
}

function jogarJogo() {
  console.group('Jogo das Frutas');
  console.time('Tempo de Processamento');
  const frutasEscolhidas = [];

  for(let i = 0; i < 3; i++) {
    console.group(`Rodada ${i + 1}`);
    const fruta = escolherFruta();
    frutasEscolhidas.push(fruta);
    console.trace('Ponto de rastreamento para depuração');
    console.groupEnd();
  }
  console.groupEnd();

  console.log('Frutas escolhidas nas rodadas');
  console.table(frutasEscolhidas);
  console.timeEnd('Tempo de Processamento');
  // inspecionando a lista de frutas
  console.dir(escolherFruta);
}


// iniciando o jogo
jogarJogo();