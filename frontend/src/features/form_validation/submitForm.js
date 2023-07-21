import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';

import { setUser } from '../loggedInUser/loggedInUserSlice';

console.log('cookie', Cookie.get('csrftoken'));

const submit = async (url, formData, nextRoute, saveUser=false) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookie.get('csrftoken'),
    },
    body: JSON.stringify(formData),
  }

  try {
    const response = await fetch(url, requestOptions);

    const data = await response.json();
    
    if (response.status === 200) {
      return redirect(nextRoute);
    }

    return { serverErrorMessage: data.error };

  } catch (error) {
    console.error(error);
    return { serverErrorMessage: "We couldn't complete your request. Please check your internet connection and try again" };
  }
}

export default submit;