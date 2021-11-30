const { Router } = require('express');
const router = Router();

const mainController = require('../controllers/mainController');

// Rutas
router.get('/', mainController.cargarPagina);

module.exports = router;