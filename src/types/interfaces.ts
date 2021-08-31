/* eslint-disable prettier/prettier */
export interface IAppState {
  isLoading?: boolean;
  newsCards?: INewsCard[];
  langFilter?: string;
  sortBy?: TSortType;
  searchValue?: string;
  currentPage?: number;
  countOfPages?: number;
  menuIsOpen?: boolean;
}

export type TSortType = string;

export interface IHeaderProps extends IAppState {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface INewsCard {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source?: { name: string };
  title: string;
  url: string;
  urlToImage: string;
  id: number;
}

export interface IMainProps {
  propsMain: IAppState;
  handleSort: (sortBy: TSortType) => void;
  handleLangFilter: (langFilter: string) => void;
  setPage: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface INewsCardState extends IAppState {
  error: null | string;
}

export enum INewsCardsTypes {
  FETCH_NEWSCARDS = 'FETCH_NEWSCARDS',
  FETCH_NEWSCARDS_SUCCES = 'FETCH_NEWSCARDS_SUCCES',
  FETCH_NEWSCARDS_ERROR = 'FETCH_NEWSCARDS_ERROR',
}

interface FetchNewsCardsAction {
  type: INewsCardsTypes.FETCH_NEWSCARDS;
}

interface FetchNewsCardsSuccesAction {
  type: INewsCardsTypes.FETCH_NEWSCARDS_SUCCES;
  payload: {
    cards: any[];
    totalPages: number;
    langFilter: string;
    sortBy: string;
    searchValue: string;
    currentPage: number;
  };
}

interface FetchNewsCardsErrorAction {
  type: INewsCardsTypes.FETCH_NEWSCARDS_ERROR;
  payload: string;
}

export type INewsCardAction =
  | FetchNewsCardsAction
  | FetchNewsCardsSuccesAction
  | FetchNewsCardsErrorAction;
