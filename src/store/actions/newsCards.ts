import { Dispatch } from 'redux';

import axiosInst from '../../services/API/Api';
import { INewsCard, INewsCardAction, INewsCardsTypes } from '../../types/interfaces';

const apiKey = 'f3f422d21f5745108dc09bb5b9775aa3';

// const apiKeyReserv = 'c01db5a20bb2479eba9962427e07a8c3';

const fetchNewsCards = (
  page: number,
  filter: string,
  sort: string,
  value: string,
) => async (dispatch: Dispatch<INewsCardAction>) => {
  try {
    dispatch({ type: INewsCardsTypes.FETCH_NEWSCARDS });
    const responce = await axiosInst.get(
      `everything?q=${value}&apiKey=${apiKey}&language=${filter}&sortBy=${sort}&page=${page}&pageSize=9`,
    );
    const newsCards: INewsCard[] = await responce.data.articles;
    const countOfPages: number = Math.ceil((await responce.data.totalResults) / 9);
    dispatch({
      type: INewsCardsTypes.FETCH_NEWSCARDS_SUCCES,
      payload: {
        cards: newsCards,
        totalPages: countOfPages,
        sortBy: sort!,
        langFilter: filter!,
        searchValue: value!,
        currentPage: page!,
      },
    });
  } catch (e) {
    dispatch({
      type: INewsCardsTypes.FETCH_NEWSCARDS_ERROR,
      payload: 'Произошла ошибка при загрузке новостей',
    });
  }
};

export default fetchNewsCards;
