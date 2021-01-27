import { css } from 'styled-components'

export const pallete = {
    black: '#000',
    purple: '#CA3165',
    grey: '#9A9EA7',
    white: '#fff',
    blue: 'blue'
}

export const flexCenter = css`
    display: flex;
    align-items: center;
`

export const flexCenterSpaceBetween = css`
    ${flexCenter}
    justify-content: space-between;
`
