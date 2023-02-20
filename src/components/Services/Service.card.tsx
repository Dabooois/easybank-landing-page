import React from 'react';
import { Paragraph } from '../../assets/styled/styled';
import { CardContainer } from '../../assets/styled/Service.styles';

interface IServiceCard {
  url: string;
  title: string;
  description: string;
}

const ServiceCard = ({ title, url, description }: IServiceCard) => {
  return (
    <CardContainer>
      <img src={url} alt={title} />
      <h4 className='font-bold text-regular text-darkBlue'>{title}</h4>
      <Paragraph className='md:text-center'>{description}</Paragraph>
    </CardContainer>
  );
};

export default ServiceCard;
