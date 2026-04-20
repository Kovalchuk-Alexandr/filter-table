import { recipes } from "./data/recipes";

function RecipeItem({ recipe }) {
	// const listItems = recipe.ingredients.map(item => console.log("item: ", item));

	return (
        <>
            <hr className="modern-line" />
            <h2 className="title">{recipe.name}</h2>
            <ul className="list">
                {recipe["ingredients"].map((item, index) => (
                    <li key={index} className="list-item">
                        • {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default function RecipeList() {
    return (
        <article className="article">
            <h1 className="title">Рецепты:</h1>
			{recipes.map((recipe) => (
					<RecipeItem key={recipe.id} recipe={recipe}/>
            ))}
        </article>
    );
}
