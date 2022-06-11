import { Routes, Route } from "react-router-dom";
import Details from "../molecules/DetailsStandings";
import Matches from "../molecules/DetailsMatches";
import Home from '../molecules/Home';

const Urls = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/competitions/:id' element={<Details />}/>	
            <Route path='/competitions/:id/matches' element={<Matches />}/>			
        </Routes>
     );
}
 
export default Urls;