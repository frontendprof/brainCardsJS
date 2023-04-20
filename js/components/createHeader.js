import { createElement } from '../helper/createElement.js';

export const createHeader = (parent) => {
  const container = createElement('div', {
    className: 'container',
  });

  parent.append(container);

  const logo = createElement('img', {
    src: 'img/logo.svg',
    className: 'header__logo',
    alt: 'Logo of the project',
  });
  container.append(logo);
};
