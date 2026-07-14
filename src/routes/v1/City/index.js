const express=require('express');
const {CityController} =require('../../../controllers/index');

const router=express.Router();

router.post('/',CityController.create);
router.delete('/:id',CityController.destroy);
router.get('/',CityController.getAll);
router.get('/:id',CityController.get);
router.get('/:id/airports',CityController.getAirport);
router.patch('/:id',CityController.update);

module.exports=router;