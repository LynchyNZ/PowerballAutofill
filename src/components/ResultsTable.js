import React from 'react';
import './ResultsTable.css';

const ResultsTable = props => {

  const mainNumbers = [...Array(36).keys()].slice(1);
  const powerballNumbers = [...Array(21).keys()].slice(1);

  return (
    <div className="container">
      <div className="table">
        {mainNumbers.map((value) => {
          return <div className={props.mainResults.includes(value) ? 'number result' : 'number'} key={value}>
            {props.mainResults.includes(value) ? <span className="number-icon">X</span> : '' }
            <span className="number-text">{value}</span>
            </div>;
        })}
      </div>

      <div className="powerball-banner">SELECT YOUR POWERBALL</div>
      <div className="table">
        {powerballNumbers.map((value) => {
          return <div className={props.powerballResult === value ? 'number result' : 'number'} key={value}>
              {props.powerballResult === value ? <span className="number-icon">X</span> : '' }
            <span className="number-text">{value}</span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default ResultsTable;