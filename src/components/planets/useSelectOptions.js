import { useState, useEffect } from "react";
import { fetchData } from "./api.js";

export function useSelectOptions(url) {
    const [list, setList] = useState(null);
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        if (url === null) {
            return;
        }

        let ignore = false;
        fetchData(url).then((result) => {
            if (!ignore) {
                setList(result);
                setSelectedId(result[0].id);
            }
        });
        return () => {
            ignore = true;
        };
    }, [url]);

    // имя вычисляется автоматически из текущего id
    const selectedName =
		list?.find((item) => item.id === selectedId)?.name ?? "";

    return [list, selectedId, selectedName, setSelectedId];
}
