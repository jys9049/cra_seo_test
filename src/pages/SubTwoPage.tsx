import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import testImg from '../assets/testImg.jpeg'
import testImg2 from '../assets/testImg2.jpeg'
import MetaTags from '../util/MetaTags';

const SubTwoPage = () => {
  const param = useParams()
  const [params, setParams] = useState(param)

  const metaTagProps = {
    title: "SEO 테스트 서브2페이지",
    description: "react-snap, react-helmet-async 서브페이지2 테스트 입니다.",
    image: params.id === "1" ? testImg : testImg2
  }

  useEffect(() => {
    setParams(param)
  }, [param, param.id])

  return (
    <>
      <MetaTags {...metaTagProps} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
        서브2페이지 입니다.
        <img src={params.id === "1" ? testImg : testImg2} alt="강아지" width="150px" height="150px" />
      </div>
    </>
  );
};

export default SubTwoPage;