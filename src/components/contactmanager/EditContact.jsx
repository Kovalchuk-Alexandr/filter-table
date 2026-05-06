import { useState } from "react";

export default function EditContact({ initialData, onSave }) {
    const [name, setName] = useState(initialData.name);
	const [email, setEmail] = useState(initialData.email);

    return (
        <section className="person-content">
            <label>
                Name:{" "}
                <input
                    className="input-inset"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // onChange={handleChange}
                />
            </label>
            <label>
                Email:{" "}
                <input
                    className="input-inset"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <div className="button-set">
                <button
                    className="button-inset button-inset--middle"
                    onClick={() => {
                        const updatedData = {
                            id: initialData.id,
                            name: name,
                            email: email,
                        };
                        onSave(updatedData);
                    }}
                >
                    Save
                </button>
                <button
                    className="button-inset button-inset--middle"
                    onClick={() => {
                        setName(initialData.name);
                        setEmail(initialData.email);
                    }}
                >
                    Reset
                </button>
            </div>
        </section>
    );
}
