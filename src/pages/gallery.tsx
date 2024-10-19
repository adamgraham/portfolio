import { navigate } from 'gatsby';
import { useEffect } from 'react';

export default function Gallery() {
  useEffect(() => {
    navigate('/games', { replace: true });
  }, []);
  return null;
}
