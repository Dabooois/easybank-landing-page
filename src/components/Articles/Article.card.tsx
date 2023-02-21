import React from 'react';

type TArticleCard = {
  path: string;
  author: string;
  title: string;
  description: string;
};

const ArticleCard = ({ path, author, title, description }: TArticleCard) => {
  return (
    <div className='shadow-sm flex flex-col rounded-b-xl'>
      <img src={path} alt={title} className='rounded-t-xl h-80 object-cover' />
      <div className='flex flex-col gap-6 bg-white text-greyishBlue p-12 lg:p-8 xl:p-12   rounded-b-xl'>
        <p className='text-[1.2rem] font-customThin'>By {author}</p>
        <h5 className='text-normal md:text-regular leading-snug cursor-pointer text-darkBlue hover:text-limeGreen'>
          {title}
        </h5>
        <p className='text-[1.4rem] font-customThin'>{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
