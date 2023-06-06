import { Outlet } from 'react-router-dom';

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
    </div>
  )
}

export default Root;