import ReactDigital from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <div className="dib_ mr5_" style={{ fontSize: 20 }}>
          <ReactDigital value={2} />
          <ReactDigital value={0} />
          <ReactDigital value={1} />
          <ReactDigital value={7} />
          <ReactDigital value={'-'} />
          <ReactDigital value={1} />
          <ReactDigital value={2} />
          <ReactDigital value={'-'} />
          <ReactDigital value={0} />
          <ReactDigital value={7} />
        </div>
        <div className="mr5_" style={{ fontSize: 10, marginTop: 20 }}>
          <ReactDigital flat={true} className="dib" value={0} />
          <ReactDigital flat={true} className="dib" value={0} />
          <ReactDigital flat={true} className="dib" value={':'} />
          <ReactDigital flat={true} className="dib" value={1} />
          <ReactDigital flat={true} className="dib" value={6} />
          <ReactDigital flat={true} className="dib" value={':'} />
          <ReactDigital flat={true} className="dib" value={0} />
          <ReactDigital flat={true} className="dib" value={0} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
