import React, { useState } from "react";

const rozwin = () => {};
function Pytanie(props) {
  return (
    <div className="pytanie">
      <a href="#" onClick={rozwin}>
        <p>
          {props.id}. {props.tekst}
        </p>
      </a>
    </div>
  );
}

export default Pytanie;
