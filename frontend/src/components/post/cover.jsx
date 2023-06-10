import { serverBaseURL } from '../../urls/urls';

const Cover = ({ attendeesAllowed, coverImage, price, ticket, title }) => {
  // Format the url so it can work, we slice (remove) '/ximba'
  const formattedURLString = coverImage.split('/').slice(2).join('/');
  const coverImageURL = `${serverBaseURL}/${formattedURLString}`;

  const ticketCost = price > 0 ? `R ${price.toFixed(2)}` : 'Free';

  return (
    <div className='cover'>
      <img src={coverImageURL} alt={`${title}'s cover`} />

      {attendeesAllowed > 0 && (
        <button className='btn btn-small btn-primary button-1'>
          Limit: {attendeesAllowed}
        </button>
      )}

      {ticket && (
        <button className='btn btn-small btn-secondary button-2'>
          Get Ticket ({ticketCost})
        </button>
      )}
    </div>
  );
};

export default Cover;
