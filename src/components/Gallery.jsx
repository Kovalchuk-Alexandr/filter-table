import { getImageUrl } from "../utils";

function Profile({ name, profession, discovered, imageId, size=70, awards }) {
	// console.log("name: ", name)
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={size}
                height={size}
            />
            <ul className="profileList">
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
					<b>Awards: {awards.length} </b><br/>
					({awards.join(', ')})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );
}

const persons = [
    {
        name: "Maria Skłodowska-Curie",
        profession: "physicist and chemist",
        discovered: "polonium (chemical element)",
        imageId: "szV5sdG",
        awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
        ],
    },
    {
        name: "Katsuko Saruhashi",
        profession: "geochemist",
        discovered: "a method for measuring carbon dioxide in seawater",
        imageId: "YfeOqp2",
        awards: [
            "Miyake Prize for geochemistry",
            "Tanaka Prize",
        ],
    },
];

const Gallery = () => {
	return (
        <>
            <h1>Notable Scientists</h1>
            {/* <Profile
                name="Maria Skłodowska-Curie"
                profession="physicist and chemist"
                discovered="polonium (chemical element)"
                imageId="szV5sdG"
                awards={[
                    "Nobel Prize in Physics",
                    "Nobel Prize in Chemistry",
                    "Davy Medal",
                    "Matteucci Medal",
                ]}
            />
            <Profile
                name="Katsuko Saruhashi"
                profession="geochemist"
                discovered="a method for measuring carbon
                            dioxide in seawater"
                imageId="YfeOqp2"
                awards={[
                    "Miyake Prize for geochemistry",
                    "Tanaka Prize"
                ]}
			/> */}
			{persons.map((person) => {
				return (
                    <Profile
                        key={person.imageId}
                        name={person.name}
                        profession={person.profession}
                        discovered={person.discovered}
                        imageId={person.imageId}
                        awards={person.awards}
                    />
                );
			})}
			{persons.map(person => (
				<Profile key={person.imageId} {...person} />
			))}
            {/* <div className="scientists">
                <h1>Notable Scientists</h1>
                <section className="profile">
                    <h2>Maria Skłodowska-Curie</h2>
                    <img
                        className="avatar"
                        src={getImageUrl("szV5sdG")}
                        alt="Maria Skłodowska-Curie"
                        width={70}
                        height={70}
                    />
                    <ul>
                        <li>
                            <b>Profession: </b>
                            physicist and chemist
                        </li>
                        <li>
                            <b>Awards: 4 </b>
                            (Nobel Prize in Physics, Nobel Prize in Chemistry,
                            Davy Medal, Matteucci Medal)
                        </li>
                        <li>
                            <b>Discovered: </b>
                            polonium (chemical element)
                        </li>
                    </ul>
                </section>
                <section className="profile">
                    <h2>Katsuko Saruhashi</h2>
                    <img
                        className="avatar"
                        src={getImageUrl("YfeOqp2")}
                        alt="Katsuko Saruhashi"
                        width={70}
                        height={70}
                    />
                    <ul>
                        <li>
                            <b>Profession: </b>
                            geochemist
                        </li>
                        <li>
                            <b>Awards: 2 </b>
                            (Miyake Prize for geochemistry, Tanaka Prize)
                        </li>
                        <li>
                            <b>Discovered: </b>a method for measuring carbon
                            dioxide in seawater
                        </li>
                    </ul>
                </section>
            </div> */}
        </>
    );
}

export default Gallery;
