import './recipe.css';
import { voteRecipe } from '../recipes-service';

const addSteps = function addSteps(steps) {
  const stepsEl = document.querySelector('.content .recipe-steps');

  steps.forEach((step) => {
    const newListEl = document.createElement('li');
    newListEl.textContent = step;
    stepsEl.appendChild(newListEl);
  });
};

const addIngredients = function addIngredients(ingredients) {
  const ingredientsEl = document.querySelector('.content .recipe-ingredients');

  ingredients.forEach((ingredient) => {
    const newListEl = document.createElement('li');
    newListEl.textContent = ingredient;
    ingredientsEl.appendChild(newListEl);
  });
};

const buildPage = function buildPage(recipe) {
  const main = document.querySelector('main');
  main.innerHTML = `<div class="content"></div>`;
  const page = document.querySelector('main .content');

  page.innerHTML = `
    <div class="recipe">
      <h1>${recipe.name}</h1>
      <img src="${recipe.imgSrc}" alt="${recipe.imgAlt}" width="300px">
      <!-- Credit: ${recipe.imgSrc} -->
    
      <h2>Description</h2>
      <p>${recipe.description}</p>
    
      <h2>Ingredients</h2>
      <ul class="recipe-ingredients">
      </ul>
    
      <h2>Steps</h2>
      <ol class="recipe-steps">
      </ol>
      <button class="btn">Vote Recipe</button>
    </div>`;

  addIngredients(recipe.ingredients);
  addSteps(recipe.steps);

  const voteBtn = page.querySelector('.recipe .btn');
  voteBtn.addEventListener('click', () => {
    voteRecipe(recipe.id);
    voteBtn.disabled = true;
  });
};

const initiateRecipe = function initiateRecipe(recipe) {
  buildPage(recipe);
};

export default initiateRecipe;
