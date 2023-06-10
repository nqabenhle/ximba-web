import { BsDot, BsPersonAdd } from 'react-icons/bs';

const PostInteractions = ({ attending }) => {
  return (
    <div className='post-interactions'>
      <button className='btn btn-primary-outline attend-event btn-small'>
        <BsPersonAdd className='icon' />
        <span className='ms-1'>Attending</span>
        <BsDot className='icon' />
        <span>{attending}</span>
      </button>
    </div>
  );
};

export default PostInteractions;
