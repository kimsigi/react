import React, { useEffect, useState } from "react";

export default function Timer(): React.JSX.Element {
    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("Timer 컴포넌트 언마운트됨");
            clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
        };
    }, []);


    return (
        <h3>⏱ {seconds}초 지남</h3>
    );
}