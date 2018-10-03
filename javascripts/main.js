import {getCharacters} from './data/characterData.js';
import {sortEvents} from './components/characters.js';

const initializeApp = () => {
  sortEvents();
  getCharacters();
};

initializeApp();