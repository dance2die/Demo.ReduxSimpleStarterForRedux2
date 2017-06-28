import ActionCreator from '../actions/index';
import { connect } from 'react-redux';

// State argument is not an application state, 
// only the state this reducer is reponsible for
export default function (state = null, action) {
    switch (action.type) {
        case "BOOK_SELECTED":
            return action.payload;
    }

    return state;
}