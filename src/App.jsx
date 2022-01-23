import React from 'react';
import { Container } from 'semantic-ui-react'
import TransactionsContainer from './components/TransactionsContainer';
import Store from './context/Store';

const App = () => {
    return (
      <Store>
        <Container>
            <TransactionsContainer/>
        </Container>
      </Store>
    )
}

export default App;