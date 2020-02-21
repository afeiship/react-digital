# react-digital
> React digital.

## installation
```shell
npm install -S @feizheng/react-digital
```

## update
```shell
npm update @feizheng/react-digital
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | any    | ':'     | Default value.                        |
| onChange  | func   | noop    | The change handler.                   |
| flat      | bool   | false   | If digit equal width.                 |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-digital/dist/style.scss";

  // customize your styles:
  $react-digital-options: ()
  ```
2. import js
  ```js
  import ReactDigital from '@feizheng/react-digital';
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

  ```

## documentation
- https://afeiship.github.io/react-digital/

## resources
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] Add: source.map file for dist(`you can upload for production debug`).
- [ ] BUG: npm run dev will clean dist.
