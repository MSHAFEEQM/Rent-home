import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BuyPage from './Pages/BuyPage';
import RentPage from './Pages/RentPage';
import Homepage from './Pages/Homepage';
import Sellpage from './Pages/Sellpage';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<RentPage />}/>
        <Route path='/home' element={<Homepage/>} />
        <Route path='/buy' element={<BuyPage/>} />
        <Route path='/sell' element={<Sellpage/>} />
        <Route path='/manage' element={<BuyPage/>} />
        <Route path='/resource' element={<BuyPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
