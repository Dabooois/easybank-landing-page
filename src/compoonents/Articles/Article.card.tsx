import React from 'react';

type TArticleCard = {
  path: string;
  author: string;
  title: string;
  description: string;
};

const ArticleCard = ({ path, author, title, description }: TArticleCard) => {
  return (
    <div className='shadow-sm  rounded-b-xl'>
      <img src={path} alt={title} className='rounded-t-xl' />
      <div className='flex flex-col gap-4 bg-white text-greyishBlue p-12  rounded-b-xl'>
        <p className='text-[1.2rem] font-customThin'>By {author}</p>
        <h5 className='text-normal font-bold leading-snug text-darkBlue'>
          {title}
        </h5>
        <p className='text-[1.4rem] font-customThin'>{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
