import './header.css';
import initiateHome from '../home/home';
import initiateAddRecipe from '../add-recipe/add-recipe';
import initiateRecipes from '../recipes/recipes';

const addListeners = function addLinkListeners(links) {
  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (index === 0) initiateHome();
      if (index === 4) initiateAddRecipe();
      else initiateRecipes(link.textContent);
    });
  });
};

const initiateHeader = function initiateHeader() {
  const links = Array.from(document.querySelectorAll('header nav ul li a'));
  addListeners(links);
};

export default initiateHeader;
