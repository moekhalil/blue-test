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

const reversed = (state = { inputValue: '', result: 'no result' }, action) => {
  switch (action.type) {
    case 'REVERSE_UPDATE':
      return {
        inputValue: action.value,
        result: action.value.split('').reverse().join('')
      };
    default:
      return state;
  }
};

const reversedSentence = (state = { inputValue: '', result: 'no result' }, action) => {
  switch (action.type) {
    case 'REVERSED_SENTENCE_UPDATE':
      return {
        inputValue: action.value,
        result: action.value.split(' ').reverse().join(' ')
      };
    default:
      return state;
  }
};

const todo = (state = { tasks: [], formValue: '' }, action) => {
  switch (action.type) {
    case 'FORM_VALUE_CHANGE':
      return { ...state, formValue: action.value };
    case 'RECEIVE_TASKS':
      return { ...state, tasks: action.tasks };
    case 'TASK_ADDED':
      return { ...state, tasks: [...state.tasks, action.task] };
    default:
      return state;
  }
};


export default combineReducers({
  fizzBuzz,
  reversed,
  reversedSentence,
  todo
});
