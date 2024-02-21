import axios from "axios"
import crypto_listSchema from "../models/crypto_listSchema.js"
const addCrypto = async () => {
    try{
        const url = 'https://api.coingecko.com/api/v3/coins/list'
        const response = await axios.get(url)
        const data = response.data    
        try{
            for (const crypto of data) {
                await crypto_listSchema.updateOne(
                    { id: crypto.id },
                    { $set: crypto },
                    { upsert: true }
                );
            }
        }
        catch(error){
            console.log(error)
        }    
    }
    
    catch(error){
        console.log("error in fetching symbol data ",error)
    }

}

export default addCrypto