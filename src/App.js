
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Wrapper from './Wrapper';
import MasterClassWrapper from './MasterClass/Wrapper';
function App() {

  
  return <>
 <Router>
    <Routes>
    <Route path="/" index element={<Wrapper/>}/>
    <Route path="/masterclass" index element={<MasterClassWrapper/>}/>


 </Routes>
 </Router>
  </>
}

export default App;
