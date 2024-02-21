import crypto_listSchema from "../models/crypto_listSchema.js"
const getID = async(req,res) => {
    try{
        const name = await req.body.name
        if( !name){
            return res.status(400).send({message:"Invalid request"})
        }
        try{
            const data = await crypto_listSchema.findOne({name : name});
            if (!data) {
                return res.status(400).send({
                    message: 'Invalid Name',
                });
            }
            res.status(200).send({
                message : 'Success',
                id : data.id
            })
        }
        catch(error){
            console.log(error)
            res.status(500).send({
                message : "something went wrong"
            })
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message : "something went wrong"
        })
    }
}

export default getID