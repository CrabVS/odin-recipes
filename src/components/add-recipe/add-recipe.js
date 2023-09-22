import './add-recipe.css';

import { addNewRecipe } from '../recipes/recipes-service';
import initiateRecipe from '../recipes/recipe/recipe';

const addSubmitListeners = function addSubmitListeners() {
  const addBtn = document.querySelector('.button-group .add-btn');
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const url = document.getElementById('img-src');
    const description = document.getElementById('description');
    const ingredients = Array.from(document.querySelectorAll('.ingredients-display li'));
    const steps = Array.from(document.querySelectorAll('.steps-display li'));

    if (name.value === '' || url.value === '' || description.value === '' || ingredients.length === 0 || steps.length === 0) return;

    const alt = `${name.value} Image`;

    const newIngredients = [];
    ingredients.forEach((ing) => {
      newIngredients.push(ing.textContent);
    });

    const newSteps = [];
    steps.forEach((step) => {
      newSteps.push(step.textContent);
    });

    const votes = 0;

    const data = {
      name: name.value,
      imgSrc: url.value,
      imgAlt: alt,
      description: description.value,
      ingredients: newIngredients,
      steps: newSteps,
      votes,
    };

    addNewRecipe(data);
    console.log(data);
    initiateRecipe(data);
  });
};

const addStepsListeners = function addStepsListeners() {
  const addBtn = document.querySelector('.step-add');
  const stepsEl = document.getElementById('steps');
  const stepsList = document.querySelector('.steps-display');
  const clearBtn = document.querySelector('.steps-clear');

  addBtn.addEventListener('click', () => {
    const newListEl = document.createElement('li');
    newListEl.textContent = stepsEl.value;
    stepsList.appendChild(newListEl);
    stepsEl.value = '';
  });

  clearBtn.addEventListener('click', () => {
    stepsList.innerHTML = ``;
  });
};

const addIngredientListeners = function addIngredientListeners() {
  const addBtn = document.querySelector('.ingredient-add');
  const ingredientsEl = document.getElementById('ingredients');
  const ingredientsList = document.querySelector('.ingredients-display');
  const clearBtn = document.querySelector('.ingredients-clear');

  addBtn.addEventListener('click', () => {
    const newListEl = document.createElement('li');
    newListEl.textContent = ingredientsEl.value;
    ingredientsList.appendChild(newListEl);
    ingredientsEl.value = '';
  });

  clearBtn.addEventListener('click', () => {
    ingredientsList.innerHTML = ``;
  });
};

const addListeners = function addListeners() {
  addIngredientListeners();
  addStepsListeners();
  addSubmitListeners();
};

const buildPage = function buildPage() {
  const main = document.querySelector('main');
  main.innerHTML = `
  <h1 class="add-recipe-title">Add New Recipe</h1>
  <form>
      <fieldset>
          <legend>Recipe Data</legend>
          <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
              <label for="img-src">Image Source</label>
              <input type="text" id="img-src" name="img-src" required>
          </div>
          <div class="form-group">
              <label for="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="10" required></textarea>
          </div>
      </fieldset>
      <fieldset>
          <legend>Ingredients</legend>
          <ul class="ingredients-display"></ul>
          <div class="form-group">
              <label for="ingredients">Ingredient</label>
              <div>
                  <input type="text" id="ingredients" name="ingredients">
                  <button class="btn ingredient-add" type="button">Add</button>
              </div>
          </div>
      </fieldset>
      <fieldset>
          <legend>Steps</legend>
          <ul class="steps-display"></ul>
          <div class="form-group">
              <label for="steps">Step</label>
              <div>
                  <input type="text" id="steps" name="steps">
                  <button class="btn step-add" type="button">Add</button>
              </div>
          </div>
      </fieldset>
      <div class="button-group">
          <button class="btn add-btn" type="submit">Add Recipe</button>
          <button class="btn ingredients-clear" type="button">Clear Ingredients</button>
          <button class="btn steps-clear" type="button">Clear Steps</button>
      </div>
  </form>`;
};

const initiateAddRecipe = function initiateAddRecipe() {
  buildPage();
  addListeners();
};

export default initiateAddRecipe;
