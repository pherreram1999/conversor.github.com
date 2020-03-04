const form = document.querySelector('#formConversor');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const conversor = new Conversor(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value);
    conversor.convertir();
    alert(conversor.elementos);
});

/*
document.querySelector('#convertir').addEventListener('click',(e)=>{
    e.preventDefault();
    let baseO = document.querySelector('#baseOrigen').value;
    let baseD = document.querySelector('#baseDestino').value;
    let numero = document.querySelector('#dato').value;

    let conversor = new Conversor(numero,baseO,baseD);
    console.log(conversor);
});

*/