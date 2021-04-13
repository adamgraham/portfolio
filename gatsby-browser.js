import '@zigurous/css-styles/dist/index.css';
import '@zigurous/react-components/dist/index.css';
import './src/styles/global.css';

const updateFavicon = (isDark) => {
  const favicon = document.querySelector('link[rel*="icon"]');
  favicon.href = isDark ? '/favicon-dark.png' : '/favicon-light.png';
};

export const onRouteUpdate = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme:dark)');
  updateFavicon(darkMode.matches);
  darkMode.addEventListener('change', (e) => {
    updateFavicon(e.matches);
  });
};
