import { useEffect, useState } from "react";
import styles from './JokeBlock.module.css';

export default function JokeBlock() {
    const [joke, setJoke] = useState("")

    useEffect(() => {
        const getJoke = async () => {
            let res = await fetch('/api/joke')
        
            if (res.ok) {
                res = await res.json()
                // setJoke(res.joke)
                setJoke(res.value)
            }
        }

        getJoke();
    }, []);

    return (
        <blockquote className={styles.quote}>{joke}</blockquote>
    )
}