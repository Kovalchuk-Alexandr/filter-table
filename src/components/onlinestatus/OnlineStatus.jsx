/**
 * В этом примере мы создаем компонент, который отображает статус подключения к интернету и кнопку для сохранения прогресса.
 * Мы используем кастомный hook useOnlineStatus, который отслеживает состояние сети и возвращает true, если пользователь онлайн, и false, если офлайн.
 * Компонент StatusBar отображает текст "✅ Online", если пользователь онлайн, и "❌ Disconnected", если офлайн.
 * Компонент SaveButton отображает кнопку "Save progress", которая активна только когда пользователь онлайн. Если пользователь офлайн, кнопка отключена и отображает "Reconnecting...".
 * Этот пример демонстрирует, как можно использовать кастомные хуки для управления состоянием приложения и создавать интерактивные компоненты на основе этого состояния.
 */

import { useOnlineStatus } from "./useOnlineStatus.js";

function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
    const isOnline = useOnlineStatus();

    function handleSaveClick() {
        console.log("✅ Progress saved");
    }

    return (
        <button className="button-inset" disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? "Save progress" : "Reconnecting..."}
        </button>
    );
}

export default function OnlineStatus() {
    return (
        <article className="article flex-start">
            <SaveButton />
            <StatusBar />
        </article>
    );
}
