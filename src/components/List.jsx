/* Разделение списка на две части (filter) */
import { people } from "../data/data";
import { getImageUrl } from "../utils";

function PeopleList({ title, persons }) {
	const listItems = persons.map(person =>
		<li key={person.id}>
			<img
				src={getImageUrl(person.imageId)}
				alt={person.name}
			/>
			<div className="person-content">
				<b>{person.name}:</b>
				<span><i>Профессия:</i> {person.profession}</span>
				<span><i>Достижение:</i> {person.accomplishment}</span>
			</div>
		</li>);
	return (
        <>
			<h1 className="title">{title}</h1>
            <ul>{listItems}</ul>
        </>
    );
}

const List = () => {
	const chemists = people.filter(person => person.profession === 'химик');
	const others = people.filter((person) => person.profession !== "химик");

	// console.log('chemists: ', chemists);
	// console.log("others: ", others);

	const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person.imageId)}
        alt={person.name}
      />
      <div className="person-content">
			<b>{person.name}:</b>
			<span><i>Профессия:</i> {person.profession}</span>
			<span><i>Достижение:</i> {person.accomplishment}</span>
      </div>
    </li>
  );
	return (
		<article className="article">
			<PeopleList title="Химики" persons={chemists}/>
			<PeopleList title="Остальные" persons={others}/>
			<hr className="modern-line"/>
            <h1 className="title">Химики</h1>
            <ul>{listItems}</ul>
            {/* <h1 className="title">Остальные ученые</h1>
            <ul>{others}</ul> */}
        </article>
    );
}

export default List;
