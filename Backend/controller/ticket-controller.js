const  axios  = require("axios");

const getAuthorization = async() =>{
    try {
        const params = {

        }
    
        const data = axios.post("http://20.244.56.144/train/auth",params);
        const token = data.access_token;
        return token;
    } catch (error) {
        return null;
    }
}

const sortTrain =(trains) =>{

}

module.exports.getTrains = async(req , res) =>{
    try {
        const token = await getAuthorization();
        if(token === null){
            return res.status(500).json("Authorization revoked");
        }
        const config = {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }
        const trainData = await axios.get('http://20.244.56.144/train/trains', config);
        return res.status(200).json(trainData);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
module.exports.searchTrain = async(req , res) =>{
    try {
        const token = await getAuthorization();
        if(token === null){
            return res.status(500).json("Authorization revoked");
        }
        const num = req.params.number;
        const config = {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }
        const data = await axios.get(`http://20.244.56.144/train/trains${num}`, config);
        return res.status(200).json(data);
    } catch (error) {
        
    }
}
