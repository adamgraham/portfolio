import '@zigurous/css-styles/dist/index.css';
import './src/styles/global.css';

const updateFavicon = (isDark) => {
  const favicon = document.querySelector('link[rel*="icon"]');
  if (favicon) {
    favicon.href = isDark ? '/favicon-dark.png' : '/favicon-light.png';
  }
};

export const onRouteUpdate = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme:dark)');
  updateFavicon(darkMode.matches);
  darkMode.addEventListener('change', (e) => {
    updateFavicon(e.matches);
  });
};

export const onInitialClientRender = () => {
  const storage = localStorage.getItem('theme');
  const theme = storage && JSON.parse(storage);
  if (theme) {
    const app = document.querySelector('.app');
    app.setAttribute('data-theme', theme);
  }
};
