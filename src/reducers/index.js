import ListReducer from './List/ListReducer';
import TagsReducer from './Tags/TagsReducer'
import FilterReducer from './Filter/FilterReducer'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    list: ListReducer,
    tags: TagsReducer,
    filter: FilterReducer
});
