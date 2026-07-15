const express=require('express');
const router=express.Router();

const City=require('./City/index');
const Airport=require('./Airport/index');
const Flight=require('./Flight/index');

router.use('/cities',City);
router.use('/airports',Airport);
router.use('/flights',Flight);

module.exports=router;
