const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const receiveTasks = json => {
  const tasks = [];

  Object.keys(json).forEach(key => tasks.push(json[key].task));

  return {
    tasks,
    type: 'RECEIVE_TASKS',
    receivedAt: Date.now()
  };
};

export const taskAdded = value => ({
  type: 'TASK_ADDED',
  task: value
});


export const changeFormValue = value => ({
  type: 'FORM_VALUE_CHANGE',
  value
});


export const fetchTasks = () => {
  return dispatch => {
    return window.fetch('http://localhost:5000/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      } })
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(receiveTasks(json)))
      .catch(() => false);
  };
};

export const addTask = task => {
  return dispatch => {
    return window.fetch('http://localhost:5000/todos', {
      method: 'POST',
      body: JSON.stringify({ task }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(checkStatus)
      .then(() => dispatch(taskAdded(task)))
      .catch(() => false);
  };
};
