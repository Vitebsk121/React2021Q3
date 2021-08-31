import { INewsCardAction, INewsCardState, INewsCardsTypes } from '../../types/interfaces';

const initialState: INewsCardState = {
  newsCards: [],
  isLoading: false,
  error: null,
  langFilter: 'ru',
  sortBy: 'publishedAt',
  searchValue: '',
  currentPage: 1,
  countOfPages: 0,
};

const newsCardsReducer = (
  state = initialState,
  action: INewsCardAction,
): INewsCardState => {
  switch (action.type) {
    case INewsCardsTypes.FETCH_NEWSCARDS:
      return { isLoading: true, error: null, newsCards: [] };
    case INewsCardsTypes.FETCH_NEWSCARDS_SUCCES:
      return {
        isLoading: false,
        error: null,
        newsCards: action.payload.cards,
        countOfPages: action.payload.totalPages,
        langFilter: action.payload.langFilter,
        sortBy: action.payload.sortBy,
        searchValue: action.payload.searchValue,
        currentPage: action.payload.currentPage,
      };
    case INewsCardsTypes.FETCH_NEWSCARDS_ERROR:
      return { isLoading: false, error: action.payload, newsCards: [] };
    default:
      return state;
  }
};

export default newsCardsReducer;
