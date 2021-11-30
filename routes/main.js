const { Router } = require('express');
const router = Router();

const mainController = require('../controllers/mainController');

// Routes
router.get('/', mainController.cargarPagina);

module.exports = router;