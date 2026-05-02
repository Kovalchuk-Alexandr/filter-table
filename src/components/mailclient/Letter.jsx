export default function Letter({ letter, onToggle }) {
    return (
        // <li className={`list ${isSelected ? "selected" : ""}`}>
        <li className={`list`}>
            <label className="list">
                <input
                    type="checkbox"
                    checked={letter.selected}
                    onChange={(e) => {
                        onToggle({...letter, selected: e.target.checked});
                    }}
                />
                {letter.subject}
            </label>
        </li>
    );
}
