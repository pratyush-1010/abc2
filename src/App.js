import logo from './logo.svg';
import './App.css';
import './Design.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './components/Appbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Cat from './components/Cat';
import Offcan from './components/Offcan';
import OffcanBody from './components/OffcanBody';
import Single from './components/Single';
function App() {
  return (
    <div className="App">
      <Router>
     <Appbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="categories/:cat/story/:pid" element={<Single/>}></Route>

        <Route path="/categories/:cat" element={<Cat/>}></Route>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
