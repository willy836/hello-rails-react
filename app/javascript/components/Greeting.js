import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "./redux/greetings/greetingSlice";

const Greeting = () => {
  const { loading, greeting } = useSelector((state) => state.greetings);

  const dispatch = useDispatch();
  const shouldFetchGreeting = useRef(true);
  useEffect(() => {
    if (shouldFetchGreeting.current) {
      shouldFetchGreeting.current = false;
      dispatch(fetchGreeting());
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return <p>{greeting}</p>;
  }
};

export default Greeting;
