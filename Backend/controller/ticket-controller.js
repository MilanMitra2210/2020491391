const  axios  = require("axios");

const sortTrain=(data)=>{
    const allTrains=data.allTrains;
    const type=data.type;

    const filteredTrains=allTrains.filter((train)=>{
        const currentTime=new Date();
        const departureTime=new Date(currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        train.departureTime.Hours,
        train.departureTime.Minutes,
        train.departureTime.Seconds);

        departureTime.setMinutes(departureTime.getMinutes() + train.delayedBy);

        const timeDifference = (departureTime - currentTime) / (1000 * 60);

        return timeDifference > 30 && timeDifference <= 720;
    });


    filteredTrains.sort((a, b) => {
        if(type==="AC"){
            if (a.price.AC !== b.price.AC) {
                return a.price.AC - b.price.AC; 
              } else {
                const aDepartureTime = new Date(
                  new Date().setHours(a.departureTime.hour, a.departureTime.minute, a.departureTime.second)
                );
                const bDepartureTime = new Date(
                  new Date().setHours(b.departureTime.hour, b.departureTime.minute, b.departureTime.second)
                );
            
                if (aDepartureTime.getTime() !== bDepartureTime.getTime()) {
                  return aDepartureTime - bDepartureTime;
                } else {
                  return bDepartureTime - aDepartureTime;
                }
              }
        }
        else{
            if (a.price.sleeper !== b.price.sleeper) {
                return a.price.sleeper - b.price.sleeper;
              } else {
                const aDepartureTime = new Date(
                  new Date().setHours(a.departureTime.hour, a.departureTime.minute, a.departureTime.second)
                );
                const bDepartureTime = new Date(
                  new Date().setHours(b.departureTime.hour, b.departureTime.minute, b.departureTime.second)
                );
            
                if (aDepartureTime.getTime() !== bDepartureTime.getTime()) {
                  return aDepartureTime - bDepartureTime; 
                } else {
                  return bDepartureTime - aDepartureTime;
                }
              }
        }
        
      });

    return filteredTrains;
}

const getAuthorization = async() =>{
    try {
        const params = {
                "companyName": "Train Central",
                "clientID": "f8309f68-ec1b-4fbd-aec6-d9de91691e7e",
                "clientSecret": "khaujRMxfcNGDjkb",
                "ownerName": "Milan",
                "ownerEmail": "2020491391.milan@ug.sharda.ac.in",
                "rollNo": "2020491391"
        }
    
        const response =await  axios.post("http://20.244.56.144/train/auth",params);
        const access_token = response.data.access_token;
        return access_token;
    } catch (error) {
        return null;
    }
}

module.exports.getTrains = async(req , res) =>{
    try {
        const type=req.params.type;
        const token=await getAuthorization();
        if(token==null){
            return res.status(500).json("Authorisation revoked");
        }
        const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }
        const response= await axios.get("http://20.244.56.144/train/trains",config);
        const data={
            allTrains:response.data,
            type
        };
        const filteredTrains=sortTrain(data);
        return res.status(200).json(filteredTrains);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
module.exports.searchTrain = async(req , res) =>{
    try {
        const number = req.params.number;
        const token=await getAuthorization();
        if(token==null){
            return res.status(500).json("Authorisation revoked");
        }
        const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }
        const response= await axios.get(`http://20.244.56.144/train/trains/${number}`,config);
        const train=response.data;
        return res.status(200).json(train);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
