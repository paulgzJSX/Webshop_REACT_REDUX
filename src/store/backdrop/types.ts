import { ReactNode } from "react"
import { JsxElement } from "typescript"

export const DISPLAY_BACKDROP = 'DISPLAY_BACKDROP'
export const HIDE_BACKDROP = 'HIDE_BACKDROP'

export interface BackdropState {
    display: boolean,
    child: ReactNode | JsxElement | null
}

interface displayBackdropAction {
    type: typeof DISPLAY_BACKDROP
    display: boolean,
    child: ReactNode | JsxElement | null
}

interface hideBackdropAction {
    type: typeof HIDE_BACKDROP
}

export type BackdropActionTypes = displayBackdropAction | hideBackdropAction
