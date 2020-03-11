import * as React from 'react';

// Functions
import { SimplePaymentsCard } from '../functions/SimplePaymentsCard';

// Images
const quote = require('../../../../public/img/high/host-payments-quote.jpg');

export const SimplePayments: React.FC<{}> = () => {
  return (
    <>
      <div className='w-full px-6 px-0 md:max-w-xl lg:max-w-5xl mx-auto pt-8 pb-16'>
        <div className='my-8'>
          <div className='mb-4 md:mb-0 flex md:justify-center'>
            <div
              style={{ width: 70, height: 2 }}
              className='bg-gray-650 rounded-lg'></div>
          </div>

          <div className='flex md:justify-center mb-12 mt-2'>
            <h3
              style={{ fontFamily: 'airbnb-bold' }}
              className='text-gray-750 text-4xl lg:text-6xl tracking-tight leading-9'>
              Payments made simple
            </h3>
          </div>
          <div className='lg:flex'>
            <SimplePaymentsCard
              title='Charge what you want'
              description='You always get to pick your price. Need help? We have tools to help you match demand in your area.'
              last={false}
            />
            <SimplePaymentsCard
              title='Pay low fees'
              description='There’s no cost to sign up. Airbnb generally charges hosts a flat 3% per reservation, among the lowest fees in the industry.'
              last={false}
            />
            <SimplePaymentsCard
              title='Get paid quickly'
              description='Once a guest checks in, we can send your money by Paypal, direct deposit, or other available methods.'
              links='Learn how to make money on Airbnb'
              last={true}
            />
          </div>
        </div>
      </div>
      <div className='w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img className='h-full w-full' src={quote} />
        </div>
        <div className='w-full md:w-1/2 relative flex items-center md:justify-end'>
          <div className='md:w-85p'>
            <div id='quote__payment'>
              <p
                style={{
                  fontFamily: 'circular-std-medium'
                }}
                className='text-6xl md:text-7xl lg:text-10xl text-yellow-850'>
                “
              </p>
            </div>
            <div className=''>
              <div className='mt-12'>
                <div className='md:w-85p'>
                  <p
                    id='quote-description'
                    style={{
                      fontFamily:
                        'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
                    }}
                    className='text-lg lg:text-3xl text-gray-750 leading-tight'>
                    Hosting has helped me pay for the rent and other upgrades.
                  </p>
                </div>
              </div>
              <div className=''>
                <p
                  style={{ fontFamily: 'airbnb-book' }}
                  className='text-sm md:text-base text-gray-650 my-4'>
                  Jack hosts in Brisbane to earn extra money
                </p>
              </div>
              <button>
                <div className='py-3 px-5 border-2 border-gray-850 rounded'>
                  <p
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-gray-850'>
                    Learn how they host
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};