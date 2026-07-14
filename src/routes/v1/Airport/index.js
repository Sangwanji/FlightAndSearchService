const express=require('express');
const {AirportController} =require('../../../controllers/index');

const router=express.Router();

router.post('/',AirportController.create);
router.delete('/:id',AirportController.destroy);
router.get('/',AirportController.getAll);
router.get('/:id',AirportController.get);
router.patch('/:id',AirportController.update);

module.exports=router;