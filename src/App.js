import Body from './components/Body'
// import Nav from './components/Nav'
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  useEffect(() =>{
    document.title = 'PECHIEDEV';
  }, []);
  return (
    <div className="App"> 
        <BrowserRouter basename="/">
          <Body />
        </BrowserRouter> 
    </div>
  );
}

export default App;
