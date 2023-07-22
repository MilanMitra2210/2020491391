import React, { useState } from "react";
import Train from "../components/Train";
import axios from "axios";

const Search = () => {
  const [train, setTrain] = useState();
  const [isData, setisData] = useState(false);
  const [number, setNumber] = useState();

  const getTrain = async () => {
    const result = await axios.get(`http://localhost:5000/searchtrain/${number}`);
    if (result.data) {
      console.log(result.data);
      setTrain(result.data);
      setisData(true);
    }
  };

  return (
    <div className="container w-50">
      <div className="input-group my-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={getTrain}
        >
          Search
        </button>
      </div>
      {isData ? (
        <Train props={train} />
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="text-muted">NO TRAIN FOUND</h2>
        </div>
      )}
    </div>
  );
};

export default Search;
