const express=require('express');

const {PORT} =require('./config/serverConfig');
const ApiRoutes=require('./routes/index');
const setUpAndServer =async()=>{
    // create express app
    const app=express();

    //body parser middleware
    app.use(express.json());

    // map the api routes to router
    app.use('/api',ApiRoutes);

    // start the server
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}

console.log(process);
setUpAndServer();