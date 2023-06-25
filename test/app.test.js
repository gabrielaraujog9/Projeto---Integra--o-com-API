const app = require("../src/app");
const request = require("supertest");

describe("Testes de soma.", () => {

  it("Testando soma com 2 números", async () => {
    const res = await request(app).get("/calcular/somar").send([7, 10]);
    expect(res.body).toBe(17);
  });
  it("Testando soma com 3 números", async () => {
    const res = await request(app).get("/calcular/somar").send([7, 10, 3]);
    expect(res.body).toBe(20);
  });
  it("Testando soma com 3 números positivos e 1 número negativo", async () => {
    const res = await request(app).get("/calcular/somar").send([7, 10, 3, -10]);
    expect(res.body).toBe(10);
  });
  it("Testando soma com 2 números positivos e 3 números negativos", async () => {
    const res = await request(app).get("/calcular/somar").send([30, 44, -100, -73, -1]);
    expect(res.body).toBe(-100);
  });

})

describe("Testes de subtração.", () => {
  let array = [];
  let valorEsperado;
  beforeEach(() => {
    let qtdNumArray = Math.floor(Math.random() * 11) + 1;
    for(let i = 0; i < qtdNumArray; i++){
      array.push(Math.floor(Math.random() * 101))
      if(i == 0){
        valorEsperado = array[0]
      }
      else{
        valorEsperado -= array[i]
      }
    }
  });
  afterEach(() => {
    array = [];
    valorEsperado = null;
  });

  it("Testando com números aleatórios", async () => {
    const res = await request(app).get("/calcular/subtrair").send(array).expect(200);
    expect(res.body).toBe(valorEsperado);
  });
  it("Testando com números aleatórios e com resultado errado", async () => {
    const res = await request(app).get("/calcular/subtrair").send(array);
    expect(res.body).not.toBe(valorEsperado + 1);
  });

})