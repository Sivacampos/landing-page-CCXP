const ingressos =[];

const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        alert(`Tecla precionada ${name} \r\n Key code: ${code}`);
    }, false);
}


const lancamento = "31 dec 2023"


function countDown(){
   const dataLanc = new Date(lancamento)
   const hoje = new Date()

   const segTotal = (dataLanc - hoje)/1000;

   const finalDias = Math.floor(segTotal / 60 / 60 / 24);
   const finalHoras = Math.floor(segTotal / 60 / 60 ) % 24;
   const finalMinutos = Math.floor(segTotal / 60 ) % 60;
   const finalSegundos = Math.floor(segTotal) % 60;

   dia.innerHTML = finalDias
   hora.innerHTML = formatoTempo(finalHoras)
   minuto.innerHTML = formatoTempo(finalMinutos)
   segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

function selectCard(selector){
   var element = document.querySelector(selector);
   element.classList.toggle("card-selected");
   if(ingressos.includes(selector)) ingressos.pop(selector);
   else ingressos.push(selector)
}

function showSelectedCards(){
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos)
}

countDown();
setInterval(countDown, 1000)