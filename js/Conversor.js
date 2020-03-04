class Conversor {
    constructor(number,baseO,baseD){
        this.elementos = [];
        this.baseOrigen = parseInt(baseO);
        this.divisor = parseInt(baseD);
        this.numero = parseInt(number);
    }

    convertir(){
        let cociente = this.numero;
        do {
            this.elementos.push(cociente % this.divisor);
            cociente = Math.trunc((cociente / this.divisor));
        } while(cociente !== 0);
        
    }
}