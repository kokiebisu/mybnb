import * as React from 'react';

export const DateCheck: React.FC<{}> = () => {
  return (
    <div className='shadow-xl border-t border-gray-300 bg-white w-screen py-2 sticky bottom-0 z-50 absolute flex justify-between px-8 items-center'>
      <div className='flex'>
        <div className='hidden lg:block h-12 w-12 mr-5'>
          <img
            className='h-full w-full rounded-full'
            src='https://a0.muscache.com/im/pictures/user/3b8a7979-d090-4e6f-90c2-527344b7f769.jpg?aki_policy=profile_x_medium'
          />
        </div>
        <div className='lg:flex items-center'>
          <p
            style={{ fontFamily: 'airbnb-bold' }}
            className='hidden lg:block text-sm text-gray-750'>
            Sailing Adventures in Howe Sound Fjord
          </p>
          <div>
            <p
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 lg:hidden'>
              $119/person
            </p>
          </div>
          <div className='flex items-center'>
            <p
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-green-850 text-xs lg:ml-1'>
              4.97
            </p>
            <div className='flex'>
              <div style={{ marginLeft: 1 }} className='h-2 w-2 ml-1'>
                <svg
                  style={{ fill: '#008489' }}
                  className='h-full w-full'
                  viewBox='0 -10 511.99143 511'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657' />
                </svg>
              </div>
              <div style={{ marginLeft: 1 }} className='h-2 w-2 lg:hidden'>
                <svg
                  style={{ fill: '#008489' }}
                  className='h-full w-full'
                  viewBox='0 -10 511.99143 511'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657' />
                </svg>
              </div>
              <div style={{ marginLeft: 1 }} className='h-2 w-2 lg:hidden'>
                <svg
                  style={{ fill: '#008489' }}
                  className='h-full w-full'
                  viewBox='0 -10 511.99143 511'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657' />
                </svg>
              </div>
            </div>
            <div style={{ marginLeft: 2 }}>
              <p className='text-gray-650 text-xs tracking-tight lg:hidden'>
                233 reviews
              </p>
            </div>
          </div>
          <p className='hidden lg:block text-xs text-gray-650'>(233)</p>
        </div>
      </div>
      <div className='flex items-center'>
        <p
          style={{ fontFamily: 'airbnb-bold' }}
          className='text-gray-750 hidden lg:block px-3'>
          $119/person
        </p>
        <button>
          <div className='px-6 bg-red-550 py-3 md:px-16 rounded'>
            <p style={{ fontFamily: 'airbnb-bold' }} className='text-white'>
              See dates
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
