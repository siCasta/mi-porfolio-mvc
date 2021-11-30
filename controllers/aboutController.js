const path = require('path');

const aboutController = {
    cargarPagina: function(req, res) {
        const View = path.resolve(__dirname, '../views/about.html');
        res.sendFile(View);
    }
}

module.exports = aboutController;