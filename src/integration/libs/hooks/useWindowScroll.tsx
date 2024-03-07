/* eslint-disable max-len */
import { useEffect, useState } from "react"
import { fromEvent } from "rxjs"
import { debounceTime } from "rxjs/operators"

export default function useWindowScroll({ debounce = 50 } = {}) {
    const [scrollPosition, setScrollPosition] = useState({ top: 0, left: 0, bottom: 0 })
    useEffect(() => {
        const scrollPosition$ = fromEvent(window, "scroll").pipe(debounceTime(debounce))
        const scrollPosition$Sub = scrollPosition$.subscribe(pos => {
            const top = window.pageYOffset || document.documentElement.scrollTop
            const left = window.pageXOffset || document.documentElement.scrollLeft
            const bottom = top + window.innerHeight
            setScrollPosition({
                top,
                left,
                bottom,
            })
        })
        return () => {
            scrollPosition$Sub.unsubscribe()
        }
    }, [debounce, scrollPosition])
    return { scrollPosition }
}
