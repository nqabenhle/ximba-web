import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Form, useActionData } from 'react-router-dom';
import submit from '../features/form_validation/submitForm';
import { serverBaseURL } from '../urls/urls';

import logo from '../ximbaLogo.svg';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const code = Object.fromEntries(formData);
  Cookies.set('user', 'ericson');
  const user = Cookies.get('user');
  return submit(serverBaseURL + `/confirm/${user}`, code, '/', true);
}

const ConfirmEmail = () => {
  const [formData, setFormData] = useState({ 'code': '' });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  const [formSubmitting, setFormSubmitting] = useState();

  const actionData = useActionData();

  useEffect(() => {
    setFormSubmitting(false);
  }, [actionData]);

  return (
    <div className='height-100 d-flex justify-content-center align-items-center g-padding'>
      <div className='d-flex align-content-center flex-column form'>
        <img className='mb-3' src={logo} alt='Logo' />

        <Form className='w-100' method='post' onSubmit={() => setFormSubmitting(true)}>
          <p className='text-center'>
            The code has been sent to your email. The code will expire in 15
            minutes.
          </p>

          <div className='form-floating mb-3'>
            <input
              type='number'
              name='code'
              className='form-control input-frame'
              placeholder='Enter code here'
              value={formData.code}
              onChange={handleChange}
              required
            />
            <label htmlFor='code'>Enter code here</label>
          </div>

          {actionData && actionData.serverErrorMessage && <div className='error-message mb-3'>{actionData.serverErrorMessage}</div>}

          <div className='mb-3'>
            <input
              type='submit'
              className='btn btn-primary w-100'
              value={formSubmitting ? 'Loading...' : 'Confirm Email'}
              disabled={formSubmitting}
            />
          </div>
        </Form>

        <div className='text-center text-primary'>Resend Code</div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
