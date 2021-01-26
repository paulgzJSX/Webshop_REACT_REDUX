import { ReactNode } from "react"
import { JsxElement } from "typescript"

import { HIDE_BACKDROP, DISPLAY_BACKDROP, BackdropActionTypes } from './types'

export function hideBackdrop(): BackdropActionTypes {
    return {
        type: HIDE_BACKDROP
    }
}

export function displayBackdrop(child: ReactNode | JsxElement): BackdropActionTypes {
    return {
        type: DISPLAY_BACKDROP,
        display: true,
        child
    }
}