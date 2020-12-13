import art from './art';
import games from './games';
import presentations from './presentations';
import tech from './tech';
import websites from './websites';

export { art, games, presentations, tech, websites };

export function getData(pathname) {
  if (pathname.includes('/art')) {
    return art;
  } else if (pathname.includes('/games')) {
    return games;
  } else if (pathname.includes('/presentations')) {
    return presentations;
  } else if (pathname.includes('/tech')) {
    return tech;
  } else if (pathname.includes('/websites')) {
    return websites;
  } else {
    return [];
  }
}
