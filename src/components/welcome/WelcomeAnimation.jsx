/**
 * WelcomeAnimation.jsx
 * В этом примере мы создаем компонент Welcome, который отображает приветственное сообщение с анимацией появления.
 * Мы используем useEffect для управления жизненным циклом анимации, и useRef для доступа к DOM-элементу, на котором выполняется анимация.
 * Когда компонент монтируется, мы запускаем анимацию, и когда он размонтируется, мы останавливаем ее.
 * В родительском компоненте WelcomeAnimation мы предоставляем пользователю возможность настроить длительность анимации и показать или скрыть приветственное сообщение.
 * Этот пример демонстрирует, как использовать хуки для управления побочными эффектами и доступом к DOM в React.
 * когда вы перемещаете ползунок с переменной состояния, анимация запускается заново, так как useEffect зависит от duration.
 * Однако движение самого ползунка само по себе не должно повторно запускать анимацию
 * Решение:
 * В данном примере мы используем useEffect для управления жизненным циклом анимации.
 * Когда компонент Welcome монтируется, мы создаем экземпляр FadeInAnimation и запускаем его.
 * Когда компонент размонтируется, мы останавливаем анимацию. Это позволяет нам эффективно управлять
 * ресурсами и предотвращать утечки памяти. В родительском компоненте WelcomeAnimation мы используем состояние для управления длительностью анимации и видимостью приветственного сообщения, что позволяет пользователю интерактивно настраивать анимацию.
 * Ваш эффект должен читать последнее значение , но вы не хотите, чтобы он «реагировал» на изменения
 * в duration. Вы начинаете анимацию, но она не реактивна. Извлеките нереактивную строку кода в событие эффекта и вызовите эту функцию из вашего эффекта.
 */

import { useState, useEffect, useRef } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { FadeInAnimation } from "./animation.js";

function Welcome({ duration }) {
    const ref = useRef(null);

    // const onAnimation = useEffectEvent((animation) => {
    // 	console.log("Animation");
    // 	animation.start(duration);
    // });

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(duration);
        // onAnimation(animation);
        return () => {
            animation.stop();
        };
    }, [duration]);

    return (
        <h1
            className="message"
            ref={ref}
            style={{
                width: "90%",
                opacity: 0,
                color: "white",
                padding: 50,
                textAlign: "center",
                fontSize: 50,
                backgroundImage:
                    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            }}
        >
            Welcome
        </h1>
    );
}

export default function WelcomeAnimation() {
    const [duration, setDuration] = useState(1000);
    const [show, setShow] = useState(false);

    return (
        <article className="article flex-start">
            <label className="person-content">
                <input
                    type="range"
                    min="100"
                    max="3000"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                />
                <span>Fade in duration: {duration} ms</span>
            </label>
            <button className="button-inset" onClick={() => setShow(!show)}>
                {show ? "Remove" : "Show"}
            </button>
            <hr className="modern-line--thin" />
            {show && <Welcome duration={duration} />}
        </article>
    );
}
