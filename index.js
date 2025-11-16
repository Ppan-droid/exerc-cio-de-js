/**** Escreva o código abaixo 👇******/

function somar(a,b){
  let resultado = a+b
  return resultado
}

function multiplicar(a,b){
  let resultado = a*b
  return resultado
}
function subtrair(a,b){
  let resultado = a-b
  return resultado
}
function dividir(a,b){
  if (b == 0){
    throw new Error("Erro: divisão por zero")
  }
  
  else {
    let resultado = a/b
    return resultado
  }
}
function calcularMedia(a,b,c,d){
  let resultado = (a+b+c+d)/4
  return resultado
}
function elevarPotencia(a,b){
  let resultado = a**b
  return resultado
}
function calcularAreaRetangulo(a,b){
  let resultado = a*b
  return resultado
}
function verificarParOuImpar(a){
  let resultado = a%2
  if (resultado == 0){
    return "par"
  }
  else{
    return "ímpar"
  }
}
function calcularRaizQuadrada(a){
  let resultado = a**0.5
  return resultado
}
function calcularHipotenusa(a,b){
  let resultado = (a**2+b**2)**0.5
  return resultado
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
