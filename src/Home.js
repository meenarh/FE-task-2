import "./App.css";
//import { BiSearchAlt } from "react-icons/bi";
import { Component, useState } from "react";
import { useEffect } from "react";

class DisplayStats extends Component {
  render() {
    let data = this.props.data;

    //console.log(data);
    return (
      <div className="country-stats wrapper">
        <h2>Nigeria</h2>

        <div className="data-box">
          <p>{data.totalSamplesTested}</p>
          <h4>Samples Tested</h4>
        </div>
        <div className="data-box">
          <p>{data.totalConfirmedCases}</p>
          <h4>Confirmed Cases</h4>
        </div>
        <div className="data-box">
          <p>{data.totalActiveCases}</p>
          <h4>Active Cases</h4>
        </div>
        <div className="data-box">
          <p>{data.discharged}</p>
          <h4>Discharged</h4>
        </div>
        <div className="data-box">
          <p>{data.death}</p>
          <h4>Deaths</h4>
        </div>
      </div>
    );
  }
}

const SearchedStateStats = ({data}) => {
  return (
    <div className="state-stats wrapper">
      <h2>{data.state}</h2>
      <div className="data-box">
        <p>{data.confirmedCases}</p>
        <h4>Confirmed Cases</h4>
      </div>
      <div className="data-box">
        <p>{data.casesOnAdmission}</p>
        <h4>Cases on Admission</h4>
      </div>
      <div className="data-box"> 
        <p>{data.discharged}</p>
        <h4>Discharged</h4>
      </div>
      <div className="data-box">
        <p>{data.death}</p>
        <h4>Deaths</h4>
      </div>
    </div>
  );
};

class SearchBar extends Component {
  render() {
    return (
      <div className="heading-searchbar wrapper">
        <h1>Covid Statistics</h1>
        <form className="search" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="search"
            value={this.props.userInput}
            onChange={this.props.handleChange}
            placeholder="type state name"
          ></input>
          <button type="submit">search</button>
        </form>
      </div>
    );
  }
}



function Home() {
  const [covidData, setCovidData] = useState([]);
  const [userInput, setUserInput] = useState(null);
  const [states, setStates] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    let states = covidData.states;
    setStates(states.filter(
      (i) => i.state.toLowerCase() === userInput.toLowerCase()
    ));
  };

  useEffect(function getData() {
    fetch("https://covidnigeria.herokuapp.com/api")
      .then((response) => response.json())
      .then(({ data }) => {
        setCovidData(data);

      });
  }, []);
  //why does it log 4 times?
console.log(states)



  return (
    <div className="layout">
      <SearchBar
        className="searchBar"
        handleSubmit={(e) => handleSubmit(e)}
        text={userInput}
        handleChange={(e) => setUserInput(e.target.value)}
      />
      <div className="data-section">
        {covidData === [] ? null : (
          <DisplayStats className="nationalStats" data={covidData} />
        )}
        {/* // eslint-disable-next-line eqeqeq */}
        { states == [] || undefined ? 'no state found' : <SearchedStateStats className="searchStats" data={states[0]} />}
      </div>
    </div>
  );
}
export {};
export default Home;
