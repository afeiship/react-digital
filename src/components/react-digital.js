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
    value: ':'
  };
  /*===properties end===*/

  get type(){
    const { value } = this.props;
    return value === '.' ? 'dot' : 'digital';
  }

  render() {
    const { className, value, ...props } = this.props;
    return (
      <div data-type={this.type} className={classNames('react-digital', className)}  {...props}>
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
