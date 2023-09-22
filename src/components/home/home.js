import './home.css';
import initiateRecipes from '../recipes/recipes';
import initiateAddRecipe from '../add-recipe/add-recipe';

const addListeners = function addListeners() {
  const buttons = Array.from(document.querySelectorAll('.btn'));
  buttons[0].addEventListener('click', () => {
    initiateRecipes('Trending');
  });

  buttons[1].addEventListener('click', () => {
    initiateAddRecipe();
  });
};

const initiateHome = function initiateHome() {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="home">
    <h1>Welcome to OdinRecipes</h1>
    <div class="content">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum facere hic incidunt ullam quidem accusamus eum sit quod, ipsam perspiciatis! Corporis blanditiis laborum quos eos eius sapiente nobis ut tempora id, expedita consequuntur ad laudantium possimus ipsa quod harum? Error, iusto adipisci eaque nobis placeat perspiciatis accusamus totam voluptate? Non.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dolores consequatur natus pariatur distinctio hic nesciunt nam quas qui officia? Adipisci nemo accusamus cupiditate accusantium animi ducimus perspiciatis quas quam, atque molestias rerum cum exercitationem voluptatem assumenda, voluptate minus earum nam molestiae itaque? Temporibus perspiciatis quos magni beatae recusandae esse quo voluptatem, minima tenetur exercitationem quia provident necessitatibus natus quasi nemo corrupti sed assumenda aliquid totam neque illum quisquam nisi. Blanditiis maxime similique deleniti ut?</p>
        <div class="button-group">
            <a class="btn">View Trending Recipes</a>
            <a class="btn">Add your own Recipe</a>
        </div>
    </div>
  </div>`;
  addListeners();
};

export default initiateHome;
