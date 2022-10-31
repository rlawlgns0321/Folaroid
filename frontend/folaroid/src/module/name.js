import { createAction, handleActions } from "redux-actions";
// Action Type
const NAME_INSERT = 'name/NAME_INSERT';
const NAME_UPDATE = 'name/NAME_UPDATE';
const NAME_LOAD = 'name/NAME_LOAD';

// Action Create Function
export const nameLoad = createAction(NAME_LOAD, name => name)

export const nameInsert =  createAction(NAME_INSERT, (name, done) => ({
    name,
    done: true
}))

export const nameUpdate = createAction(NAME_UPDATE, (name, done) => ({
    name,
    done: true
}))

// initState
const initialState = {
    input: {
        name: '',
        done: false
    }
}

// Reducer

const name = handleActions(
    {
        [NAME_LOAD]: (state, action) => ({
            name: action.payload
        }),
        [NAME_INSERT]: (state, action) => ({
            name: state.name.concat(action.payload),
            done: true,
        }),
        [NAME_UPDATE]: (state, { payload: name }) => ({
            ...state,
            name: name
        }),
    },
    {
        name: []
    }
)

export default name;