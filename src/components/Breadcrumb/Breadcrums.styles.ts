import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const BreadCrumb = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fff;
    margin-bottom: .7rem;
`

export const Links = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;

    span {
        margin-right: .5rem;
        opacity: .5;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
            color: #CA3165;
        }   
    }
`

export const ArrowIcon = styled(MdKeyboardArrowRight)`
    margin-right: .3rem;
    opacity: .5;
`