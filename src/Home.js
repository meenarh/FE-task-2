import "./App.css";
//import { BiSearchAlt } from "react-icons/bi";
import useFetch from "./useFetch";
import { Component, useMemo, useState } from "react";

//

function DataFetch() {
  const { data } = useFetch(
    "https://covidnigeria.herokuapp.com/api"
  );
  //console.log(data)
  return { data };
}


class DisplayStats extends Component {
  render() {
    let covidData;
    if(this.props.statsData === null){
      return 
    }else{
      covidData =  this.props.statsData
    }
    // console.log({...covidData.data.data.states[0]})
    return (
      <div className="stats">
        <div className="national-stats">
          <h2>Nigeria</h2>
          <br></br>
          <div>
            <p>4394898</p>
            <h4>Samples Tested</h4>
          </div>
          <div>
            <p>1809212</p>
            <h4>Confirmed Cases</h4>
          </div>
          <div>
            <p>4348389</p>
            <h4>Active Cases</h4>
          </div>
          <div>
            <p>390293</p>
            <h4>Discharged</h4>
          </div>
          <div>
            <p>409</p>
            <h4>Deaths</h4>
          </div>
        </div>

        <div className="searched-stats">
          <h2>State: </h2>
          <br></br>
          <div>
            <p>60900</p>
            <h4>Confirmed Cases</h4>
          </div>
          <div>
            <p>7890</p>
            <h4>Cases on Admission</h4>
          </div>
          <div>
            <p>74830</p>
            <h4>Discharged</h4>
          </div>
          <div>
            <p>89</p>
            <h4>Deaths</h4>
          </div>
        </div>
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <>
        <form className="search">
          <input
            type="text"
            name="search"
            // value
            // onChange
            placeholder="Enter state"
          ></input>
          <button type="submit">Submit</button>
        </form>
        <h1>Covid Statistics</h1>
      </>
    );
  }
}

function Home (){
    let data
    //prevent second rerender after grabbing data
    //let data persit long enough to be used?
    //locale storage and error management
    data = useMemo(() => DataFetch(), []);

    return (
      <div>
        <SearchBar />
        {data ? <DisplayStats statsData={data} /> : null}
      </div>
    );
}
export { DataFetch };
export default Home;
