import React from "react";
import { LoopIcon } from "assets";
import "./Button.css";

function Button(props) {
  const { primary, secondary, warning, danger, small, hasSpinner, white } =
    props;

  return (
    <>
      <button
        className={`btn
            ${primary ? "btn--primary" : ""}
            ${secondary ? "btn--secondary" : ""}
            ${warning ? "btn--warning" : ""}
            ${danger ? "btn--danger" : ""}
            ${white ? "btn--white" : ""}
            ${!secondary && !warning && !danger ? "btn--primary" : ""}
            ${small ? "btn--small" : ""}
      `}
        onClick={props.onClick}>
        <span className="btn__text">{props.children}</span>
        {hasSpinner && (
          <div className="btn__icon btn__icon--spinner">
            <LoopIcon />
          </div>
        )}
      </button>
    </>
  );
}

export default Button;
