import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDigital from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-digital">
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
          <ReactDigital flat className="dib" value={0} />
          <ReactDigital flat className="dib" value={0} />
          <ReactDigital flat className="dib" value={':'} />
          <ReactDigital flat className="dib" value={1} />
          <ReactDigital flat className="dib" value={6} />
          <ReactDigital flat className="dib" value={':'} />
          <ReactDigital flat className="dib" value={0} />
          <ReactDigital flat className="dib" value={0} />
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
