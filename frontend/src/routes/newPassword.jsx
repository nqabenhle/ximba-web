import { useState } from 'react';
import { Form } from 'react-router-dom';

import logo from '../ximbaLogo.svg';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const password = Object.fromEntries(formData);
  console.table(password);
  return null;
}

const NewPassword = () => {
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className='height-100 d-flex justify-content-center align-items-center g-padding'>
      <div className='form'>
        <img className='mb-3' src={logo} alt='Logo' />

        <Form className='w-100' method='post'>
          <div className='form-floating mb-3'>
            <input
              type='password'
              name='password'
              className='form-control input-frame'
              placeholder='New Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor='password' className='floating-input-placeholder'>
              Password
            </label>
          </div>

          <div className='mb-3 form-help'>
            <div>Password must have characters between 8 and 16</div>
            <div>Password must have at least one uppercase letter</div>
            <div>Password must have at least one lower letter</div>
            <div>Password must have at least one number</div>
            <div>Password must have at least one symbol</div>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='password'
              name='confirmPassword'
              className='form-control input-frame'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label
              htmlFor='confirm-password'
              className='floating-input-placeholder'
            >
              Confirm Password
            </label>
          </div>

          <div className='mb-3 form-help'>
            <div>Password must match</div>
          </div>

          <div className='mb-3'>
            <input
              className='btn btn-primary w-100'
              type='submit'
              value='Continue'
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewPassword;
