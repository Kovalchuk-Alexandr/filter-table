export default function Letter({ letter, onToggle, isHighlighted, onHover }) {
    return (
        // <li className={`list ${isSelected ? "selected" : ""}`}>
        <li
            className={`list ${isHighlighted ? "highlighted" : ""}`}
            onFocus={() => {
                onHover(letter.id);
            }}
            onPointerMove={() => {
                onHover(letter.id);
            }}
        >
            <label className="list">
                <input
                    type="checkbox"
                    checked={letter.selected}
                    onChange={(e) => {
                        onToggle({ ...letter, selected: e.target.checked });
                    }}
                />
                {letter.subject}
            </label>
        </li>
    );
}
