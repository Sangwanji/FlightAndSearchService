const {Flight} = require("../models/index");
const {Op} = require("sequelize");


class FlightRepository {

    #createFilterObject(filter){
        const filterObject={};
        if(filter.arrivalAirportId){
            filterObject.arrivalAirportId=filter.arrivalAirportId;
        }
        if(filter.departureAirportId){
            filterObject.departureAirportId=filter.departureAirportId;
        }
        /**
        * if(filter.minPrice && filter.maxPrice){
        *     Object.assign(filterObject,{
        *         price:{[Op.between]:[filter.minPrice,filter.maxPrice]}
        *     });
        * }
        * else if(filter.minPrice){
        *     Object.assign(filterObject,{
        *         price:{[Op.gte]:filter.minPrice}
        *     });
        * }
        * else if(filter.maxPrice){
        *     Object.assign(filterObject,{
        *         price:{[Op.lte]:filter.maxPrice}
        *     });
        * }
        */
        // other way of upper querry
        let priceFilter=[];
        if(filter.minPrice){
            priceFilter.push({price: {[Op.gte] : filter.minPrice}});
        }
        if(filter.maxPrice){
            priceFilter.push({price: {[Op.lte] : filter.maxPrice}});
        }
        Object.assign(filterObject,{
            [Op.and]:priceFilter
        });
        return filterObject;
    }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject=this.#createFilterObject(filter);
            const flight = await Flight.findAll({where: filterObject});
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async update(flightId,data){
        try {
            const response=await Flight.update(data,{
                where:{
                    id:flightId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;