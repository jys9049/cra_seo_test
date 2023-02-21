import React from 'react';
import logo from './logo.svg';
import './App.css';
import MetaTags from './util/MetaTags';

function App() {

  const metaTagProps = {
    title: "SEO 테스트",
    description: "react-snap, react-helmet-async 테스트 입니다.",
    image: JSON.stringify(logo)
  }

  return (
    <>
      <MetaTags {...metaTagProps} />
      <h1>hellow~</h1>
    </>
  );
}

export default App;
