import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Example from '../Example';
import { reverseString } from './actions';

class Reversed extends Component {
  render() {
    return (
      <div>
        <Example
          header="Example Two"
          title="String Reverser"
          description="For any given input, the result will be the reverse."
          result={this.props.result}
        >
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter string"
            onChange={e => this.props.onChange(e.target.value)}
            value={this.props.inputValue}
          />

        </Example>
      </div>
    );
  }
}

Reversed.propTypes = {
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  result: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.reversed.inputValue,
    result: state.reversed.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (value) => {
      dispatch(reverseString(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Reversed);
