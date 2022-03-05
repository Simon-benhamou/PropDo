import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
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
     <Route path="/" element={ <Navigate from="/" to="/real-estate" />} />
      <Route path="/real-estate" element={<Listing />} />
      <Route path="/map" element={<Map />} />
    </Routes>
    </ContextProvider>
    </>
  );
}

export default App;
