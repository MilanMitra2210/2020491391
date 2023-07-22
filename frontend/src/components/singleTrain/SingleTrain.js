import React from 'react'
import TrainCard from './TrainCard'

const SingleTrain = () => {
  return (
    <div className='container'>
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
            <label for="" class="sr-only">Enter Train Number</label>
            <input type="text" class="form-control" id="" placeholder="Enter Train Number"/>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
        <TrainCard/>
    </div>
  )
}

export default SingleTrain
