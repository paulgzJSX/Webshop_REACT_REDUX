import { useDispatch, useSelector } from 'react-redux'
import { displayBackdrop } from '../../store/backdrop/actions'
import { Cart } from '../../components'
import { HeaderWrapper, Logo, NavBar, RightMenu } from './Header.styles'
import { CartIcon } from '../../icons/Icons.styles'
import { RootState } from '../..'

const navLinks = ['New', 'Gift Guide', 'Promo', 'Trends', 'Social']

const Header = () => {
    const dispatch = useDispatch()
    const itemsInCart = useSelector((state: RootState) => state.cart.items.length)

    return (
        <HeaderWrapper>
            <Logo>
                <h2>SHOP</h2>
            </Logo>

            <NavBar>
                <ul>
                    {navLinks.map(link =>
                        <li key={link}><a href="#">{link}</a></li>)}
                </ul>

                <RightMenu>
                    <a href="#">Log in</a>
                    <button>Sign Up</button>
                    <div onClick={() => dispatch(displayBackdrop(<Cart />))}>
                        <CartIcon />
                        <span>{itemsInCart}</span>
                    </div>
                </RightMenu>
            </NavBar>
        </HeaderWrapper>
    )
}

export default Header
