# react-digital
> React digital.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-digital
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | any    | false    | ':'     | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |
| flat      | bool   | false    | false   | If digit equal width.                 |


## usage
1. import css
  ```scss
  @import "~@jswork/react-digital/dist/style.css";

  // or use sass
  @import "~@jswork/react-digital/dist/style.scss";

  // customize your styles:
  $react-digital-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactDigital from '@jswork/react-digital';
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

  ```

## documentation
- https://afeiship.github.io/react-digital/


## license
Code released under [the MIT license](https://github.com/afeiship/react-digital/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-digital
[version-url]: https://npmjs.org/package/@jswork/react-digital

[license-image]: https://img.shields.io/npm/l/@jswork/react-digital
[license-url]: https://github.com/afeiship/react-digital/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-digital
[size-url]: https://github.com/afeiship/react-digital/blob/master/dist/react-digital.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-digital
[download-url]: https://www.npmjs.com/package/@jswork/react-digital
