import { Link, Outlet } from 'react-router-dom';
import testImg from '../assets/testImg.jpeg'
import { IData } from '../types/dataType';
import MetaTags from '../util/MetaTags';

interface IMainPage {
  data: IData[];
}

const MainPage = ({ data }: IMainPage) => {
  const metaTagProps = {
    title: "SEO 테스트 메인페이지",
    description: "react-snap, react-helmet-async 메인페이지 테스트 입니다.",
    image: testImg
  }

  return (
    <>
      <MetaTags {...metaTagProps} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
        메인페이지 입니다. 아웃렛 테스트
        <img src={testImg} alt="강아지" width="150px" height="150px" />
      </div>
      <div>
        {data.map(item => (
          <Link to={`/sub2/${item.id}`} key={item.id} >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{item.title}</span>
              <img src={item.thumbnailUrl} alt="썸네일" width="150px" />
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default MainPage;