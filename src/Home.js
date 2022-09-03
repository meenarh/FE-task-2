import "./App.css";
//import { BiSearchAlt } from "react-icons/bi";
import useFetch from "./useFetch";
import { Component, useState } from "react";

//https://covidnigeria.herokuapp.com/api



function DataFetch() {
  const { data, isPending } = useFetch(
    "https://covidnigeria.herokuapp.com/api"
  );

  return { data, isPending };
}



class DisplayStats extends Component {
  render() {
    const covidData =  this.props.statsData
    //console.log(covidData)
    return (
      <div className="stats">
        <div className="national-stats">
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

        <div className="searched-stats">
          <div>
            <h2>State</h2>
            <p>{covidData}</p>
          </div>
          <div>
            <h4>Confirmed Cases</h4>
            <p>{}</p>
          </div>
          <div>
            <h4>Cases on Admission</h4>
            <p>{}</p>
          </div>
          <div>
            <h4>Discharged</h4>
            <p>{}</p>
          </div>
          <div>
            <h4>Death</h4>
            <p>{}</p>
          </div>
        </div>
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <form className="search" onSubmit>
        <input
          type="text"
          name="search"
          value
          onChange
          placeholder="Enter state"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class Home extends Component {
  //const {data, isPending} = DataFetch()
//figure out the right way to grab data from data fetch and pass as props to Home Comp
  render() {
    return (
      <div>
        <SearchBar />
        <DisplayStats statsData={data}/>
      </div>
    );
  }
}
export { DataFetch };
export default Home;
