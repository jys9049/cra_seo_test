import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/MainPage';
import SubPage from './pages/SubPage';
import SubTwoPage from './pages/SubTwoPage';

function App() {



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sub" element={<SubPage />} />
        <Route path="/sub2" element={<SubTwoPage />} />
      </Routes>
    </>
  );
}

export default App;
