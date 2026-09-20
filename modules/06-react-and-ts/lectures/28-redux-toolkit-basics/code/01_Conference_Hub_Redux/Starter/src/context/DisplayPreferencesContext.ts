import { createContext } from "react";
import type { DisplayMode } from "../types/displayPreferences";

export type DisplayPreferencesContextValue = {
  displayMode: DisplayMode;
  changeDisplayMode: (nextMode: DisplayMode) => void;
};

export const DisplayPreferencesContext =
  createContext<DisplayPreferencesContextValue | null>(null);
