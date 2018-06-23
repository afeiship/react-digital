# react-digital
> React digital

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
  };

  static defaultProps = {
    value: ':'
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-digital --registry=https://registry.npm.taobao.org
```

```js
import ReactDigital from 'react-digital';
```

```scss
// customize your styles:
$react-digital-options:(
);

@import 'node_modules/react-digital/dist/style.scss';
```


## usage:
```jsx

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
        <div className="mr5_" style={{ fontSize: 10, marginTop: 20}}>
          <ReactDigital className="dib" value={0} />
          <ReactDigital className="dib" value={0} />
          <ReactDigital className="dib" value={':'} />
          <ReactDigital className="dib" value={1} />
          <ReactDigital className="dib" value={6} />
          <ReactDigital className="dib" value={':'} />
          <ReactDigital className="dib" value={0} />
          <ReactDigital className="dib" value={0} />
        </div>
      </div>
    );
  }
}

```
