import { useState, useEffect } from 'react'

const useShine = () => {
    const [shine, setShine] = useState(false)
    const [finished, setFinished] = useState(true)
    
    useEffect(() => {
        if (finished) {
            setTimeout(() => {
                setFinished(false)
                setShine(true)
            }, 1000)
            setTimeout(() => {
                setFinished(true)
                setShine(false)
            }, 3000)
        }
    }, [finished]);

    return (() => ([shine, setShine]))();
}

export default useShine
