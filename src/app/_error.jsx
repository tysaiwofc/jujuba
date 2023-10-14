import React from 'react';

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>Ocorreu um erro no servidor</h1>
      <p>Status do erro: {statusCode}</p>
      {}
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorPage;
