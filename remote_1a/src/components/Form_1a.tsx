import React from 'react';
import './Form_1a.css';

const Form_1a: React.FC = () => {
  return (
    <div className="container">
      <h1 className="header">Form 1</h1>
      <form className="form">
        <label htmlFor="name" className="label">Name:</label>
        <input type="text" id="name" className="input" />
        
        <label htmlFor="email" className="label">Email:</label>
        <input type="email" id="email" className="input" />
        
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default Form_1a;
