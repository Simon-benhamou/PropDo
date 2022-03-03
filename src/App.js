import './App.css';
import {Routes,Route} from 'react-router-dom'
import Listing from './pages/Listing';
import Map from './pages/Map';
import Nav from './component/Nav';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/real-estate" element={<Listing />} />
      <Route path="/map" element={<Map />} />
    </Routes>
    </>
  );
}

export default App;
