import { useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideBackdrop } from '../../actionCreators/ActionCreators'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Cart from '../Cart/Cart';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
)

export default function SimpleBackdrop() {
    const cartRef = useRef<any>()
    const classes = useStyles()
    const dispatch = useDispatch()
    const displayBackdrop = useSelector((state: any) => state.cart)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClickOutside = useCallback((e: any) => {
        if (cartRef.current && !cartRef.current.contains(e.target)) {
            dispatch(hideBackdrop())
        }
    }, [])

    return (
        <Backdrop className={classes.backdrop} open={displayBackdrop}>
            <Cart ref={cartRef} />
        </Backdrop>
    );
}