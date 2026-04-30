import { useState } from "react";

export default function EditProfile() {
	const [isEditing, setIsEditing] = useState(false);
	const [firstName, setFirstName] = useState('Jane');
	const [lastName, setLastName] = useState("Jacobs");

	function handleSubmit(e) {
		e.preventDefault();
		setIsEditing(!isEditing);
	}

	return (
        <article className="article">
            <form className="person-content" onSubmit={handleSubmit}>
                <label className="label-item">
                    <p className="label-title">First name:</p>
                    {isEditing ? (
                        <input
                            className="input-inset"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    ) : (
                        <b>{firstName}</b>
                    )}
                </label>
                <label className="label-item">
                    <p className="label-title">Last name:</p>
                    {isEditing ? (
                        <input
                            className="input-inset"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    ) : (
                        <b>{lastName}</b>
                    )}
                </label>

                <button
                    type="submit"
                    className="button-inset"
                >
                    {isEditing ? "Save" : "Edit"} Profile
                </button>
                <p>
					<i>Hello, {firstName} {lastName}!</i>
                </p>
            </form>
        </article>
    );
}
