import { BsHouseDoor, BsList, BsPerson, BsPlusSquare } from 'react-icons/bs';

const Navigation = () => {
  return (
    <nav id='nav-for-desktop'>
      <div className='icon-wrapper' title='Home'>
        <BsHouseDoor className='icon' />
      </div>

      <div className='icon-wrapper' title='New Event'>
        <BsPlusSquare className='icon' />
      </div>

      <div className='icon-wrapper' title='Profile'>
        <BsPerson className='icon' />
      </div>

      <div className='icon-wrapper' title='Menu'>
        <BsList className='icon' />
      </div>
    </nav>
  );
};

export default Navigation;
