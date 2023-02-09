const initialState = {
    dataValue: "test value",
    todoList: [],
    addressBook: [],
};

export function rootReducer(state = initialState, action) {
    console.log("from rootReducer - state", state);
    console.log("from rootReducer - action", action);

    switch (action.type) {
        case "DATA_VALUE":
            return {
                ...state,
                dataValue: action.payload,
            };

        default:
            return state;
    }
}
