export const createHeader = (parent) => {
  const container = document.createElement('div');
  container.className = 'container';
  parent.append(container);

  const image = new Image();
  image.src = 'img/logo.svg';
  image.className = 'header__logo';
  image.alt = 'Logo of the project';
  container.append(image);
};
