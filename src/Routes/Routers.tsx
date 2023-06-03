import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// @ts-ignore
import ChartsAndMaps from '../components/ChartsAndMaps';
// @ts-ignore
import Contacts from '../components/Contacts';


const Routers = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Contacts />} />
           <Route path="/chartsandmaps" element={<ChartsAndMaps />} />
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Routers