import { useState } from 'react';
import { Form } from 'react-router-dom';

import logo from '../ximbaLogo.svg';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = Object.fromEntries(formData);
  console.table(email);
  return null;
}

const ResetPassword = () => {
  const [formData, setFormData] = useState({ 'email': '' });

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
              type='email'
              name='email'
              className='form-control input-frame'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor='email'>Email</label>
          </div>

          <div className='mb-3'>
            <input
              className='btn btn-primary w-100'
              type='submit'
              value='Reset Password'
            />
          </div>

          <hr />
        </Form>

        <button className='btn btn-secondary w-50'>Login</button>
      </div>
    </div>
  );
};

export default ResetPassword;