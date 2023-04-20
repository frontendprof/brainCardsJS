import { createHeader } from './components/createHeader.js';

const init = () => {
  const headerElement = document.querySelector('.header');
  const mainSection = document.querySelector('#app');

  createHeader(headerElement);
};

init();
