
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Subcontent from './Components/Subcontent';
import Advertisement from './Components/Advertisement';



function App() {
  return (
    <div className="App">
    <Header />
    <div className='row'>
    <Nav />
    <Main/>
    </div>
    
    </div>
  );
}

export default App;
