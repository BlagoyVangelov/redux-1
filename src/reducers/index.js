import { combineReducers } from 'redux';

import paintingsCategoriesList from './paintingsCategoriesList';
import furnituresList from './furnituresList';


const rootReducer = combineReducers({
    paintingsCategoriesList,
    furnituresList
});

export default rootReducer;
