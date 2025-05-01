import { useState, useEffect } from 'react';
    
export default function NumberTicker({max_count, tick_time, increment}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < max_count) { // Add a condition to control updates
      const timer = setTimeout(() => {
        setCount(prevCount => prevCount + increment); // Increment count after a delay
      }, tick_time);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [count, max_count, tick_time, increment]); // Dependency array includes 'count'

  return <span className='ticking-numbers'>{count}</span>;
}