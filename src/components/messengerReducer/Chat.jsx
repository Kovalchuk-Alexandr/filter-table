import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
    return (
        <section className="chat">
			<textarea
				rows="6"
                className="input-inset"
                value={message}
                placeholder={"Chat to " + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: "edited_message",
                        message: e.target.value,
                    });
                }}
            />

            <button
                className="button-inset button-inset--full"
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({
                        type: "sent_message",
                    });
                }}
            >
                Send to {contact.email}
            </button>
        </section>
    );
}
