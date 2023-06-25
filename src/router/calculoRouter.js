const express = require("express");
const router = express.Router();
const CalculoController = require("../controllers/calculoController");
const calculo = new CalculoController()

router.get("/somar", calculo.somar);
router.get("/subtrair", calculo.subtracao);
router.get("/multiplicar", calculo.multiplicacao);
router.get("/dividir", calculo.divisao);

module.exports = router;
