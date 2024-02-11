import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ModelStartPage from './Pages/ModelStartPage/ModelStartPage';
import ModelsPage from './Pages/ModelsPage/ModelsPage';
import CarPage from './Pages/CarPage/CarPage';
import Problem from './Components/Problem';
import DealerSearch from './Pages/DealerSearch/DealerSearch';
import EPerformancePage from './Pages/EPerformancePage/EPerformancePage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/models' element={<ModelsPage />}/>
      <Route path='/model-start' element={<ModelStartPage />}/>
      <Route path='/models/:modelName/:modelHeader' element={<CarPage />}/>
      <Route path='/dealersearch' element={<DealerSearch />} />
      <Route path='/aboutporsche/e-performance' element={<EPerformancePage />} />
      <Route path='/aboutporsche/importers/contactform/' element={<ContactPage />} />
    </Routes>
  );
}

export default App;
