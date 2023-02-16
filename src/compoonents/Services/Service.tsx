import { Paragraph, Title } from '../../assets/styled/styled';
import ServiceCard from './Service.card';
import { ServiceData } from '../../constants/data.json';
import { CardContainer } from './Service.styles';

const Service = () => {
  return (
    <section className='relative top-0 container py-16 bg-lightGreyishBlue'>
      <div className='flex flex-col gap-8'>
        <Title subtitle as='h4'>
          Why choose Easybank ?
        </Title>
        <Paragraph>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control finances like never before.
        </Paragraph>
        <CardContainer>
          {ServiceData.map((el, key) => (
            <ServiceCard {...el} key={key} />
          ))}
        </CardContainer>
      </div>
    </section>
  );
};

export default Service;
