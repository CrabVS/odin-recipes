import './header.css';
import initiateHome from '../home/home';
import initiateAddRecipe from '../add-recipe/add-recipe';
import initiateRecipes from '../recipes/recipes';

const removeActive = function removeActive(links) {
  links.forEach((link) => {
    link.classList.remove('active');
  });
};

const addListeners = function addLinkListeners(links) {
  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (index === 0) initiateHome();
      else if (index === 4) initiateAddRecipe();
      else initiateRecipes(link.textContent);

      removeActive(links);
      link.classList.add('active');
    });
  });
};

const initiateHeader = function initiateHeader() {
  const links = Array.from(document.querySelectorAll('header nav ul li a'));
  addListeners(links);
};

export default initiateHeader;
