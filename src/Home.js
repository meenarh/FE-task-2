import "./App.css";
//import { BiSearchAlt } from "react-icons/bi";
import useFetch from "./useFetch";
import { useState, useMemo } from "react";

//https://covidnigeria.herokuapp.com/api

function Home() {
  const [stateData, setStateData] = useState(null);
  const [inputState, setInputState] = useState("");
  // const [figures, setFigures] = useState({})


  const { data, isPending } = useFetch(
    "https://covidnigeria.herokuapp.com/api"
  );

  const stats = useMemo(() => data, [data]);

  if (!isPending && !stateData) {
    setStateData(stats.data.states);
  }

  //console.log(stateData[0]);
  console.log(inputState);


  const handleSubmit = (e) => {
    e.preventDefault();
    stateData.filter((data) => {
      // eslint-disable-next-line eqeqeq
      if(data.state.toLowerCase() == inputState.toLowerCase()){ 
        console.log(data)
      }
    })
// problems: destructuring the data and passing it down to the appropriate returned html
//     check if input matches any state name
//     if yes return the state details in react
//     if no, create a 'state not found component' to return
  };

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
        <button type="submit">Submit Form</button>
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

      <h3>{}</h3>

      <div className="results">
        <div>
          <h4>Confirmed Cases</h4>
          <p>3298030</p>
        </div>
        <div>
          <h4>Cases on Admission</h4>
          <p>28328332</p>
        </div>
        <div>
          <h4>Discharged</h4>
          <p>3939209</p>
        </div>
        <div>
          <h4>Death</h4>
          <p>9493039</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
