import { useState } from 'react';

import ButtonsWrapper from './noCover';
import Cover from './cover';
import ExtraPostInfo from './extraPostInfo';
import Description from './description';
import PostInteractions from './postInteractions';
import Profile from './profile';

const Post = ({ event }) => {
  const [showExtraPostInfo, setShowPostExtraInfo] = useState(false);

  const hasCover = Boolean(event.cover);
  const hasTicketOrAttendeesLimit = event.ticket_access || event.attendees_allowed > 0;

  return (
    <div className='post border-bottom border-black'>
      <Profile 
        city={event.city}
        suburb={event.suburb}
        title={event.title} 
        user={event.user} 
      />

      {hasCover ? (
        <Cover 
          attendeesAllowed={event.attendees_allowed} 
          coverImage={event.cover} title={event.title} 
          price={event.ticket_price} 
          ticket={event.ticket_access} 
        /> 
      ) : 
        hasTicketOrAttendeesLimit && (
          <ButtonsWrapper 
            attendeesAllowed={event.attendees_allowed} 
            price={event.ticket_price} 
            ticket={event.ticket_access} 
          />
        )
      }

      <PostInteractions 
        attending={event.attendees} 
      />

      <Description 
        description={event.description} 
        hasCover={hasCover}
        setShowPostExtraInfo={setShowPostExtraInfo} 
        showExtraPostInfo={showExtraPostInfo} 
      />

      {showExtraPostInfo && 
        <ExtraPostInfo 
          end={event.end_datetime} 
          location={event.location} 
          start={event.start_datetime} 
          tags={event.keywords} 
        />
      }
    </div>
  )
}

export default Post;