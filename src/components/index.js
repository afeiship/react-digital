import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-digital';

export default class ReactDigital extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.any,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * If digit equal width.
     */
    flat: PropTypes.bool
  };

  static defaultProps = {
    value: ':',
    flat: false,
    onChange: noop
  };

  render() {
    const { className, value, flat, ...props } = this.props;
    return (
      <div
        data-value={value}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div
          className={`${CLASS_NAME}__body`}
          data-flat={flat}
          data-digital={value}>
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
