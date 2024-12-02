import { createStore } from "redux";
import { ReducerCounter } from "./Reducer";

export const store = createStore(ReducerCounter)