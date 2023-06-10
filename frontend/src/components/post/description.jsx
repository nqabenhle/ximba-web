import { useEffect, useState } from 'react';

const ALLOWED_DESCRIPTION_LENGTH = 200;

const Description = ({
  description,
  hasCover,
  setShowPostExtraInfo,
  showExtraPostInfo,
}) => {
  // State to track whether the full text should be shown
  const [showFullText, setShowFullText] = useState(false);

  // Toggle the visibility of the extra post info
  const toggleDisplayExtraInfo = () => {
    setShowPostExtraInfo((prevState) => !prevState);
  };

  useEffect(() => {
    // If there is no cover image or the description is short enough, show the full text by default
    if (!hasCover || description.length <= ALLOWED_DESCRIPTION_LENGTH) {
      setShowFullText(true);
    }
  }, [hasCover, description.length]);

  return (
    <div className={`description ${showFullText ? 'show' : ''}`}>
      <p>
        {description}{' '}
        <span className='link' onClick={toggleDisplayExtraInfo}>
          {showExtraPostInfo ? 'Hide More Info' : 'See More Info'}
        </span>
      </p>

      <div className={`text-cover ${showFullText ? 'hide' : ''}`}>
        <button
          className='btn btn-secondary-outline btn-small'
          onClick={() => setShowFullText((prevState) => !prevState)}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Description;
