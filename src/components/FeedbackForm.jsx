import { useState } from "react";

export default function FeedbackForm() {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("typing");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        await sendMessage(text);
        setStatus("sent");
    }

    const isSending = status === "sending";
    const isSent = status === "sent";

    if (isSent) {
        return <h1>Thanks for feedback!</h1>;
    }

	return (
		<article className="article">
			<form className="flex-start" onSubmit={handleSubmit}>
				<p>How was your stay at The Prancing Pony?</p>
				<textarea
					className="input-inset"
					disabled={isSending}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button className="button-inset" disabled={isSending} type="submit">
					Send
				</button>
				{isSending && <p>Sending...</p>}
			</form>
		</article>
    );
}

// Pretend to send a message.
function sendMessage(text) {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}
