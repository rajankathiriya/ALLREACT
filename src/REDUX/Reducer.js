

export default (state = 0, { type, payload }) => {
    switch (type) {

        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "MULTY":
            return state * 2

        default:
            return state
    }
}


// export default (state=0,{type,payload})=>{
//     switch (type){
//         case "INC":
//             return state+1;

//             default :
//             return state
//     }
// }

// export const INCREMENT = () => {
//     type: "iNCREMENT"
// }