import "./App.css";
//import { BiSearchAlt } from "react-icons/bi";
import { Component, useState } from "react";
import { useEffect } from "react";

class DisplayStats extends Component {
  render() {
    let data = this.props.data;

    //console.log(data);
    return (
      <div className="stats">
        <div className="national-stats">
          <h2>Nigeria</h2>
          <br></br>
          <div>
            <p>{data.totalSamplesTested}</p>
            <h4>Samples Tested</h4>
          </div>
          <div>
            <p>{data.totalConfirmedCases}</p>
            <h4>Confirmed Cases</h4>
          </div>
          <div>
            <p>{data.totalActiveCases}</p>
            <h4>Active Cases</h4>
          </div>
          <div>
            <p>{data.discharged}</p>
            <h4>Discharged</h4>
          </div>
          <div>
            <p>{data.death}</p>
            <h4>Deaths</h4>
          </div>
        </div>

        
      </div>
    );
  }
}

class SearchedStateStats extends Component{
  render(){
    return (
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
    )
  }
}

class SearchBar extends Component {
  
  
  render() {  


    return (
      <>
        <form className="search" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="search"
            value={this.props.userInput}
            onChange={this.props.handleChange}
            placeholder="Enter state"
          ></input>
          <button type="submit">Submit</button>
        </form>
        <h1>Covid Statistics</h1>
      </>
    );
  }
}

function Home() {
  const [covidData, setCovidData] = useState([]);
  const [userInput, setUserInput] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault()
    //filter through covid data with userInput,
    //  return specific state or "Not found to SearchStateStats"
     // fix style.
    console.log(userInput)

  }

  useEffect(function getData() {
    fetch("https://covidnigeria.herokuapp.com/api")
      .then((response) => response.json())
      .then(({ data }) => {
        setCovidData(data);
      });
  }, []);
  //why does it log 4 times?
  //console.log(covidData)
  //console.log(userInput)

  return (
    <div className="layout">
      <SearchBar className='searchBar' handleSubmit={(e) => handleSubmit(e)} text={userInput} handleChange={(e) => setUserInput(e.target.value)} />
      {covidData === [] ? null : <DisplayStats className='nationalStats' data={covidData} />}
      <SearchedStateStats className='searchStats'/>
    </div>
  );
}
export {};
export default Home;
