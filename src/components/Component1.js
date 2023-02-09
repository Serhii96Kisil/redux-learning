import { connect } from "react-redux";

function Component({ data }) {
    return (
        <div>
            data:{data}
            <br />
            Random value: {Math.random()}
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: state.dataValue,
});
// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         data: state.dataValue,
//     };
// };

export const Component1 = connect(mapStateToProps)(Component);
