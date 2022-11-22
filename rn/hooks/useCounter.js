import React, {useState, useEffect} from 'react';

const useCounter = (initial) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    setCount(count + 1);
  }

  const substract = () => {
    setCount(count - 1);
  }

  return {count, add, substract};
}

export default useCounter;