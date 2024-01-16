import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get('http://localhost:3000/greetings');
  return response.data.message;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: '',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => action.payload);
  },
});

export default greetingSlice.reducer;
