import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Example from '../Example';
import { fizzBuzzUpdate } from './actions';

const Description = () => (
  <div>
    For a number entered that is:
    <ul>
      <li>A multiple of three, it should return “Fizz”</li>
      <li>A multiple of five, it should return “Buzz”</li>
      <li>A multiple of three and five, it should return “Fizzbuzz”</li>
      <li>A multiple neither three and five, it should return the number</li>
    </ul>
  </div>
);

class Fizzbuzz extends Component {
  render() {
    return (
      <div className="fizzBuzz">
        <Example
          header="Example One"
          title="Fizzbuzz Generator"
          description={<Description />}
          result={this.props.result}
        >
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter number"
            onChange={e => this.props.onNumberChange(e.target.value)}
            value={this.props.inputValue}
          />

        </Example>
      </div>
    );
  }
}

Fizzbuzz.propTypes = {
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  result: PropTypes.string.isRequired,
  onNumberChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.fizzBuzz.inputValue,
    result: state.fizzBuzz.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNumberChange: (value) => {
      dispatch(fizzBuzzUpdate(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Fizzbuzz);
