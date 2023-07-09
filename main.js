let inbs = document.querySelector(".inBs");
const inps = document.querySelector(".inPs");
const btnCalcular = document.querySelector(".btn-calcular");
const resulBs = document.querySelector(".resultado-bs");
const resulUs = document.querySelector(".resultado-us")


btnCalcular.addEventListener("click" , calculoBs);
let tasaDelDiaCop = 155;
let tasaDolar = 28.27;

function calculoBs(){
    valorUsuarioBs = inbs.value;
    let valorFinal = valorUsuarioBs / tasaDelDiaCop;
    resulBs.innerText = valorFinal.toFixed(2)+"BS";
    valorUsuarioUs = inbs.value;
    let valorFinalUs = (valorUsuarioUs / tasaDelDiaCop)/tasaDolar ;
    resulUs.innerText = valorFinalUs.toFixed(2)+"USD";
}