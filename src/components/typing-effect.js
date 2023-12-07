import { useState, useEffect } from "react"

const useTypingEffect = (textToType,interKeyStrokeDurationInMs) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(()=> {
            setCurrentPosition((value) => value + 1)
        }, interKeyStrokeDurationInMs)
        return () => {
            clearInterval(intervalId);
        }
    }, [interKeyStrokeDurationInMs]);


    return textToType.substring(0,currentPosition);
}

export default useTypingEffect;

