import { Helmet } from 'react-helmet-async';

interface IMetaTags {
  title: string;
  description: string;
  image: string;
}

export const MetaTags = ({
  title,
  description,
  image,
}: IMetaTags) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:image' content={image} />
        <meta property='og:description' content={description} />
      </Helmet>
    </>
  );
};

export default MetaTags