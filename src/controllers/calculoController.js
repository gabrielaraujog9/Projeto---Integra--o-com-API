class CalculoController{

  async somar(req, res){
    const valores = req.body
    let resultado = 0;
    for(let valor of valores){
      resultado += valor
    }
    return res.status(200).json(resultado);
  }
  async subtracao(req, res){
    const valores = req.body
    if (valores.length === 0) {
      return res.status(200).json(0); 
    }
    let resultado = valores[0];
    for (let i = 1; i < valores.length; i++) {
      resultado -= valores[i]; // subtrai cada número do resultado
    }
    return res.status(200).json(resultado);
  }
  async multiplicacao(req, res){
    const valores = req.body
    if (valores.length === 0) {
      return res.status(200).json(0); 
    }
    let resultado = valores[0];
    for (let i = 1; i < valores.length; i++) {
      resultado *= valores[i]
    }
    return res.status(200).json(resultado);
  }
  async divisao(req, res){
    const valores = req.body
    if (valores.length === 0) {
      return res.status(200).json(0); 
    }
    let resultado = valores[0];
    for (let i = 1; i < valores.length; i++) {
      resultado /= valores[i]
    }
    return res.status(200).json(resultado);
  }
}

module.exports = CalculoController