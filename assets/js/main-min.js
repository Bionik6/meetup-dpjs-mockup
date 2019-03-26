const buttonClickHandler = (event) => {
  const bodyElement = document.getElementById('body');
  bodyElement.className = bodyElement.className === 'light' ? 'dark' : 'light';
  event.preventDefault()
};
const themeSwitcherButton = document.getElementById('theme-switcher');
themeSwitcherButton.addEventListener('click', buttonClickHandler);
