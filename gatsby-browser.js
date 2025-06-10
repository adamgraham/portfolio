import './src/styles/global.css';

export const onInitialClientRender = () => {
  const storage = localStorage.getItem('theme');
  const theme = storage && JSON.parse(storage);
  if (theme) {
    const app = document.querySelector('body');
    app.setAttribute('data-theme', theme);
  }
};
