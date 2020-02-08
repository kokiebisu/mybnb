import React from 'react';

export default ({ title, phrase, children }) => {
  function renderPhrase() {
    if (phrase) {
      return (
        <>
          <h3
            style={{ fontFamily: 'airbnb-medium' }}
            className='scrollable text-gray-850 text-2xl pt-3 w-5/6'>
            {title}
          </h3>
          <p
            style={{ fontFamily: 'airbnb-book' }}
            className='scrollable text-md mb-5 text-gray-850 pb-3'>
            {phrase}
          </p>
        </>
      );
    } else {
      return (
        <>
          <h3 className='scrollable text-gray-850 text-2xl font-semibold py-3 w-5/6'>
            {title}
          </h3>
        </>
      );
    }
  }
  return (
    <div className='sm:px-5 md:px-10 xl:px-0 lg:max-w-5.5xl mx-auto py-5 overflow-x-hidden overflow-y-hidden w-full'>
      {renderPhrase()}
      {children}
    </div>
  );
};
