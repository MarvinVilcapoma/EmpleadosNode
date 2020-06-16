var express = require('express');
var router = express.Router();
let controller = require('../controllers/empleadoController');

// WS listar registros
router.get('/listar', function(req, res, next) {
  controller.listar(req, res);
});

// WS mostrar un registro por su id
router.get('/mostrar/:id', function(req, res, next) {
  controller.show(req, res);
});

// WS crear registro
router.post('/', function(req, res){
  controller.store(req, res);
});

// WS actualizar registro
router.put('/', function(req, res){
    controller.edit(req, res);
  });
  
// WS eliminar registro
router.delete('/:id', function(req, res){
  controller.delete(req, res);
});

module.exports = router;
