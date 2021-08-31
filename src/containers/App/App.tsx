/* eslint-disable prettier/prettier */
import './App.scss';

import React, {useState} from 'react';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import About from '../About/About';
import NewsDetail from '../Detail/NewsDetail';
import HomePage from '../HomePage/HomePage';
import ErrorPage from "../ErrorPage/ErrorPage";

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const location = useLocation();

  const routes = [
    { path: '/home', exact: true, Component: HomePage },
    { path: '/about', exact: true, Component: About },
    { path: '/details/:id', exact: true, Component: NewsDetail },
  ];

  const menuIsOpenToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const menuCloseHandler = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className="App">
      <Drawer isOpen={menuIsOpen} onClose={menuCloseHandler} />
      <MenuToggle onToggle={menuIsOpenToggle} isOpen={menuIsOpen} />
      <TransitionGroup component={null}>
        <CSSTransition timeout={500} className='page' unmountOnExit key={location.key}>
          <Switch location={location}>
            {routes.map(({exact, path, Component})  => (
              <Route key={path} path={path} exact={exact}>
                {() => {
                  return (
                    <div className='page'>
                      <Component />
                    </div>
                  )
                }}
              </Route>
            ))}
            <Redirect from='/' to='/home' exact/>
            <Route component={ErrorPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;

export const AppForTest = () => {
  return <App/>
};
