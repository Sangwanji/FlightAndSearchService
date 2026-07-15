const {FlightRepository,AirplaneRepository} =require("../repository/index");
const {isValidFlightTime}=require("../utils/timeCompare");

class FlightService{
    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository= new FlightRepository();
    }
    async createFlight(data){
        try{
            if(!isValidFlightTime(data.departureTime,data.arrivalTime)) {
                throw {error :"Arrival time can not be less than departure time"};
            }
            const airplane=await this.airplaneRepository.getAirplaneById(data.airplaneId);
            const flight=await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight=await this.flightRepository.getFlight(flightId);
            return flight;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlight(filter){
        try {
            const flight=await this.flightRepository.getAllFlights(filter);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports=FlightService;


/**
 * {
 *      flightNuber,
 *      airplaneId,
 *      departureAirportId,
 *      arrivalAirportId,
 *      arrivalTime,
 *      departureTime,
 *      price,
 *      totalSeats->airplane repo
 * }
 */