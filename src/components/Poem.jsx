/* Рендеринг списков с разделителем */
import { Fragment } from "react";

const poem = {
    lines: [
        "Я пишу, стираю, переписываю,",
        "Снова стереть, а затем",
        "Цветет мак.",
    ],
};

export default function Poem() {
    // console.log("length: ", poem.lines.length);
    const lenght = poem.lines.length;

    // Второй вариант, через forEach-перебор массива
    let output = [];

	// Заполнение массива для вывода
	poem.lines.forEach((line, i) => {
		output.push(<p key={i + '-text'}>{line}</p>);
		if (i < lenght -1) {
			output.push(<hr key={i + '-separ'} className="separ-line" />);
		}
	});

	// console.log('output: ', output);

	return (
        <>
            <h3 className="title">Через &lt;Fragment&gt;:</h3>
            <article className="article center">
                {poem.lines.map((line, index) => (
                    <Fragment key={index}>
                        <p>{line}</p>
                        {index < lenght - 1 && <hr className="separ-line" />}
                    </Fragment>
                ))}
            </article>
            <hr className="modern-line" />
            <h3 className="title">Через forEach:</h3>
            <article className="article center">{output}</article>
        </>
    );
}
