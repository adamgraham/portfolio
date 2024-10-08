import { useEffect } from 'react';
import { github } from '../links';

const Software = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.open(github, '_blank');
      window.history.back();
    }
  }, []);
  return null;
};

export default Software;
