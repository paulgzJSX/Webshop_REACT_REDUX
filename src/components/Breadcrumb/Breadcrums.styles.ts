import styled from 'styled-components'
import { flexCenter, pallete } from '../../styles/Generic.styles'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const BreadCrumb = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${pallete.white};
    margin-bottom: .7rem;
`

export const Links = styled.div` 
    ${flexCenter}
    width: 85%;
    margin: 0 auto;
    height: 100%;

    span {
        margin-right: .5rem;
        opacity: .5;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
            color: ${pallete.purple};
        }   
    }
`

export const ArrowIcon = styled(MdKeyboardArrowRight)`
    margin-right: .3rem;
    opacity: .5;
`