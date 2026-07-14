const {CityService}=require("../services/index");

const CityServiceInstance=new CityService();

/**
 * POST
 * data->req.body
 */
const create= async (req,res)=>{
    try{
        const city=await CityServiceInstance.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            err:error
        });
    }
}
/**
 * Delete
 * url /city/:id 
 */
const destroy= async (req,res)=>{
    try{
        const response=await CityServiceInstance.deleteCity(req.params.id);
        return res.status(200).json({
            success:true,
            message:'Successfully deleted a city',
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Not able to delete a city',
            err:error
        });
    }
}

/**
 * Get
 * url /city/:id
 */
const get= async (req,res)=>{
    try{
        const city=await CityServiceInstance.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Successfully Fetched a city',
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get a city',
            err:error
        });
    }
}
const getAll= async (req,res)=>{
    try{
        const cities=await CityServiceInstance.getCityAll(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:'Successfully Fetched all city',
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get a city',
            err:error
        });
    }
}

/**
 * Patch
 * url /city/:id
 * data->req.body
 */
const update= async (req,res)=>{
    try{
        const city=await CityServiceInstance.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Successfully updated a city',
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update a city',
            err:error
        });
    }
}


/**
 * Get
 * url /cities/:id/airports
 */
const getAirport=async (req,res)=>{
    try{
        const airports=await CityServiceInstance.getAirportByCity(req.params.id);
        return res.status(200).json({
            data:airports,
            success:true,
            message:"Successfully get airports",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get airport',
            err:error
        });
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll,
    getAirport
}