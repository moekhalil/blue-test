import React from 'react';
import PropTypes from 'prop-types';

const Create = ({ formValue, onAdd, onChange }) => (
  <div className="create-task">
    <input
      className="form-control form-control-lg"
      type="text"
      placeholder="Add a task"
      value={formValue}
      onChange={onChange}
    />
    <button
      type="button"
      onClick={() => onAdd(formValue)}
      className="btn btn-primary btn-lg active"
    >
      Create
    </button>
  </div>
);

Create.propTypes = {
  formValue: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Create;
