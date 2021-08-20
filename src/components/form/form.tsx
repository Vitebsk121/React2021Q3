import './form.scss';

import React, { useState } from 'react';

import { ISetFormValues } from '../../modules/interfaces';

const Form = (props: ISetFormValues) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [offer, setOffer] = useState(false);
  const [agree, setAgree] = useState(false);
  const [avatarURL, getAvatar] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setFormValues({
      firstName,
      lastName,
      email,
      birthdayDate,
      country,
      offer,
      agree,
      avatarURL,
    });
  };

  const handleInput = (
    event: string,
    func: { (value: React.SetStateAction<string>): void; (arg0: string): void },
  ) => {
    func(event);
  };

  const setAvatar = (
    avatar: string | ArrayBuffer | null,
    elem: HTMLLabelElement | null,
  ) => {
    const element = elem;
    if (element === null) return;
    handleInput(`url(${String(avatar)}`, getAvatar);
    element.style.backgroundImage = `url(${avatar})`;
    element.style.backgroundSize = 'cover';
  };

  const checkDateOfBirth = (element: HTMLInputElement) => {
    const currentDate = new Date();
    const userBirthDate = new Date(element.value);

    if (userBirthDate >= currentDate) {
      setBirthdayDate('');
      return;
    }

    handleInput(element.value, setBirthdayDate);
  };

  const getFile = (elem: EventTarget & HTMLInputElement) => {
    const { files } = elem;
    if (files === null) throw Error('file is not founded');

    const reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = () => {
      const avatar = reader.result;
      setAvatar(avatar, elem.closest('.avatar'));
    };
  };

  return (
    <div className="app__form">
      <form
        className="reg__form"
        onSubmit={(event) => handleSubmit(event)}
        name="reg-form">
        <label className="form__label avatar-wrapper" htmlFor="avatar">
          Upload avatar:
          <div className="avatar">
            <input
              className="form__input"
              type="file"
              name="avatar"
              style={{
                opacity: '0',
                width: '100%',
                height: '100%',
                margin: '0',
              }}
              onChange={(e) => getFile(e.target)}
            />
          </div>
        </label>
        <label className="form__label" htmlFor="firstName">
          Name:
          <input
            type="text"
            className="form__input"
            required
            pattern="^[a-zA-Zа-яА-Я0-9 ]{0,30}[a-zA-Zа-яА-Я]+[ 0-9]*$"
            title={
              'Имя не может состоять только из цифр или содержать символы  ~ ! @ # $ % * () _ — + = | : ; " \' ` < > , . ? / ^, длинна имени не более 30 символов'
            }
            maxLength={30}
            placeholder="example: Alex"
            name="firstName"
            value={firstName}
            onChange={(event) => handleInput(event.target.value, setFirstName)}
          />
        </label>
        <label className="form__label" htmlFor="lastName">
          Last Name:
          <input
            type="text"
            className="form__input"
            required
            pattern="^[a-zA-Zа-яА-Я0-9 ]{0,30}[a-zA-Zа-яА-Я]+[ 0-9]*$"
            title={
              'Фамилия не может состоять только из цифр или содержать символы  ~ ! @ # $ % * () _ — + = | : ; " \' ` < > , . ? / ^, длинна имени не более 30 символов'
            }
            maxLength={30}
            placeholder="example: Novorski"
            name="lastName"
            value={lastName}
            onChange={(event) => handleInput(event.target.value, setLastName)}
          />
        </label>
        <label className="form__label" htmlFor="Email">
          Email:
          <input
            type="email"
            className="form__input"
            required
            maxLength={40}
            placeholder="example: alex@example.com"
            name="email"
            value={email}
            onChange={(event) => handleInput(event.target.value, setEmail)}
          />
        </label>
        <label className="form__label" htmlFor="birthdayDate">
          Your`s birthday:
          <input
            type="date"
            className="form__input date"
            required
            name="birthdayDate"
            value={birthdayDate}
            onChange={(event) => checkDateOfBirth(event.target)}
          />
        </label>
        <label className="form__label" htmlFor="country">
          Country:
          <select
            className="form__input"
            required
            name="country"
            value={country}
            onChange={(event) => handleInput(event.target.value, setCountry)}>
            <option>Russia</option>
            <option>Belarus</option>
            <option>USA</option>
            <option>French</option>
            <option>Germany</option>
          </select>
        </label>
        <label className="form__label offer" htmlFor="offer">
          I agree to create a card:
          <input
            type="checkbox"
            className="form__input"
            required
            name="offer"
            checked={offer}
            style={{ margin: '0 0 10px 10px' }}
            onChange={() => setOffer((prev) => !prev)}
          />
        </label>
        <label className="form__label agree" htmlFor="agree">
          I agree to create a card:
          <div className="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              checked={agree}
              required
              onChange={() => setAgree((prev) => !prev)}
            />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
              {' '}
            </label>
          </div>
        </label>
        <input className="form__btn" type="submit" value="Create" />
      </form>
    </div>
  );
};

export default Form;
