/* eslint-disable prettier/prettier */
import './App.scss';

import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import { IAppState } from '../../types/interfaces';
import About from '../About/About';
import NewsDetail from '../Detail/NewsDetail';
import HomePage from '../HomePage/HomePage';

export default class App extends React.Component<{}, IAppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };
  }

  menuIsOpenToggle = () => {
    this.setState((prevState) => ({
      menuIsOpen: !prevState.menuIsOpen,
    }));
  };

  menuCloseHandler = () => {
    this.setState({
      menuIsOpen: false,
    });
  };

  render() {
    const { menuIsOpen } = this.state;
    const routes = [
      { path: '/', exact: true, Component: HomePage },
      { path: '/about', exact: true, Component: About },
      { path: '/details/:id', exact: false, Component: NewsDetail },
    ];
    return (
      <div className="App">
        <Drawer isOpen={menuIsOpen} onClose={this.menuCloseHandler} />
        <MenuToggle onToggle={this.menuIsOpenToggle} isOpen={menuIsOpen} />
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} path={path} exact={exact}>
            {({ match }) => (
              <CSSTransition
                timeout={1000}
                classNames="page"
                unmountOnExit
                in={match !== null}
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    );
  }
}
