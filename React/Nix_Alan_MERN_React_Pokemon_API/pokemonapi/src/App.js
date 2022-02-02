
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [pokArr, setpokArr] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=808')
    .then(response => response.json())
    .then(response => setpokArr(response.results))
  },[]);
  return (
    <div className="App">
        <div>
     {pokArr.length > 0 && pokArr.map((item, index)=>{
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
