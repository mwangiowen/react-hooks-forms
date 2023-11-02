import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import ParentComponent from './components/parent';
import DisplayData from './components/display';
ReactDOM.render(
  <div>
    <Form />
    <ParentComponent /> 
    <DisplayData />
  </div>,
  document.getElementById('root')
);
