const { Router } = require('express');
const router = Router();

const aboutController = require('../controllers/aboutController');

// Rutas
router.get('/', aboutController.cargarPagina);

module.exports = router;