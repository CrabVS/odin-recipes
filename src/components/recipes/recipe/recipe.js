const addSteps = function addSteps(steps) {
  const stepsEl = document.querySelector('.content .recipe-ingredients');

  steps.forEach((step) => {
    const newListEl = document.createElement('li');
    newListEl.textContent = step;
    stepsEl.appendChild(newListEl);
  });
};

const addIngredients = function addIngredients(ingredients) {
  const ingredientsEl = document.querySelector('.content .recipe-steps');

  ingredients.forEach((ingredient) => {
    const newListEl = document.createElement('li');
    newListEl.textContent = ingredient;
    ingredientsEl.appendChild(newListEl);
  });
};

const buildPage = function buildPage(recipe) {
  const page = document.querySelector('main .content');

  page.innerHTML = `
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
    </ol>`;

  addIngredients(recipe.ingredients);
  addSteps(recipe.steps);
};

const initiateRecipe = function initiateRecipe(recipe) {
  buildPage(recipe);
};

export default initiateRecipe;
