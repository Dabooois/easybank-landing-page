import { Paragraph, Title } from '../../assets/styled/styled';
import ServiceCard from './Service.card';
import { ServiceData } from '../../constants/data.json';
import { CardContainer } from '../../assets/styled/Service.styles';

const Service = () => {
  return (
    // lg:top-[-30rem] lg:z-[20]
    <section className='relative w-full top-0  2xl:mt-[-32rem] xl:mt-[-32rem] lg:mt-[-32rem]  mb-[16rem] py-32 md:py-36  bg-lightGreyishBlue '>
      <div className='container flex flex-col gap-8 '>
        <Title subtitle as='h4'>
          Why choose Easybank ?
        </Title>
        <Paragraph className='md:max-w-[60rem] md:mx-auto lg:ml-0'>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control finances like never before.
        </Paragraph>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-16 md:mt-16'>
          {ServiceData.map((el, key) => (
            <ServiceCard {...el} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
