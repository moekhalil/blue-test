import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.sass'; // style-loader is the webpack loader that handles sass


class Example extends Component {
  render() {
    const { header, title, description, children, result } = this.props;
    return (
      <div className="example">
        <div className="card">
          <div className="card-header">
            {header}
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="card-text">
              {description}
            </div>
            {children}
          </div>
        </div>
        <div className="results">
          <h4>{result}</h4>
        </div>
      </div>
    );
  }
}

Example.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  children: PropTypes.node.isRequired,
  result: PropTypes.string.isRequired
};

export default Example;
