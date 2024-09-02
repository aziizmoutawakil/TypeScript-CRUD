import  express from "express";
import router from './Routes/Routes_employee'
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use('/',router)

const MONGO_URL = "mongodb://localhost:27017";
mongoose.connect(MONGO_URL,{
    dbName:"node-typescript-app"
})
.then(() => {
    console.log("database connected");
    
})
.catch((error) => console.log(error))


app.listen(4000,() => {
    console.log("server running on http://localhost:4000");
});