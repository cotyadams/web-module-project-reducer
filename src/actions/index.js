export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const changeOperation = (newOp) => {
    return({type: CHANGE_OPERATION, payload: newOp})
}
export const clearMem = () => {
    return({type: 'CLEAR_MEMORY' })
}
export const addMem = (memoryValue) => {
    return ({type: 'ADD_MEMORY', payload: memoryValue})
}
export const clearTotal = () => {
    return ({type: 'CLEAR_TOTAL'})
}

export const setMem = (newValue) => {
    return ({type: 'SET_MEMORY', payload: newValue})
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}