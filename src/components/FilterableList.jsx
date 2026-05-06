import { useState } from "react";
import { foods, filterItems } from "../data/foods-data";

export default function FilterableList() {
	const [query, setQuery] = useState("");

    function handleChange(e) {
        setQuery(e ? e.target.value : "");
	}
	const filteredFoods = filterItems(foods, query);
	// console.log("filtered: ", filteredFoods);

    return (
        <article className="article person-content">
            <SearchBar query={query} onChange={handleChange} />
            <hr />
            <List items={filteredFoods} />
        </article>
    );
}

function SearchBar({query, onChange}) {
    // const [query, setQuery] = useState("");

    // function handleChange(e) {
    //     setQuery(e.target.value);
    // }

    return (
        <label>
            Search:{" "}
            <input className="input-inset" value={query} onChange={onChange} />
            <button
                className="button-inset button-inset--small"
                onClick={() => onChange("")}
            >
                Clear
            </button>
        </label>
    );
}

function List({ items }) {
	let classItemsName = items.length > 0 ? "frame" : "";

	return (
        <table className={classItemsName}>
            <tbody>
                {items.map((food) => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
