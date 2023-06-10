import { useRef } from 'react';
import { BsClock, BsGeoAlt } from 'react-icons/bs';

import { formatDate, formatDuration } from './utils'; 
import useModal from '../../features/modal/utils'; 
import { showMap } from '../../features/mapboxAPI/getLocation';

const ExtraPostInfo = ({ end, location, start, tags }) => {
  // Using the custom hook to access modal functionality
  const { addToMainModalHistory } = useModal(); 
  const mapContainerRef = useRef();
  const [lat, long] = location.split(',');

  const content = (
    <div className='view-location'>
      <div ref={mapContainerRef} id='map'></div>

      <div className='link'>
        <a href={`https://www.google.com/maps?q=${lat},${long}`} target='_blank' rel='noreferrer'>
          Open On Google Maps
        </a>
      </div>
    </div>
  );

  const handleViewLocationClick = () => {
    addToMainModalHistory('See exact location', content, []);

    const container = mapContainerRef.current;
    const interval = setInterval(() => {
      if (!container) {
        // Displaying the map using the extracted latitude and longitude
        showMap(long, lat);
        clearInterval(interval);
      }
    }, 100); // Check every 100 milliseconds for the container availability
  };

  // Splitting the tags string into an array of individual tags
  const tagList = tags.split(','); 
  // Creating a list of tags as separate div elements
  const keywords = tagList.map((tag, _index) => <div key={_index}>{tag}</div>); 

  return (
    <div className='post-extra-info'>
      <div className='d-flex align-items-center'>
        <BsGeoAlt className='icon' />
        <span className='ms-1 link' onClick={handleViewLocationClick}>
          See exact location
        </span>
      </div>

      <div className='d-flex align-items-center'>
        <BsClock className='icon' />
        <span className='ms-1'>
          {formatDate(start)} ({formatDuration(start, end)}) 
        </span>
      </div>
      <div className='tag-container'>{keywords}</div>
    </div>
  );
};

export default ExtraPostInfo;
