import React from 'react';

// Component
import THundredPlusCard from '../components/THundredPlusCard';
import ShowAll from '../components/ShowAll';

// Images
import stay1 from '../../public/img/stay-1.jpg';
import stay2 from '../../public/img/stay-2.jpg';
import stay3 from '../../public/img/stay-3.jpg';
import stay4 from '../../public/img/stay-4.jpg';
import stay5 from '../../public/img/stay-5.jpg';
import stay6 from '../../public/img/stay-6.jpg';
import stay7 from '../../public/img/stay-7.jpg';
import stay8 from '../../public/img/stay-8.jpg';

export default () => {
  const places = [
    {
      type: 'normal',
      img: stay1,
      location: 'Sol Madrid',
      title: 'Private Studio in Sol, Madrid',
      price: '91'
    }
  ];

  return (
    <>
      <div className='flex flex-wrap items-start justify-start w-full'>
        {places.map(({ type, img, location, title, price }) => {
          return (
            <div className='lg:w-1/3 xl:w-1/4 pb-5'>
              <THundredPlusCard
                type={type}
                img={img}
                location={location}
                title={title}
                price={price}
              />
            </div>
          );
        })}
      </div>
      <ShowAll title='Show(2000+)' />
    </>
  );
};
