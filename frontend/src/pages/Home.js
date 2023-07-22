import React, { useEffect, useState } from "react";
import Train from "../components/Train";
import axios from 'axios';

const Home = () => {
  const [trains, setTrains] = useState([]);
  const [isData, setisData] = useState(false);

  const loadTrainData = async () => {
    try {
        const result = await axios.get("http://localhost:5000/trains/AC");
        if (result.data && result.data.length > 0) {
          setTrains(result.data);
          setisData(true);
        } else {
          setisData(false); 
        }
      } catch (error) {
        console.error("Error fetching train data:", error);
        setisData(false);
      }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadTrainData();
    }, 1500); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <h1>Train Schedule</h1>
      </div>
      <div className="row justify-content-center mt-3">
        {isData ? (
          trains.map(train => {
            return <Train key={train.trainNumber} props={train} />
          })
        ) : (
          <div className="align-items-center">
            <h2 className="text-muted">NO TRAIN FOUND</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
