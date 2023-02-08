import { createStore } from "redux";

import { rootReduser } from "./rootReducer";

export const store = createStore(rootReduser);
