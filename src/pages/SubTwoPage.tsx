import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IData } from '../types/dataType';
import MetaTags from '../util/MetaTags';

interface IMainPage {
  data: IData[];
}

const SubTwoPage = ({ data }: IMainPage) => {
  const [loading, setLoading] = useState<boolean>(true)
  const param = useParams()
  const intParam = Number(param.id)

  console.log(data)

  const [metaTag, setMetaTag] = useState({
    title: '',
    description: '',
    image: '',
  })

  useEffect(() => {
    setLoading(true)
    if (intParam) {
      if (data) {
        const test = {
          title: data[intParam].title,
          description: data[intParam].title,
          image: data[intParam].thumbnailUrl,
        }
        setMetaTag(test)
        setLoading(false)
      }
    }
  }, [data, intParam, loading])

  return (
    <>
      {loading === false ?
        <>
          <MetaTags {...metaTag} />
          <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
            {`서브${param.id} 페이지 입니다.`}
            <img src={metaTag.image} alt="강아지" width="150px" height="150px" />
          </div>
        </>
        :
        <div>Loading...</div>
      }
    </>
  );
};

export default SubTwoPage;