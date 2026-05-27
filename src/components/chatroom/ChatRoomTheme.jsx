import { useState } from "react";
import ChatRoom from "./ChatRoom.jsx";

export default function ChatRoomTheme() {
    const [isDark, setIsDark] = useState(false);
    const [roomId, setRoomId] = useState("general");
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

	return (
        <article className="">
            <div className={`article flex-start ${isDark ? "dark" : "light"}`}>
                <button
                    className="button-inset"
                    onClick={() => setIsDark(!isDark)}
                >
                    Toggle theme
                </button>
                <label className="label-item label-item--nerrow">
                    <span className="text">Server URL:</span>
                    <input className="input-inset" type="text"
                        value={serverUrl}
                        onChange={(e) => setServerUrl(e.target.value)}
                    />
                </label>
                <label className="label-item label-item--nerrow">
					<span className="text">Choose the chat room:</span>
					<div className="input-inset select-wrapper">
						<select
							value={roomId}
							onChange={(e) => setRoomId(e.target.value)}
						>
							<option value="general">general</option>
							<option value="travel">travel</option>
							<option value="music">music</option>
						</select>
					</div>
                </label>
                <hr className="modern-line--thin" />
                <ChatRoom roomId={roomId} serverUrl={serverUrl} />
            </div>
        </article>
    );
}
