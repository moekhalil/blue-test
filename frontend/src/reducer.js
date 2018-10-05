import { combineReducers } from 'redux';

const getFizzBuzzResult = num => {
  if (num) {
    return `${(num % 3) ? '' : 'fizz'}${(num % 5) ? '' : 'buzz'}` || `${num}`;
  }

  return 'no result';
};


const fizzBuzz = (state = { inputValue: '', result: 'no result' }, action) => {
  switch (action.type) {
    case 'FIZZBUZZ_UPDATE':
      return {
        inputValue: action.value,
        result: getFizzBuzzResult(parseInt(action.value, 10))
      };
    default:
      return state;
  }
};

export default combineReducers({
  fizzBuzz
});
