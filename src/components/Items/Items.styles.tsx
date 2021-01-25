import styled from 'styled-components'

export const MainContent = styled.main`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
`

export const AddToCart = styled.div<{ $type: boolean }>`
    position: absolute;
    bottom: -3rem;
    left: 0;
    background-color: ${props => props.$type ? 'blue' : '#CA3165'};
    color: #fff;
    width: 100%;
    height: 3rem;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s ease-in;
`

export const ItemCard = styled.div`
    position: relative;
    width: 15rem;
    height: 17rem;
    background-color: #fff;
    text-align: center;
    padding: 1rem;
    cursor: pointer;
    overflow: hidden;

    &:hover ${AddToCart} {
        bottom: 0;
    }

    img {
        height: 10rem;
        width: 10rem;
        margin-bottom: 1.2rem;
    }
`