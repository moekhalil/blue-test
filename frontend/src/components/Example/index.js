import React, { Component } from 'react';
import PropTypes from 'prop-types';

// style-loader is the webpack loader that handles sass, so I didn't have to
//  do anything special to support since I was basing this off create-react-app
import './styles.sass';

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

// ideally, some of these custom oneOfType's can be pulled into a file
Example.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  children: PropTypes.node.isRequired,
  result: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired
};

export default Example;
