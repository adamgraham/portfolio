import { useEffect } from 'react';
import { github } from '../links';

export default function Software() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.open(github, '_blank');
    window.history.back();
  }, []);
  return null;
}
