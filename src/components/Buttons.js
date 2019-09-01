/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Buttons.css';

const Buttons = props => {
  const { isLoading } = props;

  const submitButton = isLoading ? (
    <FontAwesomeIcon color="white" spin transform="grow-3" icon={faBolt} />
  ) : (
    <FontAwesomeIcon color="white" transform="grow-3" icon={faBolt} />
  );

  return (
    <div className="buttons">
      <button
        type="submit"
        id="auto-fill"
        className="button auto-fill"
        onClick={() => props.getResults()}>
        {submitButton}
      </button>
      <button
        type="button"
        id="clear"
        className="button clear"
        onClick={() => props.clear()}>
        <FontAwesomeIcon color="white" transform="grow-3" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Buttons;
