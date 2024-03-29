import { useEffect } from 'react';

const Software = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.open('https://github.com/adamgraham', '_blank');
      window.history.back();
    }
  }, []);
  return null;
};

export default Software;
