// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";


// dotenv.config({
//     path: './env'
// })

// connectDB()
//     .then(() => {
    
//        const server = app.listen(process.env.PORT || 8000, () => {
//             console.log(`Server is running at port: ${process.env.PORT} `)
//         })

//         server.on("error", (error)=>{
//             console.error("SERVER ERROR:",error);
//             process.exit(1);
//         })
//     })
//     .catch((err) => {
//         console.log("MONGODB connection failed")
//     })


dotenv.config({
    path: './env'
})

connectDB()
     .then(()=>{
        const server = app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server is listening at port: ${process.env.PORT}`)
        })

        server.on("error",(error)=>{
            console.error("SERVER ERROR", error)
            process.exit(1)
        })

     })
     .catch((error)=>{
        console.log("MONGODB connnection failed")
     })





/*
import express from 'express'
const app = express()

(async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR:" , error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`APP is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error:", error)
        throw err
    }
})()         // turns a function into a expression 

*/
