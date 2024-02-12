import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

const NotFound = () => {
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 0) {
      navigate("/");
    }
  }, [counter, navigate]);

  return (
    <div>
      <h1>Sorry, page not found. You will be redirected in {counter} seconds</h1>
    </div>
  );
};

export default NotFound;
