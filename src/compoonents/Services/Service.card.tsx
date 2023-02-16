import React from 'react';
import { Paragraph } from '../../assets/styled/styled';
import { CardContainer } from './Service.styles';

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
      <Paragraph>{description}</Paragraph>
    </CardContainer>
  );
};

export default ServiceCard;