import { useState } from 'react';
import { Form } from 'react-router-dom';
import logo from '../ximbaLogo.svg';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);
  console.table(user);
  return null;
}

const Login = () => {
  const [formData, setFormData] = useState({
    'username': '',
    'password': '',
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className='height-100 d-flex justify-content-center align-items-center g-padding'>
      <div className='form'>
        <img className='mb-3' src={logo} alt='Logo' />

        <Form className='w-100' method='post'>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control input-frame'
              placeholder='Username or Email'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor='username'>Username or Email</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='password'
              className='form-control input-frame'
              placeholder='Password'
              name='password'
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor='password'>Password</label>
          </div>

          <div className='mb-3'>
            <input
              type='submit'
              value='Login'
              className='btn btn-primary w-100 attractive'
            />
          </div>

          <hr />

          <div className='d-flex justify-content-center mb-3'>
            <button type='button' className='btn btn-secondary w-50'>
              Register
            </button>
          </div>
        </Form>

        <div className='text-center text-primary'>Forgot Password?</div>
      </div>
    </div>
  );
};

export default Login;