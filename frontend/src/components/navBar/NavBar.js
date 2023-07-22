import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to='/' class=" navbar-brand nav-link">Home</Link>
            </li>
            <li class=" nav-item">
              <Link to='/train' class="navbar-brand  nav-link" >GetTrainByNumber</Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default navBar;
