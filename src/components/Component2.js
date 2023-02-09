import { connect } from "react-redux";

export function Component({ data, setData }) {
    return (
        <div>
            <input value={data} onChange={(e) => setData(e.target.value)} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: state.dataValue,
});

const mapDispatchToProps = (dispatch) => ({
    //newValue = e.target.value from Component
    setData: (newValue) =>
        dispatch({
            type: "DATA_VALUE",
            payload: newValue,
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
