import React from 'react';
import testImg2 from '../assets/testImg2.jpeg'
import MetaTags from '../util/MetaTags';

const SubPage = () => {
  const metaTagProps = {
    title: "SEO 테스트 서브페이지",
    description: "react-snap, react-helmet-async 서브페이지 테스트 입니다.",
    image: testImg2
  }
  return (
    <>
      <MetaTags {...metaTagProps} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
        서브페이지 입니다.
        <img src={testImg2} alt="강아지" width="150px" height="150px" />
      </div>
    </>
  );
};

export default SubPage;