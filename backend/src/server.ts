import app from './app'
import dotenv from 'dotenv'
import connectDB from "./config/database";

dotenv.config();

const PORT = process.env.PORT;
const environment = process.env.NODE_ENV;

app.listen(PORT, () => {
    console.log("Server running!")
    console.log("Running the server in " + environment + " environment")
    connectDB()
})