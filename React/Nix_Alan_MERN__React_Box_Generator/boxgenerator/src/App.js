
import { useState } from 'react';
import './App.css';
import ColorBoxInputForm from './Components/ColorBoxInputForm'
import DisplayColorBox from './Components/Displaycolorbox';

function App() {
  // const[newColor, setNewColor] = useState("")
  // const[savedColor, setSavedColor] = useState([])
  // const [boxSize, setBoxSize] = useState(0)
  // const [boxSizeArr, setBoxSizeArr] = useState([])
  const[passNewBox, setPassNewBox] = useState([])

const displayNewBox = ( box ) => {
  setPassNewBox( box )
  console.log(box)
  
}

  // const changeColor = (tempNewCollor) => {
  //   setNewColor( tempNewCollor )
  //   setSavedColor( [...savedColor, tempNewCollor] )
  // }

  // const changeBoxSize = (size) => {
  //   setBoxSize( size )
  //   setBoxSizeArr([ ...boxSizeArr, size ])

  //console.log([passNewBox[0].size,passNewBox[0].color])
  return (
    <div className="App">
      <ColorBoxInputForm onDisplayNewBox={ displayNewBox }/>
    
      <DisplayColorBox onPassNewBox = {passNewBox} />
    
    </div>
  );
}

export default App;
