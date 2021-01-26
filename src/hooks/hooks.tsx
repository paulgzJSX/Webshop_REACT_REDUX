import { useEffect, useCallback, Ref } from 'react'
import { useDispatch } from 'react-redux'
import { hideBackdrop } from '../store/backdrop/actions'

export const useClickOutside = (ref: any) => {
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClickOutside = useCallback((e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(hideBackdrop())
        }
    }, [])
}