/* eslint-disable max-len */
import { useLayoutEffect, useState } from 'react'
import useEventListener from './useEventListener'

interface WindowSize {
    width: number
    height: number
}

function useWindowSize(maxMobileWidth = 768): { windowSize: WindowSize, isMobile: boolean } {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    })
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const handleSize = () => {
        const currentWidth = window.innerWidth
        setIsMobile(currentWidth <= maxMobileWidth)
        setWindowSize({
            width: currentWidth,
            height: window.innerHeight,
        })
    }

    useEventListener('resize', handleSize)
    useLayoutEffect(() => {
        handleSize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { windowSize, isMobile }
}

export default useWindowSize