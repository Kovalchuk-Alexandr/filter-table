/**
 * ChatRoomTheme.jsx
 * В этом примере каждый раз, когда вы нажимаете «Переключить тему», чат снова подключается.
 * Это происходит потому, что компонент ChatRoom удаляется из DOM и создается заново.
 * Когда компонент удаляется, React вызывает функцию очистки, возвращаемую useEffect в ChatRoom, которая закрывает соединение WebSocket.
 * Когда компонент создается заново, useEffect вызывается снова, устанавливая новое соединение WebSocket.
 * Это поведение является ожидаемым и демонстрирует, как React управляет жизненным циклом компонентов и
 * их побочными эффектами. Если вы хотите сохранить соединение WebSocket при переключении темы, вам нужно будет переместить
 * логику подключения WebSocket в родительский компонент и передавать данные через контекст или пропсы.
 * Решение:
 * Заменяем объектный props options на более специфичные roomId и serverUrl props, которые передаются
 * в ChatRoom. Это позволяет избежать ненужного пересоздания объекта options при каждом рендере,
 * что может привести к повторному подключению WebSocket.:
 */

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
                    <input
                        className="input-inset"
                        type="text"
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
