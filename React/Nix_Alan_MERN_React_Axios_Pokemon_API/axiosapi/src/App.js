
import './App.css';
import React, { useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  const [pokArr, setpokArr] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response=>{
      console.log(response.data.results);
      setpokArr(response.data.results)})
      .catch((err) => console.log(err))
  },[]);
  return (
    <div className="App">
      <div>
        {/* {console.log(pokNameArr)} */}
        {
          pokArr.length > 0 && pokArr.map((item,index)=>{
            return(
              <div key={index}>
                {item.name}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
