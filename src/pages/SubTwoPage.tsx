import React from 'react';
import testImg from '../assets/testImg.jpeg'
import MetaTags from '../util/MetaTags';

const SubTwoPage = () => {
  const metaTagProps = {
    title: "SEO 테스트 서브2페이지",
    description: "react-snap, react-helmet-async 서브페이지2 테스트 입니다.",
    image: testImg
  }
  return (
    <>
      <MetaTags {...metaTagProps} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
        서브2페이지 입니다.
        <img src={testImg} alt="강아지" width="150px" height="150px" />
      </div>
    </>
  );
};

export default SubTwoPage;