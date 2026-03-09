const Esfera = require('../models/Esfera')

describe('Teste Unitário da classe Esfera', ()=>{
    test('Teste do cálculo de área da Esfera', ()=>{
        // área da esfera = 4 * PI * r²
        const raio = 5
        const esfera = new Esfera(raio)
        const area = 314.159
        expect(esfera.calcularArea()).toBeCloseTo(area,3)
    })
    test('Teste do cálculo de vollume da Esfera', ()=>{
        // volume da esfera = 4/3 * PI * r³
        const raio = 5
        const esfera = new Esfera(raio)
        const volume = 523.59878
        expect(esfera.calcularVolume()).toBeCloseTo(volume,3)
    })

})