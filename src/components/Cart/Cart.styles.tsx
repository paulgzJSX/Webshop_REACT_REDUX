import styled from 'styled-components'

export const CartWrapper = styled.div`
    height: 30rem;
    width: 50rem;
    background-color: #fff;
    padding: 1rem 1.5rem;

    h2 {
        color: #000;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    margin-bottom: .5rem;
`

export const Description = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 2rem;
        width: 2rem;
        margin-right: .7rem;
    }
`

export const PriceQuntity = styled.div`
    display: flex;
    align-items: center;

    button {
        margin-left: .5rem;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
    }

    span {
        margin-left: .5rem;
    }
`



export const TotalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #000;

    h3 {
       margin-right: .5rem; 
    }
`