import './App.css';
import { BiSearchAlt }  from 'react-icons/bi'

function Home() {
  return (
    <div className='home'>
     <h1>Nigeria's COVID-19 Statistics</h1>
     <p className='info'>This app is designed to search and display the statistics of Covid-19 cases in Nigeria, using an open API.</p>
        
        <div className='search'>
          <input type="text" name="search" placeholder="Enter search keyword"></input>
          <button type="submit"><BiSearchAlt/></button>
        </div>
        

        <h2>Total Statistics of Covid-19 Cases and Death in Nigeria</h2>

        <div className='total'>
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

        <h3>Lagos</h3>

        <div className='results'>
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
