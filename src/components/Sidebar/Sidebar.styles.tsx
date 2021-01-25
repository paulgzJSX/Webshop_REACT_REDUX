import styled from 'styled-components'

export const SideBar = styled.aside`
    padding: 1rem;
    height: 100%;

    h3 {
        text-transform: uppercase;
        color: #CA3165;
        cursor: pointer;
    }
`

export const SubCategories = styled.div`
    padding: .7rem 0 0 1rem;

    span {
        display: block;
        margin-bottom: .5rem;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
            color: #CA3165;
        }
    }
`