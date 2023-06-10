const ButtonsWrapper = ({ attendeesAllowed, price, ticket }) => {
  const ticketCost = price > 0 ? `R ${price.toFixed(2)}` : 'Free';

  return (
    <div className='post-buttons buttons-wrapper'>
      {attendeesAllowed > 0 && (
        <button className='btn btn-primary btn-small'>
          Limit: {attendeesAllowed}
        </button>
      )}

      {ticket && (
        <button className='btn btn-secondary btn-small'>
          Get Ticket ({ticketCost})
        </button>
      )}
    </div>
  );
};

export default ButtonsWrapper;
