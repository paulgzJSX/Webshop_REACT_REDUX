import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const HeaderWrapper = styled.header`
    width: 85%;
    margin: 0 auto;
    padding: 1.5rem 0 .8rem;
`

export const Logo = styled.nav`
    color: #9A9EA7;
    font-size: 1.3rem;
    margin-bottom: .3rem;
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
        display: flex;
        text-transform: uppercase;

        li {
            margin-right: 3rem;
            font-size: .9rem;

            a {
                font-weight: bold;
                letter-spacing: -.3px;
                transition: .2s ease-in;
                opacity: .8;

                &:hover {
                    color: #EC5290;
                }
            }
        }
    }
`

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    a {
        font-size: .8rem;
        cursor: pointer;
    }

    button {
        background-color: #CA3165;
        color: #fff;
        outline: none;
        border: none;
        padding: .3rem .5rem;
        border-radius: 20px;
        margin-left: 1rem;
        cursor: pointer;
    }

    div {
        cursor: pointer;
    }

    span {
        position: absolute;
        right: -.5rem;
        top: -.4rem;
        padding: .1rem;
        color: #CA3165;
        font-size: .7rem;
        font-weight: bold;
        background-color: #fff;
        border-radius: 50%;
    }
`

export const CartIcon = styled(AiOutlineShoppingCart)`
    font-size: 1.5rem;
    font-weight: 200;
    opacity: .5;
    margin-left: 1rem;
`