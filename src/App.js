import React from 'react';
import BuggyCounter from "./Components/BuggyCounter";
import ConditionalCompponent from './Components/ConditionalComponent';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <p> This is text </p>

      <ErrorBoundary themeColor='green'>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary themeColor='yellow'>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary themeColor='blue'>
        <BuggyCounter />
      </ErrorBoundary>
      <ConditionalCompponent color="red" />
      <ConditionalCompponent color="blue" />
      <ConditionalCompponent />
    </div >
  );
}

export default App
