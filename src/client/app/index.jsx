require('./style.sass');
import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div className="timer">
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('app')
  );
}

setInterval(tick, 1000);