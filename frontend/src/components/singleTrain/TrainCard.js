import React from 'react'

const TrainCard = () => {
  return (
    <>
      <div class="card" style="width : 18rem">
        <div class="card-body">
            <h5 class="card-title">Train Name</h5>
            <p class="card-text">Train Number</p>
        </div>
        <ul class="list-group">
            <li class="list-group-item">Seats Available : </li>
            <li class="list-group-item">Departure Time : </li>
            <li class="list-group-item">Price: </li>
        </ul>
    </div>
    </>
  )
}

export default TrainCard
