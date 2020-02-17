import React from 'react';

// Components
import CharacteristicCard from '../presentational/CharacteristicCard';

export default ({ hostType, hostName }) => {
  return (
    <>
      <CharacteristicCard
        type='home'
        title='Entire Home'
        description='You will have the house to yourself.'
      />
      <CharacteristicCard
        type='clean'
        title='Sparkling clean'
        guestnumber='13'
        description='recent guests said this place was sparkling clean.'
      />
      {hostType == 'superhost' ? (
        <CharacteristicCard
          type='superhost'
          hostName={hostName}
          title='is a Superhost'
          description='Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.'
        />
      ) : null}

      <CharacteristicCard
        type='location'
        title='Great location'
        percentage='90'
        description='of recent guests gave the location a 5-star rating.'
      />
    </>
  );
};
