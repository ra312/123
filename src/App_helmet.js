import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// ...

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Rauan Todo</title>
          <meta name="description" content="Todos on steroid!" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <h1>Rauan Akylzhanov</h1>
        {/* ... */}
      </div>
    );
  }
}

export default App;