const path = require('path');

const mainController = {
    cargarPagina: function(req, res) {
        const View = path.resolve(__dirname, '../views/home.html');
        res.sendFile(View);
    }
}

module.exports = mainController;