import './App.scss';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import { IAppState } from '../../shared/interfaces';
import NewsDetail from '../Detail/Detail';
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
    return (
      <div className="App">
        <Drawer isOpen={menuIsOpen} onClose={this.menuCloseHandler} />
        <MenuToggle onToggle={this.menuIsOpenToggle} isOpen={menuIsOpen} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact render={() => <h1>ABOUT</h1>} />
          <Route path="/details/:id" exact component={NewsDetail} />
        </Switch>
      </div>
    );
  }
}

// TODO: add ditails page
