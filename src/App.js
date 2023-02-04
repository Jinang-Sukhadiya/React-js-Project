import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import './Mystyle.css'
import Home from './Home';
import About from './About';
import AdditionForm from './AdditionForm';
import Calculator from './Calculator';
import LeapYearChecker from './LeapYearChecker';
import Contact from './Contact';
function App() {
 
  return (
    <React.Fragment>
      <Router>
       {/* <a href='/Home'> Home</a> |
       <a href='/About'> About</a> |
       <a href='/Contact'> Contact</a> | */}
       
       <Link to='/Home'> Home</Link> | 
       <Link to='/About'> About</Link> | 
       <Link to='/Contact'> Contact</Link> | 
       <Link to='/AdditionForm'> AdditionForm</Link> | 
       <Link to='/Calculator'> Calculator</Link> | 
       <Link to='/LeapYearChecker'> LeapYearChecker</Link> | 
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/AdditionForm' element={<AdditionForm/>}/>
          <Route path='/Calculator' element={<Calculator/>}/>
          <Route path='/LeapYearChecker' element={<LeapYearChecker/>}/>
        </Routes>
      </Router>
    
    </React.Fragment>
  );
}

export default App;