import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Example from '../Example';
import { reverseSentence } from './actions';

class ReversedSentence extends Component {
  render() {
    return (
      <div>
        <Example
          header="Example Three"
          title="Sentence Reverser"
          description="For any given sentence, the result will be the sentence
            with the words in reverse order."
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

ReversedSentence.propTypes = {
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  result: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.reversedSentence.inputValue,
    result: state.reversedSentence.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (value) => {
      dispatch(reverseSentence(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReversedSentence);
