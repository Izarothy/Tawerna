import React from "react";
import Pytanie from "./Pytanie";

function Obramowka() {
  let template =
    "Example text example text example text example text example text example text ";
  return (
    <div className="obramowka">
      <div>
        <Pytanie id="1" tekst={template} />
        <Pytanie id="2" tekst={template} />
        <Pytanie id="3" tekst={template} />
        <Pytanie id="4" tekst={template} />
        <Pytanie id="5" tekst={template} />
        <Pytanie id="6" tekst={template} />
        <Pytanie id="7" tekst={template} />
        <Pytanie id="8" tekst={template} />
        <Pytanie id="9" tekst={template} />
        <Pytanie id="10" tekst={template} />
      </div>
    </div>
  );
}

export default Obramowka;
