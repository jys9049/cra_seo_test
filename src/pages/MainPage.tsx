import React from 'react';
import { Link } from 'react-router-dom';
import testImg from '../assets/testImg.jpeg'
import MetaTags from '../util/MetaTags';

const MainPage = () => {
  const metaTagProps = {
    title: "SEO 테스트 메인페이지",
    description: "react-snap, react-helmet-async 메인페이지 테스트 입니다.",
    image: testImg
  }
  return (
    <>
      <MetaTags {...metaTagProps} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
        메인페이지 입니다.
        <img src={testImg} alt="강아지" width="150px" height="150px" />
      </div>
    </>
  );
};

export default MainPage;