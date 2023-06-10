import { Outlet } from 'react-router-dom';

import Modal from '../features/modal/modal';
import NavigationForDeskTop from '../features/navigation/navigationForDesktop';
import NavigationForMobile from '../features/navigation/navigationForMobile';

const Root = () => {
  return (
    <div className='app'>
      <div className='desktop-nav-wrapper'>
        <NavigationForDeskTop />
      </div>
      <main>
        <Outlet />
        <NavigationForMobile />
      </main>

      <Modal />
    </div>
  )
}

export default Root;