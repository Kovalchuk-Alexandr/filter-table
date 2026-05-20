import { useState } from 'react'
import Gallery from "./components/Gallery";
import List from "./components/List";
import RecipeList from "./components/Recipes";
import Poem from "./components/Poem";
import SculptureGallery from "./components/SculptureGallery";
import ShoppingCart from "./components/ShoppingCart";
import TaskApp from "./components/todo";
import Picture from "./components/PictureBg";
import EditProfile from "./components/EditProfile";
import MovingDot from "./components/MovingDot";
import FeedbackForm from "./components/FeedbackForm";
import MailClient from "./components/mailclient/MailClient";
import Accordion from "./components/accordion/Accordion";
import SyncedInputs from "./components/SyncedInputs";
import FilterableList from "./components/FilterableList";
import ContactManager from "./components/contactmanager/ContactManager";
import CounterB from "./components/CounterB";
import Messenger from "./components/messengerReducer/Messenger";
import TaskAppReducer from "./components/taskappreducer/TaskAppReducer";
import LargeImages from "./components/contextimages/LargeImages";
import TaskAppReducerContext from "./components/taskappreducercontext/TaskAppReducerContext";
import VideoPlayer from "./components/VideoPlayer";
import CatFriends from "./components/CatFriends";
import TodoListEffect from "./components/todo/TodoListEffect";
import FormMessage from "./components/FormMessage";
import DotMove from "./components/DotMove";
import Encryption from "./components/encryption/Encryption";
import PlanetPlace from "./components/planets/PlanetPlace";

function ProductCategoryRow({ category }) {
	return (
		<tr>
			<th className='category-title' colSpan='2'>{category}</th>
		</tr>
	);
}

function ProductRow({ product }) {
	const name = product.stocked ? product.name :
		<span style={{ color: 'red' }}>{product.name}</span>

	return (
		<tr>
			<td>{name}</td>
			<td>{product.price}</td>
		</tr>
	);
}

function ProductTable({ products, filterText, inStockOnly }) {
	const rows = [];
	let lastCategory = null;
	// console.log('filterText: ', filterText);

	products.forEach((product) => {
		if (product.category.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
			return;
		}
		if (inStockOnly && !product.stocked) {
			return;
		}

		if (product.category != lastCategory) {
			rows.push(
				<ProductCategoryRow category={product.category} key={product.category} />
			);
		}
		rows.push(
			<ProductRow product={product} key={product.name} />
		);
		lastCategory = product.category;
	});

	return (
		<table className="frame product-table">
			<thead>
				<tr>
					<th>Наименование</th>
					<th>Цена</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
	return (
		<form className="frame">
			<input
				className="input-search"
				type="text"
				value={filterText}
				placeholder="Search..."
				onChange={(e) => onFilterTextChange(e.target.value)}
			/>
			<label>
				<input type="checkbox" checked={inStockOnly} onChange={(e)=>onInStockOnlyChange(e.target.checked)}/> Показывать
				только товар в наличии
			</label>
		</form>
	);
}

function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<div className="frame main-wrapper">
			<SearchBar
				filterTex={filterText}
				inStockOnly={inStockOnly}
				onFilterTextChange={setFilterText}
				onInStockOnlyChange={setInStockOnly}
			/>
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	);
}

function App() {

  return (
      <>
          <FilterableProductTable className="frame" products={PRODUCTS} />
          <hr className="modern-line" />
          <h3>Planet & Places</h3>
          <PlanetPlace />
          <hr className="modern-line" />
          <h3>Encryption</h3>
          <Encryption />
          <hr className="modern-line" />
          <h3>Dot allowed to move on checked</h3>
          <DotMove />
          <hr className="modern-line" />
          <h3>Form Message</h3>
          <FormMessage />
          <hr className="modern-line" />
          <h3>Todo List using Effect</h3>
          <TodoListEffect />
          <hr className="modern-line" />
          <h3>CatFriends</h3>
          <CatFriends />
          <hr className="modern-line" />
          <h3>Video Player</h3>
          <VideoPlayer />
          <hr className="modern-line" />
          <h3>TaskApp Reducer Context</h3>
          <TaskAppReducerContext />
          <hr className="modern-line" />
          <h3>InLarge Images through Context</h3>
          <LargeImages />
          <hr className="modern-line" />
          <h3>TaskApp Reducer</h3>
          <TaskAppReducer />
          <hr className="modern-line" />
          <h3>Messenger Reducer</h3>
          <Messenger />
          <hr className="modern-line" />
          <h3>Render the second counter</h3>
          <CounterB />
          <hr className="modern-line" />
          <h3>Contact Manager</h3>
          <ContactManager />
          <hr className="modern-line" />
          <h3>FilterableList</h3>
          <FilterableList />
          <hr className="modern-line" />
          <h3>SyncedInputs (синхронизация ввода)</h3>
          <SyncedInputs />
          <hr className="modern-line" />
          <h3>Accordion</h3>
          <Accordion />
          <hr className="modern-line" />
          <h3>Mail Client</h3>
          <MailClient />
          <hr className="modern-line" />
          <FeedbackForm />
          <hr className="modern-line" />
          <MovingDot />
          <hr className="modern-line" />
          <EditProfile />
          <hr className="modern-line" />
          <Picture />
          <hr className="modern-line" />
          <TaskApp />
          <hr className="modern-line" />
          <ShoppingCart />
          <hr className="modern-line" />
          <SculptureGallery />
          <hr className="modern-line" />
          <Poem />
          <hr className="modern-line" />
          <RecipeList />
          <hr className="modern-line" />
          <List />
          {/* <Gallery /> */}
      </>
  );
}

const PRODUCTS = [
	{ category: "Фрукты", price: "$1", stocked: true, name: "Яблоко" },
	{ category: "Фрукты", price: "$1", stocked: true, name: "Питахайя" },
	{ category: "Фрукты", price: "$2", stocked: false, name: "Маракуйя" },
	{ category: "Овощи", price: "$2", stocked: true, name: "Шпинат" },
	{ category: "Овощи", price: "$4", stocked: false, name: "Тыква" },
	{ category: "Овощи", price: "$1", stocked: true, name: "Горох" },
];

export default App
