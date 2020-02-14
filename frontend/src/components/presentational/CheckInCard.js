import React from 'react';

export default () => {
  return (
    <div className='w-30/31 p-6 border border-gray-300'>
      <div className=' border border-gray-850'>
        <h3
          style={{ fontFamily: 'airbnb-medium' }}
          className='text-gray-750 text-lg'>
          Add dates for prices
        </h3>
        <div className='flex items-center justify-start border-b border-gray-300'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              style={{ fill: '#008489' }}
              className='h-2 w-2'
              viewBox='0 0 37.286 37.287'>
              <g>
                <path
                  d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
		c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
		c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
		c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
		c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
		C37.425,15.013,37.226,15.808,36.683,16.339z'
                />
              </g>
            </svg>
          </div>
          <p
            style={{ fontFamily: 'airbnb-medium' }}
            className='ml-1 text-xs text-gray-850'>
            4.75
          </p>
          <p className='ml-1 text-xs text-gray-650'>264 reviews</p>
        </div>
        <div className='my-2 leading-tight'>
          <p
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-xs text-gray-750'>
            Dates
          </p>
          <div className='flex items-center justify-start w-full'>
            <input
              className='w-1/2'
              type='text'
              placeholder='Check-in'
              name='checkin'
            />
            <input
              className='w-1/2'
              type='text'
              placeholder='Check-in'
              name='checkout'
            />
          </div>
        </div>
        <div className='my-1'>
          <p
            style={{ fontFamily: 'airbnb-medium' }}
            className='text-xs text-gray-750'>
            Guests
          </p>
          <input type='text' placeholder='1 guest' />
        </div>

        <button className='rounded flex items-center justify-center w-full py-2 bg-red-500'>
          <div>Add Dates</div>
        </button>
      </div>
    </div>
  );
};
