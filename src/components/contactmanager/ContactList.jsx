export default function ContactList({ contacts, selectedId, onSelect }) {

    return (
        <section>
            <ul className="button-set">
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            className={`button-inset ${contact.id === selectedId ? "button-inset--active" : null}`}
							onClick={() => {onSelect(contact.id);}}
                        >
                            {contact.id === selectedId ? (
                                <b>{contact.name}</b>
                            ) : (
                                contact.name
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
