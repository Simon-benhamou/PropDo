import './App.css';
import {Routes,Route} from 'react-router-dom'
import Listing from './pages/Listing';
import Map from './pages/Map';
import Nav from './component/Nav';
import ContextProvider from "./Contexts/Context";


function App() {

  return (
    <>
    <ContextProvider>
    <Nav/>
    <Routes>
      <Route path="/real-estate" element={<Listing />} />
      <Route path="/map" element={<Map />} />
    </Routes>
    </ContextProvider>
    </>
  );
}

export default App;
