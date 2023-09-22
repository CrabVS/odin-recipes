import './recipes.css';
import initiateRecipe from './recipe/recipe';
import { fetchRecipes, fetchRecipeData } from './recipes-service';

let currentType;

const getRecipes = async function getRecipes() {
  const recipes = await fetchRecipes();
  let sortedArray;
  if (currentType === 'Popular') {
    sortedArray = recipes.sort(({ votes: a }, { votes: b }) => b - a);
  }
  return sortedArray;
};

const buildPage = async function buildPage() {
  const page = document.querySelector('main');
  page.innerHTML = `
    <section class="content">
      <h1 class="content-title">${currentType} Recipes</h1>
      <div class="recipes"></div>
    </section>`;
  const contentRecipes = document.querySelector('main .content .recipes');

  const recipes = await getRecipes();
  recipes.forEach((recipe) => {
    const newDiv = document.createElement('a');
    newDiv.classList.add('recipe-item');
    contentRecipes.appendChild(newDiv);

    newDiv.addEventListener('click', async () => {
      contentRecipes.innerHTML = ``;
      const recipeData = await fetchRecipeData(recipe.id);
      console.log(recipeData);
      initiateRecipe(recipeData);
    });
  });
};

const initiateRecipes = function initiateRecipes(recipesType) {
  currentType = recipesType;
  const main = document.querySelector('main');
  main.innerHTML = `${currentType} Recipes`;
  buildPage();
};

export default initiateRecipes;
