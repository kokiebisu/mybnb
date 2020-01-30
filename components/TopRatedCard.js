export default () => {
  return (
    <div className='lg:w-30/31'>
      <img className='rounded-lg' src={img} alt='adventure1' />
      <p className='uppercase text-sm my-2 font-bold'>{location}</p>
      <p className='my-1'>{title}</p>
      <p>
        {price}
        <span> · </span>
        {days} days
      </p>
    </div>
  );
};