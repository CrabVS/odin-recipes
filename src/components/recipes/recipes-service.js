const mockData = [
  {
    id: 0,
    name: 'Burger',
    imgSrc: 'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    imgAlt: 'Burger Image',
    description: 'This is a very tasty burger. The perfect burger. A flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll.',
    ingredients: [
      'Patty of Ground Beef',
      'Two Buns',
      'Tomato',
      'Lettuce',
      'Onion',
      'Cheese',
      'Your Favorite Sauce',
    ],
    steps: [
      'Cut the bun into two halves',
      'Heat up the pan with a bit of oil inside.',
      'Cook the patty in the pan.',
      'When the patty is nearly done, add a strip of cheese on top of it to get it to melt a bit',
      'Add the patty onto the bun',
      'Cook the tomato and onion stripes very briefly and add them on top of the patty',
      'Wash and add the lettuce',
      'Add the sauce',
    ],
    votes: 4,
  },
  {
    id: 1,
    name: 'Lasagna',
    imgSrc: 'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    imgAlt: 'Lasagna Image',
    description: 'The epitome of Italian food. It is usually rectangular or ribbon shaped, thicker than tagliatelle, made from a dough based on flour and eggs, with numerous local variants. After being boiled, the rectangular lasagna noodles are drained and placed in layers with a filling that varies based on different local traditions.',
    ingredients: [
      'Parmesan Cheese',
      'Garlic',
      'Olive Oil',
      'Ricotta Cheese',
      'Mozzarella Cheese',
      'Eggs',
      'Onion',
      'Tomatoes',
      'Butter and Flour',
    ],
    steps: [
      'Spread a thin layer of pasta sauce in the bottom of a baking dish.',
      'Make a layer of cooked lasagna noodles.',
      'Spread an even layer of the ricotta cheese mixture.',
      'Spread an even layer of meat sauce.',
      'Repeat those layers two times.',
      'Top it with a final layer of noodles, sauce, mozzarella, and parmesan cheese.',
    ],
    votes: 9,
  },
  {
    id: 2,
    name: 'Sandwich',
    imgSrc: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80',
    imgAlt: 'Sandwich Image',
    description: 'The ultimate snack. Easy to prepare and make. A food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.',
    ingredients: [
      'Two Bread Slices',
      'Any Protein',
      'Your Favorite Fruits and/or Veggies',
      'Cheese (Optional)',
    ],
    steps: [
      'Choose a base for your sandwich. Place one slice of bread on a plate.',
      'Pick a spread. Using a butter knife, apply to one slice of your bread. You also can leave your bread dry and move on to the next step.',
      'Choose one or two protein foods to place on top of your spread or base of your sandwich.',
      'Add your favorite low-fat cheese (optional).',
      'Pile on fruits and veggies! Choose one or more.',
      'Place the remaining slice of bread on top and enjoy!',
    ],
    votes: 2,
  },
];

const fetchRecipes = function fetchRecipes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.slice()), 300);
  });
};

const fetchRecipeData = function fetchRecipeData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = (mockData.find((obj) => obj.id === id));
      resolve(data);
    }, 300);
  });
};

const voteRecipe = function voteRecipe(id) {
  const data = (mockData.find((obj) => obj.id === id));
  data.votes += 1;
};

const addNewRecipe = function addNewRecipe(recipe) {
  mockData.push(recipe);
  console.log(mockData);
};

export {
  fetchRecipeData, fetchRecipes, voteRecipe, addNewRecipe,
};
