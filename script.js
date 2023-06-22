const $lucesDelCirculo=document.querySelectorAll('.luces-circulo');
let contadorDeLuz=2;

const mostrarLuz=()=>{
    $lucesDelCirculo[contadorDeLuz].className='luces-circulo';
    contadorDeLuz--;
    if(contadorDeLuz<0) contadorDeLuz=2;

    const LuzActual=$lucesDelCirculo[contadorDeLuz]
    LuzActual.classList.add(LuzActual.getAttribute('color'))
}

setInterval(mostrarLuz, 2000)