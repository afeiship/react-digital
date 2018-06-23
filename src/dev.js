import './dev.scss';
import ReactDigital from './main';

/*===example start===*/

// install: npm install afeiship/react-digital --save
// import : import ReactDigital from 'react-digital'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-digital">
        <ReactDigital value={0} />
        <ReactDigital value={1} />
        <ReactDigital value={2} />
        <ReactDigital value={3} />
        <ReactDigital value={4} />
        <ReactDigital value={5} />
        <ReactDigital value={6} />
        <ReactDigital value={7} />
        <ReactDigital value={8} />
        <ReactDigital value={9} />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
