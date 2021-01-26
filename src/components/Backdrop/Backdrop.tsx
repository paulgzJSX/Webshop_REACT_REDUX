import { useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

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
    const backdrop = useSelector((state: any) => state.backdrop)

    return (
        <Backdrop className={classes.backdrop} open={backdrop.display}>
            {backdrop.child}
        </Backdrop>
    );
}