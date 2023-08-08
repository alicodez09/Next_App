import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection
        connection.on('connection',()=>{
            console.log("Database is connected")
        })
        connection.on('error',(err)=>{
            console.log("Database is not connected"+err);
            process.exit()
        })
    } catch (error) {
        console.log(error)
    }
}