import * as React from 'react';

// Components
import { HeartExperienceCard } from '../presentational/HeartExperienceCard';

export const ToDoNear: React.FC<{}> = () => {
  return (
    <div className='overflow-y-hidden'>
      <div className='w-full h-full overflow-y-hidden'>
        <div className='h-full scroller'>
          <div className='scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured w-full md:w-full'>
            <div className='w-full lg:w-1/3 pb-5 mr-2'>
              <HeartExperienceCard />
            </div>
            <div className='w-full lg:w-1/3 pb-5 mr-2'>
              <HeartExperienceCard />
            </div>
            <div className='w-full lg:w-1/3 pb-5 mr-2'>
              <HeartExperienceCard />
            </div>
            <div className='w-full lg:w-1/3 pb-5 mr-2'>
              <HeartExperienceCard />
            </div>
            <div className='w-full lg:w-1/3 pb-5 mr-2'>
              <HeartExperienceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
