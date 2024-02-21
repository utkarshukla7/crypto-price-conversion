import express from "express";
import connectDB from "./DB_config.js";
import dotenv from "dotenv";
import addCrypto from "./helpers/addCrypto.js";
import cors from "cors";
import getID from "./helpers/getID.js";
import morgan from "morgan";
import convert from "./helpers/convert.js";
import companies from "./helpers/companies.js";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors()); 
app.use(morgan('dev'));

app.get("/get_id", getID);    // getID of cryptocurrency based on its name
app.get("/convert",convert);  // convert one cryptocurrency into another (dd-mm-yyyy)
app.get("/companies/public_treasury",companies)  //get list of companines

try {
    setInterval(() => {
        addCrypto();
    }, 60 * 60 * 1000);
} catch (error) {
    console.log(error);
}

app.listen(8000, () => {
    console.log("Running on 8000");
});
