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
    const childRef = useRef<any>()
    const classes = useStyles()
    const dispatch = useDispatch()
    const backdrop = useSelector((state: any) => state.backdrop)

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside)
    //     return () => document.removeEventListener('mousedown', handleClickOutside)
    // }, [])

    // const handleClickOutside = useCallback((e: any) => {
    //     if (childRef.current && !childRef.current.contains(e.target)) {
    //         dispatch(hideBackdrop())
    //     }
    // }, [])

    return (
        <Backdrop className={classes.backdrop} open={backdrop.display}>
            {backdrop.child}
            {/* <Cart ref={childRef} /> */}
        </Backdrop>
    );
}