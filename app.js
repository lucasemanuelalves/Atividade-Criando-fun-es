//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
//peso/alturaAOquadrado;
function calculadoraIMC (peso,altura){
  return peso/(altura*altura);
}
let IMC = calculadoraIMC(12,2);
console.log(`Seu IMC é de ${IMC}`);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorialNaMao (bb){


}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let doleta = 5;
function cambioDolarReal (quantosdolares){
  let DolarEmReais = 4.80;
  let SaldoReais = DolarEmReais*quantosdolares;
  return SaldoReais.toFixed(2);;
}
let realParaDolare = cambioDolarReal (doleta);

console.log (`vc tem ${realParaDolare} reais !!!!`);
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.


let altura = 2;
let largura = 5;

function perimetroArea (a,h){
  let respostaPerimetro = 2 * (a+h);
  let respostaArea = a*h;
 console.log (`Sua area é de ${respostaArea} metros quadrados e seu perimetro é de ${respostaPerimetro} metros!!!`);
} 
perimetroArea (altura,largura);
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let pi= 3.14;
function circuloAreaAltura (raio){
  let area = raio * (pi*pi);
  let perimetro = 2 * raio * pi;
  console.log(`a area de sua mesa redonda é de aproximadamente ${area.toFixed(2)} metros quadrados`);
  console.log(`e o perimetro é de aproximadamente ${perimetro.toFixed(2)} metros`);
}
circuloAreaAltura(1);
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada (numeroMagico){ 
    for (let i = 1; i<=10 ; i++){
      let contaResposta = i * numeroMagico;
      console.log (`a tabuada é ${numeroMagico} * ${i} = ${contaResposta}`);
    }
}
let numeroMagico = 4;
mostrarTabuada (numeroMagico);
//tetando emitir alterações para repositório remoto.