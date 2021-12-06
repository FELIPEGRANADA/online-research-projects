import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { ApolloProvider } from '@apollo/client';
import client from './DAO/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>,
  document.getElementById('root')
);
