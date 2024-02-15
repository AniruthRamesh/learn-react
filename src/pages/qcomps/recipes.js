export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export function ingredients(ingredientItems, id){
  const ingredient = Array.from(ingredientItems).map(item => {
    <li key={id} >
      {item}
    </li>
  })
  return ingredient;
};

export function List(){
  const listitem = recipes.map(recipe => {
    <div key = {recipe.id}>
      <h1>{recipe.name}</h1>
      <ul>
        {
          ingredients(recipe.ingredients, recipe.id+"-item")
        }
      </ul>
    </div>
  });
  return listitem;
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {
        recipes.map(recipe => {
          
          return <div key = {recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {
                Array.from(recipe.ingredients).map((item,index) => 
                  <li key={recipe.id+"-item"+index} >
                    {item}
                  </li>
                )
              }
            </ul>
          </div>

        })
      }
    </div>
  );
}