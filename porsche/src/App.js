import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ModelStartPage from './Pages/ModelStartPage/ModelStartPage';
import ModelsPage from './Pages/ModelsPage/ModelsPage';
import CarPage from './Pages/CarPage/CarPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/models' element={<ModelsPage />}/>
      <Route path='/model-start' element={<ModelStartPage />}/>
      <Route path='/models/:modelName/:modelHeader' element={<CarPage />}/>
    </Routes>
  );
}

export default App;
