/**
 * Encryption.jsx
 * This component allows users to select a chat room and enable encryption for that room.
 * The selected room and encryption status are displayed at the bottom of the component.
 * The ChatRoom component is rendered with the selected roomId and isEncrypted props.
 * В этом примере есть select для выбора комнаты чата и чекбокс для включения шифрования.
 * Выбранная комната и статус шифрования отображаются в нижней части компонента.
 * Компонент ChatRoom рендерится с выбранными props roomId и isEncrypted.
 * В этом примере чат-сервис в chat.js открывает два разных API: createEncryptedConnection и createUnencryptedConnection. Корневой компонент App
 * позволяет пользователю выбирать, использовать ли шифрование, а затем передаёт соответствующий API дочернему компоненту ChatRoom в качестве пропа createConnection.
 * ChatRoom вызывает createConnection, чтобы создать соединение с правильным API, и вызывает connect при монтировании и disconnect при размонтировании.
 * Результа подключения/отключения отображается в консоли.
 */

import { useState, useEffect, use } from "react";
import ChatRoom from "./ChatRoom.jsx";

export default function Encryption() {
    const [roomId, setRoomId] = useState("general");
	const [isEncrypted, setIsEncrypted] = useState(false);

	useEffect(() => {
		// console.log(`Room changed to ${roomId}, encryption reset to false`);
		// console.log(`Current encryption state: ${isEncrypted}`);
    }, [roomId,isEncrypted]);

    return (
        <article className="article flex-start">
            <label className="label-item label-item--nerrow">
                <span className="text">Choose the chat room:</span>
                <div className="input-inset select-wrapper">
                    <select
                        // className="input-inset input-inset--select"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    >
                        <option value="general">general</option>
                        <option value="travel">travel</option>
                        <option value="music">music</option>
                    </select>
                </div>
            </label>
            <label className="label-item label-item--nerrow">
                <input
                    type="checkbox"
                    checked={isEncrypted}
                    onChange={(e) => setIsEncrypted(e.target.checked)}
                />
                Enable encryption
            </label>
            <hr className="modern-line--thin" />
            {isEncrypted && (
                <p className="message">
                    🔐 Encryption is enabled for this room.
                </p>
            )}
            <ChatRoom
                roomId={roomId}
                isEncrypted={isEncrypted}
            />
        </article>
    );
}
