import './App.scss';

import React from 'react';

import { IAppState, IInputValues } from '../../modules/interfaces';
import Card from '../card/card';
import Form from '../form/form';
import Header from '../header/header';

class App extends React.Component<{}, IAppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      formActive: 'none',
      formValues: [],
    };
  }

  activateInputForm = () => {
    this.setState({
      formActive: 'active',
    });
  };

  closeInputForm = (className: string) => {
    if (className === 'app-field active') {
      this.setState({
        formActive: 'none',
      });
    }
  };

  setFormValues = (props: IInputValues): void => {
    const formValues = {
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      birthdayDate: props.birthdayDate,
      country: props.country,
      avatarURL: props.avatarURL,
    };

    this.setState((prevState) => ({
      formActive: 'none',
      formValues: [...prevState.formValues, { ...formValues }],
    }));
  };

  render() {
    let form: JSX.Element | null = <Form setFormValues={this.setFormValues} />;
    if (this.state.formActive === 'none') {
      form = null;
    }

    return (
      <div className="wrapper">
        <div
          role="presentation"
          className={`app-field ${this.state.formActive}`}
          onClick={(e) => this.closeInputForm((e.target as HTMLElement).className)}
          onKeyPress={(e) => {
            if (e.code === '53') {
              this.closeInputForm('app-field active');
            }
          }}>
          <Header activateForm={this.activateInputForm} />
          <div className="cards-field">
            {this.state.formValues.map((formValue, i) => (
              <Card key={i} formValue={formValue} />
            ))}
          </div>
        </div>
        {form}
      </div>
    );
  }
}

export default App;
