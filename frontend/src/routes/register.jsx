import { useEffect, useState } from 'react';
import { Form, useActionData } from 'react-router-dom';

import logo from '../ximbaLogo.svg';
import validateForm from '../features/form_validation/registerValidation';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const userInfo = Object.fromEntries(formData);
  return validateForm(userInfo);
} 

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formSubmitting, setFormSubmitting] = useState();

  const actionData = useActionData();

  useEffect(() => {
    setFormSubmitting(false);
  }, [actionData]);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(actionData);
  console.table(actionData);

  return (
    <div className='height-100 d-flex justify-content-center align-items-center g-padding'>
      <div className='form'>
        <img className='mb-3' src={logo} alt='logo' />

        <Form className='w-100' method='post' onSubmit={() => setFormSubmitting(true)}>
          <div className='mb-3'>
            <div className='row'>
              <div className='form-floating col-6'>
                <input
                  type='text'
                  name='firstName'
                  className='form-control input-frame'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <label htmlFor='firstName' style={{ marginLeft: '12px' }}>
                  First Name
                </label>
              </div>

              <div className='form-floating col-6'>
                <input
                  type='text'
                  name='lastName'
                  className='form-control input-frame'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='lastName' style={{ marginLeft: '12px' }}>
                  Last Name
                </label>
              </div>
            </div>
          </div>

          {actionData && actionData.firstName && <div className='error-message mb-3'>{actionData.firstName}</div> }
          {actionData && actionData.lastName && <div className='error-message mb-3'>{actionData.lastName}</div> }

          <div className='form-floating mb-3'>
            <input
              type='text'
              name='username'
              className='form-control input-frame'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor='username'>Username</label>
          </div>

          {actionData && actionData.username && <div className='error-message mb-3'>{actionData.username}</div> }

          <div className='mb-3 form-help'>
            <div>Username must have between 3 and 16 characters</div>
            <div>Username must only contain lowercases and numbers</div>
          </div>

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

          {actionData && actionData.email && <div className='error-message mb-3'>{actionData.email}</div> }

          <div className='form-floating mb-3'>
            <input
              type='password'
              name='password'
              className='form-control input-frame'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor='password'>Password</label>
          </div>

          {actionData && actionData.password && <div className='error-message mb-3'>{actionData.password}</div> }

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
            <label htmlFor='confirm-password'>Confirm Password</label>
          </div>

          {actionData && actionData.confirmPassword && <div className='error-message mb-3'>{actionData.confirmPassword}</div> }

          <div className='mb-3 form-help'> 
            <div className='confirm'>Password must match</div>
          </div>

          {actionData && actionData.serverErrorMessage && <div className='error-message mb-3'>{actionData.serverErrorMessage}</div> }

          <div>
            <input
              type='submit'
              value={formSubmitting ? 'Loading...' : 'Register'}
              className={`btn btn-primary form-control w-100 mb-3 ${!formSubmitting ? 'attractive' : ''}`}
              disabled={formSubmitting}
            />
          </div>

          <hr />

          <div className='d-flex justify-content-center'>
            <button type='button' className='btn btn-secondary w-50'>Login</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
