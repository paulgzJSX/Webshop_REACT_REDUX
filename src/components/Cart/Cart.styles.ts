import styled from 'styled-components'
import { flexCenterSpaceBetween, flexCenter, pallete } from '../../styles/Generic.styles'

export const CartWrapper = styled.div`
    height: 30rem;
    width: 50rem;
    background-color: ${pallete.white};
    padding: 1rem 1.5rem;

    h2 {
        color: ${pallete.black};
        text-align: center;
        margin-bottom: 1.5rem;
    }
`

export const ProductWrapper = styled.div`
    height: 20rem;
    margin-bottom: 1.2rem;
    overflow-y: auto;
`

export const Product = styled.div`
    ${flexCenterSpaceBetween}
    color: ${pallete.black};
    margin-bottom: .5rem;
`

export const Description = styled.div`
    ${flexCenter}

    img {
        height: 2rem;
        width: 2rem;
        margin-right: .7rem;
    }
`

export const PriceQuntity = styled.div`
    ${flexCenter}

    button {
        margin-left: .5rem;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
    }

    .quantity {
        margin-left: .5rem;
    }

    .remove {
        color: red;
        font-weight: bold;
        margin-left: .8rem;
        cursor: pointer;
    }
`

export const TotalWrapper = styled.div`
    ${flexCenter}
    justify-content: flex-end;
    color: ${pallete.black};

    h3 {
       margin-right: .5rem; 
    }
`