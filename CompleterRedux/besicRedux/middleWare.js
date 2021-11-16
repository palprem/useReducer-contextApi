const { createStore, combineReducers, applyMiddleware } = require('redux');

const initialStateBooks = {
    numberOfBooks: 10,
}

const initialStatePens = {
    numberOfPens: 20
}

const bookBook = () => {
    return {
        type: 'Buy_Book',
        payload: 'My First Action'
    }
}

const bookPen = () => {
    return {
        type: 'Buy_Pen',
        payload: 'My 2nd Action'
    }
}

const bookReducers = (state = initialStateBooks, action) => {
    switch (action.type) {
        case 'Buy_Book': return {
            ...state,
            numberOfBooks: state.numberOfBooks - 1
        }
        default: return state
    }
}

const penReducers = (state = initialStatePens, action) => {
    switch (action.type) {
        case 'Buy_Pen': return {
            ...state,
            numberOfPens: state.numberOfPens - 3
        }
        default: return state
    }
}
const logger=store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log('middle ware log', result);
            return result;
        }
    }    
}
const reducer = combineReducers({
    book:bookReducers,
    pen:penReducers
})
const store = createStore(reducer, applyMiddleware(logger));
console.log('inatial State:', store.getState());
const res = store.subscribe(() => { console.log('updated :', store.getState()); })
store.dispatch(bookBook())
store.dispatch(bookBook())
store.dispatch(bookBook())
store.dispatch(bookBook())
store.dispatch(bookPen())
store.dispatch(bookPen())
store.dispatch(bookPen())
store.dispatch(bookPen())