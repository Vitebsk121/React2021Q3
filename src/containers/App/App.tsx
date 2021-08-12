import './App.scss';

import React from 'react';

import axiosInst from '../../services/API/Api';
import { IAppState } from '../../shared/interfaces';
import Header from '../Header/Header';
import Main from '../Main/Main';

const apiKey = 'f3f422d21f5745108dc09bb5b9775aa3';

export default class App extends React.Component<{}, IAppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      isLoading: false,
      newsCards: [],
    };
  }

  // eslint-disable-next-line prettier/prettier
  isLoadingHandle = () => this.setState((prevState) => ({ isLoading: !prevState.isLoading }));

  formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({
      newsCards: [],
    });
    const searchValue: string = (event.target as HTMLFormElement).search.value;
    this.isLoadingHandle();
    try {
      const responce = await axiosInst.get(
        `everything?q=${searchValue}&apiKey=${apiKey}&language=ru&page=1&pageSize=10`,
      );

      const newsCards = responce.data.articles;

      this.setState((prevState) => ({
        newsCards: prevState.newsCards?.concat(newsCards),
      }));

      console.log(responce);
    } catch (error) {
      throw Error(error);
    } finally {
      this.isLoadingHandle();
    }
  };

  render() {
    const { isLoading } = this.state;
    const { newsCards } = this.state;

    return (
      <div className="App">
        <Header isLoading={isLoading} onSubmit={this.formSubmitHandle} />
        <Main cards={newsCards} />
      </div>
    );
  }
}
