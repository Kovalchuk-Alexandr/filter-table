/**
 * PlanetPlace.jsx
 * This component allows users to select a planet and a place on that planet. It uses the useSelectOptions custom hook to fetch the list of planets and places from the API. The selected planet and place are displayed at the bottom of the component.
 * В этом примере есть два выборочных блока. Один select позволяет пользователю выбрать планету.
 * Ещё один - позволяет пользователю выбрать место на этой планете.
 * Первый select заполняет planetList состояние результатом вызова API "/planets". ID выбранной планеты хранится в переменной состояния planetId.
 * Дополнительный код, чтобы переменная состояния placeList была заполнена результатом вызова API."/planets/" + planetId + "/places"
 * Если вы правильно это реализуете, выбор планеты должен заполнить список мест. Смена планеты должна изменить список мест.
*/

import { useSelectOptions } from "./useSelectOptions.js";

export default function PlanetPlace() {
    const [planetList, planetId, planetName, setPlanetId] = useSelectOptions("/planets");

    const [placeList, placeId, placeName, setPlaceId] = useSelectOptions(
        planetId ? `/planets/${planetId}/places` : null,
    );

    return (
        <article className="article flex-start">
            <label className="label-item label-item--nerrow">
                <span className="text">Pick a planet:</span>
                <div className="input-inset select-wrapper">
                    <select
                        value={planetId}
                        onChange={(e) => {
                            setPlanetId(e.target.value);
                        }}
                    >
                        {planetList?.map((planet) => (
                            <option key={planet.id} value={planet.id}>
                                {planet.name}
                            </option>
                        ))}
                    </select>
                </div>
            </label>
            <label className="label-item label-item--nerrow">
                <span className="text">Pick a place:</span>
                <div className="input-inset select-wrapper">
                    <select
                        value={placeId}
                        onChange={(e) => {
                            setPlaceId(e.target.value);
                        }}
                    >
                        {placeList?.map((place) => (
                            <option key={place.id} value={place.id}>
                                {place.name}
                            </option>
                        ))}
                    </select>
                </div>
            </label>
            <hr className="modern-line--thin" />
            <h2 className="message">
                You are going to: {placeName || "..."} on {planetName || "..."}
            </h2>
        </article>
    );
}
