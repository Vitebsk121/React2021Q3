import './App.scss';

import React from 'react';
import Header from '../header/header';
import Form from '../form/form';

  export interface InputValues {
    firstName: string,
    lastName: string,
    email: string,
    birthdayDate: string,
    country: string,
    offer: boolean,
    agree: boolean,
  }

class App extends React.Component {
  state: {
    formActive: string;
    formValues: {

    }
  };

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      formActive: 'none',
      formValues: {

      }
    };
  }

  activateInputForm = () => {
    this.setState({
      formActive: 'active',
    });
  };

  closeInputForm = (className: string) => {
    if (className === 'app__field active') {
      this.setState({
        formActive: 'none',
      });
    }
  };

  setFormValues = (values: InputValues): void => {
    console.log(values);
  }

  render() {
    let form: JSX.Element | null = <Form setFormValues={this.setFormValues}/>;
    if (this.state.formActive === 'none') {
      form = null;
    }
    return (
      <div className="wrapper">
        <div
          className={`app__field ${this.state.formActive}`}
          onClick={(e) => this.closeInputForm(e.target.className)}>
          <Header activateForm={this.activateInputForm} />
        </div>
        {form}
      </div>
    );
  }
}

export default App;
