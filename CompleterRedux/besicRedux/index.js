const redux = require('redux');
const createStore = redux.createStore;
console.log('hhghghh', createStore);

const initialState = {
    numberOfBooks: 10,
    numberOfPen: 15
}

function buyBook() {
    return { type: 'Buy_Book', payload: 'first action' }
}
function buyPen() {
    return { type: 'Buy_Pen', payload: '2nd action' }
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Buy_Book': return {
            ...state,
            numberOfBooks: state.numberOfBooks - 1
        }
        case 'Buy_Pen': return {
            ...state,
            numberOfPen: state.numberOfPen - 2
        }
        default: return state;
    }
}

const store = redux.createStore(Reducer);
console.log('initial state', store.getState());
const unseb = store.subscribe(() => { console.log('Updated State Value', store.getState()); })
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unseb()