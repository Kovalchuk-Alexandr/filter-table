import { useState } from "react";

function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <section className="panel">
            <h3 className="panel-title">{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button
                    className="button-inset"
                    onClick={() => setIsActive(true)}
                >
                    Show
                </button>
            )}
        </section>
    );
}

export default function AccordionSepar() {
	return (
        <section className="article--50">
			<h4 style={{ textAlign: "center" }}>Separeted</h4>
            <article className="article ">
                <h2>Almaty, Kazakhstan</h2>
                <Panel title="About">
                    With a population of about 2 million, Almaty is Kazakhstan's
                    largest city. From 1929 to 1997, it was its capital city.
                </Panel>
                <Panel title="Etymology">
                    The name comes from <span lang="kk-KZ">алма</span>, the
                    Kazakh word for "apple" and is often translated as "full of
                    apples". In fact, the region surrounding Almaty is thought
                    to be the ancestral home of the apple, and the wild{" "}
                    <i lang="la">Malus sieversii</i> is considered a likely
                    candidate for the ancestor of the modern domestic apple.
                </Panel>
            </article>
        </section>
    );
}
