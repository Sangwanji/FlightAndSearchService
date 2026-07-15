const express=require('express');
const {FlightController} =require('../../../controllers/index');

const router=express.Router();

router.post('/',FlightController.create);
// router.delete('/:id',CityController.destroy);
router.get('/',FlightController.getAll);
router.get('/:id',FlightController.get);
// router.get('/:id/airports',CityController.getAirport);
// router.patch('/:id',CityController.update);

module.exports=router;