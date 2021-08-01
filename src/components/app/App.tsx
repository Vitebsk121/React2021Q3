import './App.scss';

import React from 'react';
import Header from '../header/header';
import Form from '../form/form';


class App extends React.Component {

  state: {
    formActive: string,
    name: boolean,
  }

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      formActive: 'none',
      name: false,
    }

  };

  activateInputForm = () => {
    this.setState({
      formActive: 'active',
    });
  };

  closeInputForm = (className: string) => {
    if (className === 'app__field active') {
      this.setState({
        formActive: 'none',
      })
    }
  };

  render() {
    let form: JSX.Element | null = <Form />
    if (this.state.formActive === 'none') {
      form = null
    }
    return (
      <div className='wrapper'>
        <div 
          className={`app__field ${this.state.formActive}`}
          onClick={(e) => this.closeInputForm(e.target.className)}
        >
          <Header activateForm={this.activateInputForm} />
        </div>
        { form }
      </div> 
    )
  };

};

export default App;
