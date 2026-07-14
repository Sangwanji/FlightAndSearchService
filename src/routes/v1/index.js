const express=require('express');
const router=express.Router();

const City=require('./City/index');
const Airport=require('./Airport/index');

router.use('/cities',City);
router.use('/airports',Airport);

module.exports=router;
