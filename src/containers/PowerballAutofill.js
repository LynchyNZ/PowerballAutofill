import React, { Component } from 'react';
import ResultsNumbers from '../components/ResultsNumbers';
import Buttons from '../components/Buttons';
import ResultsTable from '../components/ResultsTable';
import './PowerballAutofill.css';

class PowerballAutofill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainNumbers: [],
      powerballNumber: null,
      isLoading: false,
      showingResults: false,
      errorMsg: null
    };
  }

  getResults = () => {
    this.setState({
      isLoading: true
    });
    fetch(
      'https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults',
      {
        method: 'POST',
        body: JSON.stringify({
          CompanyId: 'GoldenCasket',
          MaxDrawCountPerProduct: 1,
          OptionalProductFilter: ['Powerball']
        }),
        headers: { 'Content-Type': 'application/json' }
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.Success === true) {
          this.setState({
            mainNumbers: data.DrawResults[0].PrimaryNumbers,
            powerballNumber: data.DrawResults[0].SecondaryNumbers[0],
            isLoading: false,
            showingResults: true
          });
        } else {
          this.setState({
            errorMsg: "Error: " + data.ErrorInfo.DisplayMessage,
            isLoading: false
          });
        }
      })
      .catch(error => this.setState({ errorMsg: error, isLoading: false }));
  };

  clear = () => {
    this.setState({
      isLoading: false,
      mainNumbers: [],
      powerballNumber: [],
      showingResults: false,
      errorMsg: null
    });
  };

  render() {
    return (
      <div>
        <div className="error">{this.state.errorMsg}</div>
        <div className="row">
          <div className="results-numbers">
            <ResultsNumbers
              mainResults={this.state.mainNumbers}
              powerballResult={this.state.powerballNumber}
              results={this.state.showingResults}
            />
          </div>
          <Buttons
            getResults={this.getResults}
            clear={this.clear}
            isLoading={this.state.isLoading}
          />
        </div>
        <ResultsTable
          mainResults={this.state.mainNumbers}
          powerballResult={this.state.powerballNumber}
        />
      </div>
    );
  }
}

export default PowerballAutofill;
