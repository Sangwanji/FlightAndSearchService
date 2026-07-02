const express=require('express');
const PORT=require('./config/serverconfig').PORT;
const setUpAndServer =async()=>{
    const app=express();
    const Port=PORT;

    app.listen(Port,()=>{
        console.log(`Server is running on port ${Port}`);
    })
}

console.log(process);
setUpAndServer();