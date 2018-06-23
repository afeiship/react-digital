import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
  };

  static defaultProps = {
    value: ':',
    flat: false
  };
  /*===properties end===*/

  render() {
    const { className, value, flat, ...props } = this.props;
    return (
      <div data-value={value} className={classNames('react-digital', className)}  {...props}>
        <div className="body" data-flat={flat} data-digital={value}>
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
