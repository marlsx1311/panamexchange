let inbs = document.querySelector(".inBs");
const inps = document.querySelector(".inPs");
const btnCalcular = document.querySelector(".btn-calcular");
const btnCalcularUs = document.querySelector(".btn-calcular-us");
const resulBs = document.querySelector(".resultado-bs");
const resulUs = document.querySelector(".resultado-us")


btnCalcular.addEventListener("click" , calculoBs);
btnCalcularUs.addEventListener("click", calculoDsBs);
let tasaDelDiaCop = 165;
let tasaDolar = 29.66;

function calculoBs(){
    valorUsuarioBs = inbs.value;
    let valorFinal = valorUsuarioBs / tasaDelDiaCop;
    resulBs.innerText = valorFinal.toFixed(2)+"COP";
}

function calculoDsBs(){
    valorUsuarioUs = inbs.value;
    let valorFinalUs = (valorUsuarioUs / tasaDelDiaCop)/tasaDolar ;
    resulUs.innerText = valorFinalUs.toFixed(2)+"USD";
}

