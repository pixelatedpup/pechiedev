import Body from './components/Body'
// import Nav from './components/Nav'
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  useEffect(() =>{
    document.title = 'ogius';
  }, []);
  return (
    <div className="App"> 
        <BrowserRouter>
          <Body />
        </BrowserRouter> 
    </div>
  );
}

export default App;
