import './form.scss';

import React, { useState } from 'react';
import { InputValues } from '../app/App';

const Form = (setFormValues: (values: InputValues) => void) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [country, setCountry] = useState('Belarus');
    const [offer, setOffer] = useState(false);
    const [agree, setAgree] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormValues({
            firstName,
            lastName,
            email,
            birthdayDate,
            country,
            offer,
            agree
        });
    };

    const  handleInput = (event: string, func: { (value: React.SetStateAction<string>): void; (arg0: string): void; }) => {
        func(event);
    }

    return (
        <div className='app__form'>
            <form 
                className='reg__form'
                onSubmit={(event) => handleSubmit(event)}
                name='reg-form'
            >
                <label 
                    className='form__label'
                    htmlFor='firstName'
                >
                  Name:
                    <input
                        type='text' 
                        className='form__input'
                        required
                        placeholder='example: Alex'
                        name='firstName'
                        value={firstName}
                        onChange={(event) => handleInput(event.target.value, setFirstName)}
                    />
                </label>
                <label 
                    className='form__label'
                    htmlFor='lastName'
                >
                  Last Name:
                    <input
                        type='text'
                        className='form__input'
                        required
                        placeholder='example: Novorski'
                        name='lastName'
                        value={lastName}
                        onChange={(event) => handleInput(event.target.value, setLastName)}
                    />
                </label>
                <label 
                    className='form__label'
                    htmlFor='Email'
                >
                  Email:
                    <input
                        type='text'
                        className='form__input'
                        required
                        placeholder='example: alex@example.com'
                        name='email'
                        value={email}
                        onChange={(event) => handleInput(event.target.value, setEmail)}
                    />
                </label>
                <label
                    className='form__label'
                    htmlFor='birthdayDate'
                >
                  Your`s birthday:
                    <input
                        type='date'
                        className='form__input date'
                        required
                        name='birthdayDate'
                        value={birthdayDate}
                        onChange={(event) => handleInput(event.target.value, setBirthdayDate)}
                    />
                </label>
                <label
                    className='form__label'
                    htmlFor='country'
                >
                  Country:
                    <select
                        className='form__input'
                        required
                        name='country'
                        value={country}
                        onChange={(event) => handleInput(event.target.value, setCountry)}
                    >
                        <option>Russia</option>
                        <option>Belarus</option>
                        <option>USA</option>
                        <option>Franch</option>
                        <option>Germany</option>
                    </select>
                </label>
                <label
                    className='form__label offer'
                    htmlFor='offer'
                >
                  I agree to create a card:
                    <input
                        type='checkbox'
                        className='form__input'
                        required
                        name='offer'
                        checked={offer}
                        style={{margin: '0 0 10px 10px'}}
                        onChange={() => setOffer(prev => !prev)}
                    />
                </label>
                <label
                    className='form__label'
                    htmlFor='agree'
                >
                  I agree to create a card:
                <div className="onoffswitch">
                    <input 
                        type="checkbox" 
                        name="onoffswitch" 
                        className="onoffswitch-checkbox" 
                        id="myonoffswitch"
                        checked={agree}
                        onChange={() => setAgree(prev => !prev)}
                    />
                    <label 
                        className="onoffswitch-label" 
                        htmlFor="myonoffswitch"
                    />
                </div>
                </label>
                <label
                    className='form__label'
                    htmlFor='avatar'
                >
                  Upload avatar:
                    <input
                        className='form__input'
                        type='file'
                        name='avatar'
                    />
                </label>
                <input
                    className='form__btn'
                    type='submit'
                    value='Create'
                />
            </form>
        </div>
    )
}

export default Form;