import React from 'react';

export default ({ swap }) => {
  return (
    <button
      onClick={swap}
      className='hidden md:block hover:bg-gray-100 md:flex md:items-center justify-start fixed bottom-0 md:ml-3 md:mb-3 lg:right-0  lg:mr-3 z-10 bg-white text-sm font-semibold py-2 px-4 rounded-lg shadow-xl'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          style={{ marginBottom: 1 }}
          className='h-4 w-4 mt-1'>
          <g>
            <g>
              <path
                d='M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z
			 M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256
			S378.337,477.867,256,477.867z'
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d='M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067
			s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z'
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d='M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133
			S274.821,124.122,256,124.122z'
              />
            </g>
          </g>
        </svg>
      </div>
      <p className='ml-3'>Terms, privacy, & more</p>
    </button>
  );
};
