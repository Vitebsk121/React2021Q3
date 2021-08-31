import { combineReducers } from 'redux';

import newsCardsReducer from './newsCardsReducer';

export const rootReducer = combineReducers({
  newsCards: newsCardsReducer,
});

export type RootType = ReturnType<typeof rootReducer>;
