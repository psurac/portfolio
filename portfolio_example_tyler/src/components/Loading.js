import React, { useState, useEffect } from 'react';

const Loading = ({ isLoading }) => {
    const [loadingDotts, setLoadingDotts] = useState('');
    const duration = 500 // Durration of dots apare in Milliseconds

    useEffect(() => {
        if (!isLoading) return;
        let intervalId;

        const dotsAdd = () => {
            setLoadingDotts((prevDots) => {
                if (prevDots.length > 5) return '';
                return prevDots + '.';
            })
        }
        intervalId = setInterval(dotsAdd, duration)

        return () => {
            clearInterval(intervalId);
            setLoadingDotts('');
        }
    }, [isLoading]);

    return (
        <>
            {isLoading ? `Loading${loadingDotts}` : 'Submit'}
        </>
    )
}

export default Loading;