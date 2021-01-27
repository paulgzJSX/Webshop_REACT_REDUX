import { useEffect, useCallback, RefObject } from 'react'
import { useDispatch } from 'react-redux'
import { hideBackdrop } from '../store/backdrop/actions'

export const useClickOutside = (ref: RefObject<HTMLDivElement>) => {
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
            dispatch(hideBackdrop())
        }
    }, [])
}