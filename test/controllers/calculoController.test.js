jest.mock('../../src/controllers/calculoController');

const CalculoController = require('../../src/controllers/calculoController')   

CalculoController.prototype.multiplicacao.mockImplementation(array => "Não estamos multiplicamos")

describe("Teste Mock", () => {
  it("Testando multiplicação mockada", async () => {
    
    const calculo = new CalculoController()
    
    expect(calculo.multiplicacao([2, 2])).not.toBe(4)
  })
})
