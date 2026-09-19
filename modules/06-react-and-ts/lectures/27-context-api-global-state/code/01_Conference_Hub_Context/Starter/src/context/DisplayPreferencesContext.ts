// 1. import createContext from react
import { createContext } from "react"
// 1A. DisplayMode from ...
import type { DisplayMode } from "../types/displayPreferences";



// 2. context value: displayMode, changeDisplayMode
export type DisplayPreferencesContextValue = {
    displayMode: DisplayMode,
    changeDisplayMode: (nextMode: DisplayMode) => void
}

// 3. create the context with an initial value
// createContext()
export const DisplayPreferencesContext = createContext<DisplayPreferencesContextValue | null>(null);

// 4. Making the context available to the rest of the app