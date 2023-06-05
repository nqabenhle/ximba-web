import { useEffect, useState } from 'react';
import {
  BsArrowRight,
  BsHouseDoor,
  BsPerson,
  BsPlusSquare,
} from 'react-icons/bs';

const Navigation = () => {
  const [navOpened, setNavOpened] = useState(true);

  useEffect(() => {
    const nav = document.querySelector('#nav-for-mobile');
    const icons = nav.querySelectorAll('.icon');

    if (navOpened) {
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.classList.replace('hide', 'show');
        }, 100 * index + 100);
      });
    } else {
      icons.forEach((icon) => icon.classList.replace('show', 'hide'));
    }
  }, [navOpened]);

  return (
    <div id='nav-for-mobile' className={navOpened ? 'open' : 'closed'}>
      <div className='icon-wrapper' title='Home'>
        <BsHouseDoor className={`icon show`} />
      </div>

      <div className='icon-wrapper' title='New Event'>
        <BsPlusSquare className={`icon show`} />
      </div>

      <div className='icon-wrapper' title='Profile'>
        <BsPerson className={`icon show`} />
      </div>

      <div
        className='icon-wrapper'
        onClick={() => setNavOpened((prevState) => !prevState)}
      >
        <BsArrowRight
          className={`icon arrow-right ${navOpened ? 'rotate-back' : 'rotate'}`}
        />
      </div>
    </div>
  );
};

export default Navigation;
