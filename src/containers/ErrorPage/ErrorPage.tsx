import React from "react";

type ErrorPageProps = {};

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <div className='page'>
      <h1 style={{color: "red"}}>Вы перешли на несуществующую страницу</h1>
      <h2>Для перехода на интересующую вас страницу воспользуйтесь меню слева</h2>
    </div>
  );
};

export default ErrorPage;