import { createHeader } from './components/createHeader.js';

const init = () => {
  const headerElement = document.querySelector('.header');
  const mainSection = document.querySelector('#app');

  const headerObj = createHeader(headerElement);

  const returnIndex = (e) => {
    e.preventDefault();
    headerObj.updateHeaderTitle('Categories');
  };

  headerObj.headerLogoLink.addEventListener('click', returnIndex);
  headerObj.headerBtn.addEventListener('click', () => {
    headerObj.updateHeaderTitle('New category');
  });
};

init();
