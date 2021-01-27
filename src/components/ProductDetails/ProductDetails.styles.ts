import styled from 'styled-components'
import { pallete } from '../../styles/Generic.styles'

export const ProductDetailsWrapper = styled.div`
    height: auto;
    width: 35rem;
    padding: 2rem;
    background-color: ${pallete.white};
    text-align: center;
    color: ${pallete.black};

    h3 {
        margin-bottom: 1.5rem;
    }

    img {
        height: 15rem;
        width: 15rem;
        margin-bottom: 1.5rem;
    }

    p {
        margin-bottom: 1.5rem;
    }
`