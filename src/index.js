const express=require('express');

const {PORT} =require('./config/serverConfig');
const ApiRoutes=require('./routes/index');

const db= require('./models/index');
const {City , Airport} =require('./models/index');

const setUpAndServer =async()=>{
    // create express app
    const app=express();

    //body parser middleware
    app.use(express.json());

    // map the api routes to router
    app.use('/api',ApiRoutes);

    // start the server
    app.listen(PORT,async ()=>{
        console.log(`Server is running on port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
        const city=await City.findOne({
            where:{
                id:7
            }
        });
        const airports=await city.getAirports();
        // console.log(city);
        // console.log(airports);
    })
}

setUpAndServer();