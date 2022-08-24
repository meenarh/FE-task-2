import "./App.css";
//import { BiSearchAlt } from "react-icons/bi";
import useFetch from "./useFetch";
import { useState, useMemo } from "react";

//https://covidnigeria.herokuapp.com/api

function Home() {
  const [stateData, setStateData] = useState(null);
  const [inputState, setInputState] = useState("");
  const [displayState, setDisplayState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const STATE = stateData.filter((data) => {
      // eslint-disable-next-line eqeqeq
      return data.state.toLowerCase() == inputState.toLowerCase()
        ? data.state.toLowerCase()
        : null;
      //add error management for when no matching states is found
    });
    setDisplayState(...STATE);
  };

  const { data, isPending } = useFetch(
    "https://covidnigeria.herokuapp.com/api"
  );

  console.log(displayState.state);

  const stats = useMemo(() => data, [data]);

  if (!isPending && !stateData) {
    setStateData(stats.data.states);
  }

  //add auto-complete functionality to state name searching, 
  //on keypress matching states should be displyed under search box
  //switch state management to redux
  //beautify the fuck out of the page


  return (
    <div className="home">
      <h1>Nigeria's COVID-19 Statistics</h1>
      <p className="info">
        This app is designed to search and display the statistics of Covid-19
        cases in Nigeria, using an open API.
      </p>

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          placeholder="Enter state"
        ></input>
        <button type="submit">Submit</button>
      </form>

      <h2>Total Statistics of Covid-19 Cases and Death in Nigeria</h2>

      <div className="total">
        <div>
          <h4>Samples Tested</h4>
          <p>43948398</p>
        </div>
        <div>
          <h4>Confirmed Cases</h4>
          <p>1809212</p>
        </div>
        <div>
          <h4>Active Cases</h4>
          <p>4348389</p>
        </div>
        <div>
          <h4>Discharged</h4>
          <p>390293</p>
        </div>
        <div>
          <h4>Death</h4>
          <p>48430309</p>
        </div>
      </div>

      <h3>{displayState.state}</h3>

      <div className="results">
        <div>
          <h4>Confirmed Cases</h4>
          <p>{displayState.confirmedCases}</p>
        </div>
        <div>
          <h4>Cases on Admission</h4>
          <p>{displayState.casesOnAdmission}</p>
        </div>
        <div>
          <h4>Discharged</h4>
          <p>{displayState.discharged}</p>
        </div>
        <div>
          <h4>Death</h4>
          <p>{displayState.death}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
