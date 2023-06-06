import Post from '../components/post';
import logo from '../ximbaLogo.svg';

const Home = () => {
  return (
    <div id='home'>

      <div className='logo-wrapper'>
        <img className='logo' src={logo} alt="Ximba's logo" />
      </div>

      <div className='post-container'>
        <Post />
      </div>

      Hello, this is the home page
    </div>
  )
}

export default Home;