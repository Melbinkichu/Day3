import logo from './logo.svg';
import './App.css';
import One from './components/One';
import Two from './components/Two';
import { Route, Routes } from 'react-router-dom';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';

function App() {
  return (
    <div className="App">
     <Two/>
     <Routes>
      <Route path='/' element={<One/>}/>
      <Route path='/s' element={<Three/>}/>
      <Route path='/t' element={<Four/>}/>
      <Route path='/a' element={<Five/>}/>
     </Routes>
    </div>
  );
}

export default App;
