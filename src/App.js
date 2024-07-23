import React from 'react';
import CustomerRewards from './components/CustomerRewards';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
          <CustomerRewards />
      </ErrorBoundary>
    </div>
  );
}

export default App;
