const {Airport} = require('../models/index');
const {Op}=require('sequelize')
class AirportRepository {
    async createAirports(airports) {
        try {
            return await Airport.bulkCreate(airports,{ignoreDuplicates: true});
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async createAirport(airport) {
        try {
            return await Airport.create(airport);
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteAirport(airportId) {
        try {
            const deleted=await Airport.destroy({
                where: {
                    id: airportId
                }
            });
            return deleted;
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateAirport(airportId,data){
        try{
            const airport=await Airport.findByPk(airportId);
            if(!airport) return null;
            if(data.name!==undefined) airport.name=data.name;
            if(data.address!==undefined) airport.address=data.address;
            if(data.cityId!==undefined) airport.cityId=data.cityId;
            await airport.save();
            return airport;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAirport(airportId) {
        try{
            const airport = await Airport.findByPk(airportId);
            return airport;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAirportAll(filter) {
        try{
            const where={};
            if(filter.name){
                where.name={
                    [Op.startsWith]:filter.name
                };
            }
            if(filter.cityId){
                where.cityId=filter.cityId;
            }
            const airports = await Airport.findAll({where});
            return airports;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = AirportRepository;
