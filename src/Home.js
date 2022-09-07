import "./App.css";
//import { BiSearchAlt } from "react-icons/bi";
import { Component,  useState } from "react";
import { useEffect } from "react";



class DisplayStats extends Component {
  render() {

    let data = this.props.data
 
    console.log(data)
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

    const [covidData, setCovidData] = useState([])

    useEffect(function getData(){
      fetch("https://covidnigeria.herokuapp.com/api")
        .then(response => response.json())
        .then(({data}) => {
          setCovidData(data)
        })
        
      }, [ ])
      //why does it log 4 times? 
      //console.log(covidData)


    return (
      <div>
        <SearchBar />
        {covidData === [] ? null : <DisplayStats data={covidData}/>}
      </div>
    );
}
export {  };
export default Home;
