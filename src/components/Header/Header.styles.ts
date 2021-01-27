import styled from 'styled-components'
import { flexCenterSpaceBetween, flexCenter, pallete } from '../../styles/Generic.styles'

export const HeaderWrapper = styled.header`
    width: 85%;
    margin: 0 auto;
    padding: 1.5rem 0 .8rem;
`

export const Logo = styled.nav`
    color: ${pallete.grey};
    font-size: 1.3rem;
    margin-bottom: .3rem;
    cursor: pointer;
`

export const NavBar = styled.div`
    ${flexCenterSpaceBetween}

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
                    color: ${pallete.purple}
                }
            }
        }
    }
`

export const RightMenu = styled.div`
    ${flexCenter}
    position: relative;

    a {
        font-size: .8rem;
        cursor: pointer;
    }

    button {
        background-color: ${pallete.purple};
        color: ${pallete.white};
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
        color: ${pallete.purple};
        font-size: .7rem;
        font-weight: bold;
        background-color: ${pallete.white};
        border-radius: 50%;
    }
`