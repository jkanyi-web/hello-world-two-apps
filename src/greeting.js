import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './features/greeting/greetingSlice';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <h1>{greeting}</h1>;
}

export default Greeting;
