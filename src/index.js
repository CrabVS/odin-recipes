import initiateRecipes from './components/recipes/recipes';
import fetchData from './components/recipes/recipes-service';

fetchData(2).then((res) => initiateRecipes(res));
