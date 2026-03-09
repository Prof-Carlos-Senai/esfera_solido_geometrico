class Esfera{
    constructor(raio){
        this.raio = raio
    }
    calcularArea(){
        // área da esfera = 4 * PI * r²
        return 4 * Math.PI * (this.raio * this.raio)
    }
    calcularVolume(){
        // volume da esfera = 4/3 * PI * r³
        return (4/3) * Math.PI * (this.raio * this.raio * this.raio)
    }
}
module.exports = Esfera