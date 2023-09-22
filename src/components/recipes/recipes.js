import './recipes.css';
import './loading-spinner.css';
import initiateRecipe from './recipe/recipe';
import { fetchRecipes, fetchRecipeData } from './recipes-service';

let currentType;

const getRecipes = async function getRecipes() {
  const recipes = await fetchRecipes();
  let sortedArray;
  if (currentType === 'Popular') {
    sortedArray = recipes.sort(({ votes: a }, { votes: b }) => b - a);
  } else if (currentType === 'Trending') {
    sortedArray = recipes;
  } else {
    sortedArray = recipes.reverse();
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
    const newRecipeEl = document.createElement('a');
    newRecipeEl.classList.add('recipe-item');
    contentRecipes.appendChild(newRecipeEl);

    newRecipeEl.innerHTML = `
    <div class="info-display"></div>
    <div class="votes-display"></div>`;

    const infoDisplay = newRecipeEl.querySelector('.info-display');
    const votesDisplay = newRecipeEl.querySelector('.votes-display');

    const newImg = document.createElement('img');
    const newTitle = document.createElement('h4');
    const newVotes = document.createElement('div');

    newImg.src = recipe.imgSrc;
    newImg.alt = recipe.imgAlt;
    newTitle.textContent = recipe.name;
    newVotes.textContent = recipe.votes;

    infoDisplay.appendChild(newImg);
    infoDisplay.appendChild(newTitle);
    votesDisplay.appendChild(newVotes);

    newRecipeEl.addEventListener('click', async () => {
      contentRecipes.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div>`;
      contentRecipes.classList.add('loading');
      const recipeData = await fetchRecipeData(recipe.id);
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
