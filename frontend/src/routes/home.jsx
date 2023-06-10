import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../features/events/api';
import Post from '../components/post/post';
import logo from '../ximbaLogo.svg';

const Home = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.event.events);
  const loading = useSelector((state) => state.event.loading);
  const error = useSelector((state) => state.event.error);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const loadingSkeleton = (
    <div className='post events-loading-container'>
      <div className='user-info d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <div className='skeleton profile-img'></div>
          <div className='skeleton name ms-2'></div>
        </div>
        <div>
          <div className='skeleton button'></div>
        </div>
      </div>

      <div className='skeleton buttons mt-3'></div>
      <div className='skeleton text-line mt-3'></div>
      <div className='skeleton text-line mt-2'></div>
      <div className='skeleton text-line mt-2 shorter'></div>

      <div className='d-flex justify-content-between mt-3'>
        <div className='skeleton item'></div>
        <div className='skeleton item'></div>
        <div className='skeleton item'></div>
      </div>
    </div>
  )

  if (error) {
    throw Error("We couldn't fetch events");
  }

  const posts = events.map((event, _index) => (
    <Post key={_index} event={event} />
  ));

  return (
    <div id='home'>

      <div className='logo-wrapper'>
        <img className='logo' src={logo} alt="Ximba's logo" />
      </div>

      <div className='home-main-content'>
        <div className='post-container'>
          {loading ? loadingSkeleton : posts}
        </div>
      </div>

    </div>
  )
}

export default Home;