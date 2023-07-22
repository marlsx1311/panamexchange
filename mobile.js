const inbs = document.querySelector(".inBs");
const btnCalcular = document.querySelector(".btn-calcular");
const resulBs = document.querySelector(".resultado-bs");
const resulUs = document.querySelector(".resultado-us");
const act = document.querySelector(".tasa-fecha");
const spanUsd = document.querySelector(".spanusd");
const spanCop = document.querySelector(".spancop");
const spanClp = document.querySelector(".spanclp");


window.addEventListener("load", actualizacion)

btnCalcular.addEventListener("click" , calculoBs);
let tasaDelDiaClp = 154;
let tasaDelDiaCop = 154;
let tasaDolar = 29.67;
let fecha = " 40 de mayo"

function actualizacion(){
    moneda(tasaDelDiaCop, tasaDolar, tasaDelDiaClp, fecha)
}

function moneda(cop, us, clp, day){
    spanCop.innerText = cop;
    spanUsd.innerText = us;
    spanClp.innerText = clp;
    act.innerText = day;
}
function calculoBs(){
    valorUsuarioBs = inbs.value;
    let valorFinal = valorUsuarioBs / tasaDelDiaCop;
    resulBs.innerText = valorFinal.toFixed(2)+"BS";
    valorUsuarioUs = inbs.value;
    let valorFinalUs = (valorUsuarioUs / tasaDelDiaCop)/tasaDolar ;
    resulUs.innerText = valorFinalUs.toFixed(2)+"USD";
}