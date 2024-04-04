const express = require("express");
const router = express.Router();

//import the controller
const CasoController = require('../controllers/CasoController');

//Get all casos.
router.get('/casos', async (req, res) => {
    let casos = await new CasoController().getCasos();
    res.status(200).json(casos);
});

//Create a caso.
router.post('/caso', async (req, res) => {
    let { pessoa, latitude, longitude } = req.body;
    console.log(req.body);
    await new CasoController().createCaso({ pessoa, latitude, longitude }, res);
    res.status(200).json("OK");
});

//Update a caso.
router.put('/casos/:casoId', async (req, res) => {
    let { casoId } = req.params;
    await new CasoController().updateCaso(casoId, res);
    let casos = await new Caso().getCasos();
});

//Delete a todo.
router.delete('/casos/:casoId', async (req, res) => {
    let { casoId } = req.params;
    await new CasoController().deleteCaso(casoId);
    let casos = await new Caso().getCasos();
    res.status(200).json(casos);
});

module.exports = router;