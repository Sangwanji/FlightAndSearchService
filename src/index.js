const express=require('express');

const {PORT} =require('./config/serverConfig');
const setUpAndServer =async()=>{
    // create express app
    const app=express();

    //body parser middleware
    app.use(express.json());

    // start the server
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}

console.log(process);
setUpAndServer();