import { createAsyncThunk } from '@reduxjs/toolkit';

import { serverBaseURL } from '../../urls/urls';

export const fetchEvents = createAsyncThunk('event/fetchEvents', async () => {
  try {
    const response = await fetch(`${serverBaseURL}/events`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error fetching events');
  }
});
