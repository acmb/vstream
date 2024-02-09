import { useEffect, useState } from 'react'
import d from '@hooks/useData'

const useRandomImages = () => {
    const [data, setData] = useState([ ...d.wip ].sort((_, __) => Math.random() - Math.random()))

    let i = 0
    const getNext = () => {
        let nxt;
        if (data) {
            nxt = data[i]
            i++
        }
        return nxt
    }

    const getImage = () => {
        let nxt = getNext()
        if (!nxt) {
            return
        }
        return nxt.src
    }

    return [getImage]
}

export default useRandomImages
