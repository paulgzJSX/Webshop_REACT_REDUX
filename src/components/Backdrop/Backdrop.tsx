import { useDispatch, useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
)

export default function SimpleBackdrop() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const displayBackdrop = useSelector((state: any) => state.cart)

    return (
        <Backdrop className={classes.backdrop} open={displayBackdrop} onClick={() => dispatch({ type: 'HIDE_BACKDROP' })}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}