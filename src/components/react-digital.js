import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
    value: 8
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
    };
  }

  render() {
    const { className, value, ...props } = this.props;
    return (
      <div className={classNames('react-digital', className)}  {...props}>
        <div className="body" data-digital={value}>
          <span className="d1"></span>
          <span className="d2"></span>
          <span className="d3"></span>
          <span className="d4"></span>
          <span className="d5"></span>
          <span className="d6"></span>
          <span className="d7"></span>
        </div>
      </div>
    );
  }
}
