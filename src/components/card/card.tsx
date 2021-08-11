import './card.scss';

import React from 'react';

import { IInputValues } from '../../modules/interfaces';

const Card = (props: { formValue: IInputValues }) => {
  let { avatarURL } = props.formValue;

  if (avatarURL === undefined || avatarURL === '') {
    avatarURL = 'url(https://hyip-news.com/uploads/avatar/default-avatar.jpg)';
  }

  const setBeckgroundColor: () => string = () => {
    const colors = [
      'rgba(131, 182, 53, 0.4)',
      'rgba(53, 182, 57, 0.4)',
      'rgba(53, 133, 182, 0.4)',
      'rgba(139, 53, 182, 0.4)',
    ];

    const rand = Math.floor(Math.random() * colors.length);

    return colors[rand];
  };

  return (
    <div style={{ backgroundColor: setBeckgroundColor() }} className="card">
      <div className="user-avatar" style={{ backgroundImage: avatarURL }} />
      <div className="user-info">
        <p className="user-title name">
          <strong>Name:</strong>
          <span className="title-value">
            {`${`${props.formValue.firstName}${props.formValue.lastName}`}`}
          </span>
        </p>
        <p className="user-title country">
          <strong>From:</strong>
          <span className="title-value">{`${props.formValue.country}`}</span>
        </p>
        <p className="user-title email">
          <strong>Email:</strong>
          <span className="title-value">{`${props.formValue.email}`}</span>
        </p>
        <p className="user-title birthday">
          <strong>Birthday:</strong>
          <span className="title-value">{`${props.formValue.birthdayDate}`}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
