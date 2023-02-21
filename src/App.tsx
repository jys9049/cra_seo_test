import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/MainPage';
import SubPage from './pages/SubPage';
import SubTwoPage from './pages/SubTwoPage';
import { IData } from './types/dataType';

function App() {

  const [data, setData] = useState<IData[]>([])

  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setData(res.data.slice(0, 30))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage data={data} />} />
        <Route path="/sub" element={<SubPage />} />
        <Route path="/sub2/:id" element={<SubTwoPage data={data} />} />
      </Routes>
    </>
  );
}

export default App;
