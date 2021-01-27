import styled, { css } from 'styled-components'
import { flexCenter, pallete } from '../../styles/Generic.styles'

export const AddToCartBtn = styled.div<{ $isInCart: boolean, type: string }>`
    background-color: ${props => props.$isInCart ? `${pallete.blue}` : `${pallete.purple}`};
    color: ${pallete.white};
    height: 3rem;
    transition: .3s ease-in;
    ${props => props.type === 'popover' && css`
        position: absolute;
        bottom: -3rem;
        left: 0;
        width: 100%;
        z-index: 1;
        ${flexCenter}
        justify-content: center;
    `}
    ${props => props.type === 'button' && css`
        padding: .5rem 3rem;
        border-radius: 10px;
        outline: none;
        border: none;
        cursor: pointer;
    `}
`