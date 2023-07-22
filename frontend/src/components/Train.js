import React from "react";

const Train = (props) => {
    const trainName = props.props.trainName;
    const trainNumber = props.props.trainNumber;
    const duration = {
        hours: props.props.departureTime.Hours,
        minutes: props.props.departureTime.Minutes,
        second: props.props.departureTime.Seconds
    }
    const AC= props.props.seatsAvailable.AC;
    const sleeper=props.props.seatsAvailable.sleeper;

    const ACPrice =props.props.price.AC;
    const sleeperPrice=props.props.price.sleeper;
    const delayed =props.props.delayedBy;
  return (
    <>
      <div class="card" >
        <div class="card-body">
            <h5 class="card-title">Train Name: {trainName}</h5>
            <p class="card-text">Train Number: {trainNumber}</p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">Departure Time : {duration.hours}:{duration.minutes}</li>
            <li class="list-group-item">AC Seats Available : {AC} </li>
            <li class="list-group-item">AC Price: Rs {ACPrice}</li>
            <li class="list-group-item">Sleeper Seats Available : {sleeper} </li>
            <li class="list-group-item">Sleeper Price: Rs {sleeperPrice}</li>
        </ul>
    </div>
    </>
  );
};

export default Train;