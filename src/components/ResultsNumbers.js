import React from 'react';
import './ResultsNumbers.css';

const ResultsNumbers = props => {
  return (
    <div className="results-numbers">
      <div id="result-1" className={props.results ? 'result-circle showing' : 'result-circle'}>{props.mainResults[0]}</div>
      <div id="result-2" className={props.results ? 'result-circle showing' : 'result-circle'}>{props.mainResults[1]}</div>
      <div id="result-3" className={props.results ? 'result-circle showing' : 'result-circle'}>{props.mainResults[2]}</div>
      <div id="result-4" className={props.results ? 'result-circle showing' : 'result-circle'}>{props.mainResults[3]}</div>
      <div id="result-5" className={props.results ? 'result-circle showing' : 'result-circle'}>{props.mainResults[4]}</div>
      <div id="result-6" className={props.results ? 'result-circle showing' : 'result-circle'}>{props.mainResults[5]}</div>
      <div id="result-7" className={props.results ? 'result-circle showing' : 'result-circle'}>{props.mainResults[6]}</div>
      <div id="result-pow" className={props.results ? 'result-circle showing-pb' : 'result-circle'}>{props.results ? props.powerballResult : 'PB'}</div>
    </div>
  );
};

export default ResultsNumbers;
