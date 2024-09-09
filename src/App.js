import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Alltasks from './pages/Alltasks';
import Importanttasks from './pages/Importanttasks';
import Completedtasks from './pages/Completedtasks';
import Incompletedtasks from './pages/Incompletedtasks';


function App() {
  return (
    <div className='bg-gray-900 text-white relative'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
          <Route index element={<Alltasks />}/>
          <Route path='/importanttasks' element={<Importanttasks />}/>
          <Route path='/completedtasks' element={<Completedtasks />}/>
          <Route path='/incompletedtasks' element={<Incompletedtasks />}/>
          </Route>  




        </Routes>
          </Router>
      {/* <Home /> */}
      
    </div>
    
  );
}

export default App;
