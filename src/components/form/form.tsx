import './form.scss';

import React from 'react';

const Form = () => {
    return (
        <div className='app__form'>
            <form name='reg__form'>
                <input type='text'></input>
                <input type='text'></input>
                <input type='email'></input>
                <input type='tel'></input>
                <input type='date'></input>
                <input type='file'></input>
            </form>
        </div>
    )
}

export default Form;