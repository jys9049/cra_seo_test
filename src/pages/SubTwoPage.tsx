import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import testImg from '../assets/testImg.jpeg'
import testImg2 from '../assets/testImg2.jpeg'
import { IData } from '../types/dataType';
import MetaTags from '../util/MetaTags';

interface IMainPage {
  data: IData[];
}

const SubTwoPage = ({ data }: IMainPage) => {
  const param = useParams()
  const intParam = Number(param.id)
  const [metaTag] = useState({
    title: data[intParam].title,
    description: data[intParam].title,
    image: data[intParam].thumbnailUrl,
  })

  return (
    <>
      <MetaTags {...metaTag} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
        {/* {/* {`서브${params.id} 페이지 입니다.`} */}
        <img src={data[intParam].thumbnailUrl} alt="강아지" width="150px" height="150px" />
      </div>
    </>
  );
};

export default SubTwoPage;