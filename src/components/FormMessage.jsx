import { useState, useEffect } from "react";

export default function FormMessage() {
    const [showForm, setShowForm] = useState(true);
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setShowForm(false);
        sendMessage(message);
    }

    if (!showForm) {
        return (
            <article className="article wrapper chat">
                <h1 style={{ color: 'red' }}>Thanks for using our services!</h1>
                <button
                    className="button-inset button-inset--full"
                    onClick={() => {
                        setMessage("");
                        setShowForm(true);
                    }}
                >
                    Open chat
                </button>
            </article>
        );
    }

	return (
        <article className="article wrapper">
            <form onSubmit={handleSubmit} className="chat">
                <textarea
                    className="input-inset"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="button-inset"
                    disabled={message === ""}
                >
                    Send
                </button>
            </form>
        </article>
    );
}

function sendMessage(message) {
    console.log("Sending message: " + message);
}
