import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function CatFriends() {
    const selectedRef = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <article className="article flex-start">
            <nav>
                <button
                    className="button-inset"
                    onClick={() => {
                        flushSync(() => {
                            if (index < catList.length - 1) {
                                setIndex(index + 1);
                            } else {
                                setIndex(0);
                            }
                        });
                        selectedRef.current.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center",
                        });
                    }}
                >
                    Next
                </button>
            </nav>
            <div className="picture-wrapper">
                <ul className="picture-list">
                    {catList.map((cat, i) => (
                        <li
                            className="picture-item"
                            key={cat.id}
                            ref={index === i ? selectedRef : null}
                        >
                            <img
                                className={`picture-item-img ${index === i ? "active" : ""}`}
                                src={cat.imageUrl}
                                alt={"Cat #" + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

const catCount = 10;
const catList = new Array(catCount);
for (let i = 0; i < catCount; i++) {
    const bucket = Math.floor(Math.random() * catCount) % 2;
    let imageUrl = "";
    switch (bucket) {
        case 0: {
            imageUrl = "https://placecats.com/neo/250/200";
            break;
        }
        case 1: {
            imageUrl = "https://placecats.com/millie/250/200";
            break;
        }
        case 2:
        default: {
            imageUrl = "https://placecats.com/bella/250/200";
            break;
        }
    }
    catList[i] = {
        id: i,
        imageUrl,
    };
}
