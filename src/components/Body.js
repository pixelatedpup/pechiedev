import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'
import './style.css'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact'
import Works from './routes/Works'
import About from './routes/About'



const Body = () => {
    // const navs = ["Home", "Works", "Portfolio", "About", "Contact"]
  return (
   
    <div className='flex-container'>
       <header>
        <Header />
      </header>
      <main>
        <div className='content'>
                <div className='main'>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                </div>   
                <div className="nav-wrapper">       
                <Nav />
                </div>    

        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Body;
