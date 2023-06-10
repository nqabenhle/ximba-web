import illustration from '../illustrations/fatal-error.gif';

const ErrorPage = () => {
  return (
    <div className='error-container'>
      <img src={illustration} alt='Illustration by Icons8' />

      <div>
        <p className='font-headline'>We are sorry, we couldn't fetch your events. Please check your internet connection and try reloading the page. If the error persist, don't hesitate to let us know.</p>
        <button className='btn btn-secondary btn-small'>Report the problem!</button>
      </div>
    </div>
  )
}

export default ErrorPage;