import { useEffect, useState } from "react";
export function useSum(card) {
    const [total, setTotal] = useState();

    useEffect(() => {
        let totalSum = 0;
        if (Array.isArray(card) && card.length) {
            card.map((item) => totalSum = (Math.round((totalSum + item.price) * 100) / 100));
        }
        setTotal(totalSum);
    }, [card]);

    return total;
}