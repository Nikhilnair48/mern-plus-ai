// create custom hooks that permit action dispatch and selection of data in store

// 1. import the redux based hooks
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// 2. create a custom hook based on the redux hooks we access
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();