import React from 'react';
import { Title } from '../../assets/styled/styled';
import { ArtileData } from '../../constants/data.json';
import ArticleCard from './Article.card';

const Article = () => {
  return (
    <section className='relative top-40 '>
      <div className='container flex flex-col gap-16 '>
        <Title as='h4' subtitle>
          Latest Articles
        </Title>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-16  bg-lightGray md:bg-white'>
          {ArtileData.map((el, key) => (
            <ArticleCard {...el} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
