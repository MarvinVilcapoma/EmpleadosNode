let db = require('../models/dbconexion');

let empleados = {
  listar( req, res ){
    let sql = "SELECT * FROM empleados";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    val_nombre = req.body.nombre;
    val_apellido = req.body.apellido;
    val_cargo = req.body.cargo;
    val_sueldo = req.body.sueldo;
    let sql = "INSERT INTO empleados(nombre,apellido,cargo,sueldo) VALUES(?,?,?,?)";
    db.query(sql,[val_nombre,val_apellido,val_cargo,val_sueldo],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM empleados WHERE id=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData);
      }
    });
  },
  edit( req, res ){
    val_id = req.body.id;
    val_nombre = req.body.nombre;
    val_apellido = req.body.apellido;
    val_cargo = req.body.cargo;
    val_sueldo = req.body.sueldo;
    let sql = "UPDATE empleados SET nombre=?, apellido=?, cargo=?, sueldo=?  WHERE id=?";
    db.query(sql,[val_nombre,val_apellido,val_cargo,val_sueldo,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM empleados WHERE id=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = empleados;