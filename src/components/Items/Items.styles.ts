import styled from 'styled-components'
import { AddToCartBtn } from '../AddToCartButton/AddToCartButton.styles'
import { pallete } from '../../styles/Generic.styles'

export const MainContent = styled.main`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    @media (max-width: 1068px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ItemCard = styled.div`
    position: relative;
    width: 15rem;
    height: 17rem;
    background-color: ${pallete.white};
    text-align: center;
    padding: 1rem;
    cursor: pointer;
    overflow: hidden;

    &:hover ${AddToCartBtn} {
        bottom: 0;
    }

    img {
        height: 10rem;
        width: 10rem;
        margin-bottom: 1.2rem;
    }
`