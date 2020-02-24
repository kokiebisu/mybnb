import * as React from 'react';

// Components
import { ExperienceCard } from '../presentational/ExperienceCard';

// Images
// High Resolution
const featured1 = require('../../../public/img/high/featured1.jpg');
const featured2 = require('../../../public/img/high/featured2.jpg');
const featured3 = require('../../../public/img/high/featured3.jpg');

interface Feature {
  img: string;
  experiences: number;
  type: string;
  description: string;
}

export const Experiences: React.FC<{}> = () => {
  const featureds: Feature[] = [
    {
      img: featured1,
      experiences: 940,
      type: 'Cooking',
      description: 'Make and eat meals with locals who treact you like family'
    },
    {
      img: featured2,
      experiences: 940,
      type: 'Cooking',
      description: 'Make and eat meals with locals who treact you like family'
    },
    {
      img: featured3,
      experiences: 940,
      type: 'Cooking',
      description: 'Make and eat meals with locals who treact you like family'
    }
  ];
  return (
    <>
      <div className='overflow-y-hidden'>
        <div className='w-full h-full overflow-y-hidden'>
          <div className='h-full scroller'>
            <div className='scrollable sm:inset-x-0 flex items-start justify-startpy-2 w-featured md:w-full'>
              {featureds.map(
                ({ img, experiences, type, description }, index) => {
                  return (
                    <div className='w-80 lg:w-1/3 pb-5 mr-2'>
                      <ExperienceCard
                        key={index}
                        img={img}
                        experiences={experiences}
                        type={type}
                        description={description}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};