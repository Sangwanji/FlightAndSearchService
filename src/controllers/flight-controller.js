const {FlightService} = require("../services/index");

const flightServiceInstance=new FlightService();

const create=async(req,res)=>{
    try{
        const flight=await flightServiceInstance.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Successfully created a flight',
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        });
    }
}

const get=async(req,res)=>{
    try {
        const flight=await flightServiceInstance.getFlight(req.params.id);
        return res.status(200).json({
            data:flight,
            success:true,
            message:'Successfully Fetched a flight',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch a flight',
            err:error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightServiceInstance.getAllFlight(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: 'Successfully fetched all flights',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flight',
            err: error
        });
    }
};



module.exports={
    create,
    get,
    getAll
}