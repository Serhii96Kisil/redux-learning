import { connect } from "react-redux";

export function Component({ data, setData, reset, todoListLength, addTodoItem }) {
    return (
        <div>
            <input value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={reset}>Reset</button>

            <div>
                Length: {todoListLength}
                <br />
                <button onClick={addTodoItem}>Add todo item</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: state.dataValue,
    todoListLength: state.todoList.length,
});

const mapDispatchToProps = (dispatch) => ({
    //newValue = e.target.value from Component
    //объект который передается в dispatch называется action
    setData: (newValue) =>
        dispatch({
            type: "DATA_VALUE",
            payload: newValue,
        }),
    reset: () =>
        dispatch({
            type: "DATA_VALUE",
            payload: "",
        }),
    addTodoItem: () =>
        dispatch({
            type: "ADD_TODO_ITEM",
            payload: {},
        }),
});

// function mapDispatchToProps(dispatch) {
//     return {
//         setData: function (newValue) {
//             dispatch({
//                 type: "DATA_VALUE",
//                 payload: newValue,
//             });
//         },
//     };
// }

export const Component2 = connect(mapStateToProps, mapDispatchToProps)(Component);
