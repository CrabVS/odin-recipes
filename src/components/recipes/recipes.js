import initiateRecipe from './recipe/recipe';
import fetchData from './recipes-service';

const buildPage = function buildPage() {
  fetchData(0).then((res) => initiateRecipe(res));
};

const initiateRecipes = function initiateRecipes() {
  buildPage();
};

export default initiateRecipes;
