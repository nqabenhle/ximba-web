import { BsGeoAlt } from 'react-icons/bs';

import { serverBaseURL } from '../../urls/urls';

const Profile = ({ city, suburb, title, user }) => {
  // Format the url so it can work, we slice (remove) '/ximba'
  const formattedURLString = user.profile.profile_img.split('/').slice(2).join('/');
  const profileImageURL = `${serverBaseURL}/${formattedURLString}`;

  return (
    <div className='profile'>
      <div className='d-flex mb-2'>
        <div>
          <img className='profile-image' 
            src={profileImageURL} 
            alt={`${user.username}'s profile`} 
          />
        </div>

        <div className='ms-1'>
          <div className='font-body-tiny'>@{user.username}</div>
          <div>{user.first_name} {user.last_name}</div>
        </div>
      </div>

      <div className='font-title'>{title}</div>
      
      <div className='d-flex align-items-center'>
        <BsGeoAlt className='icon' />
        <span className='ms-2'>{city}, {suburb}</span>
      </div>
    </div>
  )
}

export default Profile;