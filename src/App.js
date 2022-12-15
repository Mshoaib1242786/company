import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
 <div className='main'>
         <h2 className='main-header'>Company Form</h2>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Create/>} />
      
      <Route path='/Read' element={ <Read/>} />
      
      <Route path='/Update' element={ <Update/>} />
      
 
 
 
    </Routes> <br/>
    </BrowserRouter>
  </div> 
  );
}

export default App;
