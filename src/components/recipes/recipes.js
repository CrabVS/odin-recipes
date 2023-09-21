import initiateRecipe from './recipe/recipe';
import fetchData from './recipes-service';

const buildPage = function buildPage() {
  fetchData(0).then((res) => initiateRecipe(res));
};

const initiateRecipes = function initiateRecipes(recipesType) {
  const main = document.querySelector('main');
  main.innerHTML = `${recipesType} Recipes`;
};

export default initiateRecipes;
