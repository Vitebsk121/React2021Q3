/* eslint-disable react/no-unused-state */
import './HomePage.scss';

import React from 'react';

import axiosInst from '../../services/API/Api';
import { IAppState, INewsCard, TSortType } from '../../shared/interfaces';
import Header from './Header/Header';
import Main from './Main/Main';

const apiKey = 'f3f422d21f5745108dc09bb5b9775aa3';

// const apiKeyReserv = 'c01db5a20bb2479eba9962427e07a8c3';

export default class HomePage extends React.Component<{}, IAppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      isLoading: false,
      newsCards: [],
      langFilter: 'ru',
      sortBy: 'publishedAt',
      searchValue: '',
      currentPage: 1,
      countOfPages: 0,
    };
  }

  componentDidMount() {
    // const savedState = localStorage.getItem('state');
    // this.setState((prevState) => JSON.parse(savedState || JSON.stringify(prevState)));
  }

  // componentWillUnmount() {
  //   const save = JSON.stringify(this.state);
  //   localStorage.setItem('state', save);
  // }

  // eslint-disable-next-line prettier/prettier
  isLoadingHandle = () => this.setState((prevState) => ({ isLoading: !prevState.isLoading }));

  handleApiData = async () => {
    this.isLoadingHandle();
    // eslint-disable-next-line prettier/prettier
    const {
      langFilter, sortBy, searchValue, currentPage,
    } = this.state;
    try {
      const responce = await axiosInst.get(
        `everything?q=${searchValue}&apiKey=${apiKey}&language=${langFilter}&sortBy=${sortBy}&page=${currentPage}&pageSize=9`,
      );

      const newsCards: INewsCard[] = await responce.data.articles;
      const countOfPages: number = Math.ceil((await responce.data.totalResults) / 9);

      this.setState({
        countOfPages,
        newsCards,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      this.isLoadingHandle();
    }
  };

  formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchValue: string = (event.target as HTMLFormElement).search.value;

    this.setState({
      currentPage: await 1,
      searchValue: await searchValue,
    });

    this.handleApiData();
  };

  handleLangFilter = async (langFilter: string) => {
    this.setState({
      langFilter: await langFilter,
    });
    this.handleApiData();
  };

  handleSort = async (sortBy: TSortType) => {
    this.setState({
      sortBy: await sortBy,
    });
    this.handleApiData();
  };

  handleCurrentPage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let currentPage: number = +(event.target as HTMLFormElement).currentPage.value;
    const { countOfPages } = this.state;

    if (countOfPages && currentPage > countOfPages) currentPage = countOfPages;

    this.setState({
      currentPage: await currentPage,
    });
    this.handleApiData();
  };

  render() {
    // eslint-disable-next-line prettier/prettier
    const { isLoading } = this.state;

    return (
      <>
        <Header isLoading={isLoading} onSubmit={this.formSubmitHandle} />
        <Main
          propsMain={this.state}
          handleSort={this.handleSort}
          handleLangFilter={this.handleLangFilter}
          setPage={this.handleCurrentPage}
        />
      </>
    );
  }
}
