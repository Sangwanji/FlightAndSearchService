const {City} = require('../models/index');

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try{
            // below apprach also work but note return updated object is not possible in this approach
            // if we are using postgres then we can use returning:true in the update method to get the updated object
            // const city=await City.update(data,{
            //   where:{
            //   id:cityId
            //   }
            // });
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCityAll() {
        try{
            const cities = await City.findAll();
            return cities;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;