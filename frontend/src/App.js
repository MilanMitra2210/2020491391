import './App.css';
import AllTrains from './components/alltrains/AllTrains';
import NavBar from './components/navBar/NavBar';
import { Route, BrowserRouter ,Routes } from 'react-router-dom';
import SingleTrain from './components/singleTrain/SingleTrain';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={AllTrains} />
          <Route path='/train' exact Component={SingleTrain} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
